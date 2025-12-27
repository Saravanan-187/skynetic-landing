import { motion } from "framer-motion"
import { fadeUp } from "../animations/motion"

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 md:pt-24 pb-12 md:pb-14 flex justify-center text-white">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10"
      >
        <button className="border border-white/60 text-white rounded-full px-6 py-2 backdrop-blur-sm hover:bg-white hover:text-gray-900 transition">
          Job Search Super Charged
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
