import { motion } from "framer-motion"
import TextType from "./TextType"

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="relative py-16 md:py-18 px-4 overflow-hidden flex items-center justify-center text-center -mt-12 md:-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center perspective-1000 text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight leading-[1.1]"
          >
            <TextType
              text={["Land your Dream\nDev Job."]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              loop={false}
              className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-slate-200 to-slate-500"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            className="h-1 w-32 bg-white mx-auto mt-8 rounded-full origin-center"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Stats




