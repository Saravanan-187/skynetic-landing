import React, { useEffect, useMemo, useRef, useState } from "react"
import "./CardSwap.css"

const Card = React.forwardRef(({ children, className = "", style = {} }, ref) => (
  <div ref={ref} className={`card ${className}`} style={style}>
    {children}
  </div>
))

Card.displayName = "Card"

const CardSwap = ({ children, cardDistance = 60, verticalDistance = 70, delay = 5000, pauseOnHover = true }) => {
  const cards = useMemo(() => React.Children.toArray(children), [children])
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const start = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length)
    }, delay)
  }

  useEffect(() => {
    if (!cards.length) return undefined
    start()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [cards.length, delay])

  const handleMouseEnter = () => {
    if (!pauseOnHover) return
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleMouseLeave = () => {
    if (!pauseOnHover || !cards.length) return
    start()
  }

  return (
    <div className="card-swap-shell" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-swap-container">
        {cards.map((card, idx) => {
          const depth = (idx - active + cards.length) % cards.length
          const translateX = depth * cardDistance
          const translateY = depth * -verticalDistance
          const rotateY = depth * -5
          const rotateX = depth * 3
          const scale = depth === 0 ? 1 : 0.98 - depth * 0.03
          const opacity = depth >= cards.length - 1 ? 0.35 : 1
          const zIndex = cards.length - depth

          return React.cloneElement(card, {
            key: idx,
            className: `${card.props.className || ""} card-theme`,
            style: {
              ...card.props.style,
              transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, ${-depth * 80}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
              zIndex,
              opacity,
            },
          })
        })}
      </div>
    </div>
  )
}

export { Card }
export default CardSwap
