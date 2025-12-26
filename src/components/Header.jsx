import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import gsap from "gsap"

const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const brandRef = useRef(null)
  const rocketRef = useRef(null)
  const trailRef = useRef(null)

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  }

  const navItems = [
    { label: "Features", target: "core-engine" },
    { label: "Pricing", target: "pricing" },
    { label: "Testimonials", target: "testimonials" },
    { label: "FAQ", target: "faq" },
  ]

  useEffect(() => {
    const brandEl = brandRef.current
    const rocketEl = rocketRef.current
    const trailEl = trailRef.current
    if (!brandEl || !rocketEl || !trailEl) return

    const rocketWidth = rocketEl.offsetWidth || 0
    const brandWidth = brandEl.offsetWidth || 0
    const travel = Math.max(0, brandWidth - rocketWidth + 2)

    const ctx = gsap.context(() => {
      gsap.set(rocketEl, { x: -6, opacity: 0, rotation: 90, transformOrigin: "50% 50%" })
      gsap.set(trailEl, { scaleX: 0, transformOrigin: "left center", opacity: 0.85 })

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
      tl.to(rocketEl, { opacity: 1, duration: 0.24 })
      tl.to(trailEl, { scaleX: 1, duration: 1.6, ease: "power3.out" }, "-=0.05")
      tl.to(rocketEl, { x: travel, duration: 1.6, ease: "power3.out", rotation: 90 }, "-=1.6")
    }, brandEl)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerOffset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border-b border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.25)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo */}
        <div className="nav-rocket-wrap">
          <motion.button
            ref={brandRef}
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-extrabold uppercase tracking-wide text-lg sm:text-xl md:text-2xl cursor-pointer bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual"
            onClick={() => scrollTo("hero")}
            aria-label="Go to top"
          >
            Skynetic
          </motion.button>

          <span className="rocket-track" aria-hidden="true">
            <span ref={trailRef} className="rocket-line" />
            <span ref={rocketRef} className="rocket-icon">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M32 6c6 6 10 16 10 24 0 10-4 16-10 24-6-8-10-14-10-24 0-8 4-18 10-24Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 26a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 36H14l-4 8h8l4-8Zm20 0h8l4 8h-8l-4-8Zm-10 18v8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="rocket-plume" />
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm sm:text-base">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => (item.action ? item.action() : scrollTo(item.target))}
              className="cursor-pointer font-semibold text-slate-100 hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/signup")}
          className="hidden md:inline-block px-6 py-2 rounded-full font-semibold bg-white/10 text-white border border-white/25 shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-white/16 hover:border-white/35 transition text-sm sm:text-base backdrop-blur-md"
        >
          Join Skynetic
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-95 transition border border-white/25 backdrop-blur-xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block w-5 h-[2px] bg-white rounded" />
            <span className="block w-5 h-[2px] bg-white rounded" />
            <span className="block w-5 h-[2px] bg-white rounded" />
          </span>
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white/10 backdrop-blur-2xl border-l border-white/20 text-white z-50 shadow-2xl flex flex-col p-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="self-end w-10 h-10 flex items-center justify-center rounded-full bg-white/12 border border-white/25 text-white text-2xl mb-8 active:scale-95 transition shadow-md backdrop-blur"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <HiX />
              </button>

              <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="text-left px-4 py-3 rounded-xl bg-white/8 border border-white/20 text-white font-semibold hover:bg-white/14 active:scale-[0.98] transition backdrop-blur"
                    onClick={() => (item.action ? item.action() : scrollTo(item.target))}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => {
                  setIsOpen(false)
                  navigate("/signup")
                }}
                className="mt-auto px-6 py-3 rounded-xl font-semibold bg-white/14 text-white border border-white/25 hover:bg-white/20 active:scale-[0.98] transition backdrop-blur"
              >
                Join Skynetic
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header


