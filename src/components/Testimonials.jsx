import React from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Developer @ Google",
    quote: "Landed my dream job in just 2 weeks. The AI interview prep was incredibly helpful.",
    stack: "React · Node.js · AWS",
  },
  {
    name: "Sarah Miller",
    role: "Full Stack Engineer @ Stripe",
    quote: "Finally, a platform that understands developers. No more spam applications.",
    stack: "Python · Django · PostgreSQL",
  },
  {
    name: "James Wilson",
    role: "Frontend Lead @ Meta",
    quote: "The smart matching saved me 40+ hours of job hunting. Highly recommend!",
    stack: "TypeScript · Vue.js · GraphQL",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-blue-400/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[380px] h-[380px] bg-cyan-300/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[28px] bg-white/8 border border-white/15 backdrop-blur-xl p-10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-blue-100">Built for Every Modern Developer</p>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Join thousands who've transformed their search</h3>
            </div>
            <div className="text-sm text-white/75">Trusted by 1,247 developers</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 h-full"
              >
                <p className="text-white/70 text-sm mb-4 leading-relaxed">“{t.quote}”</p>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/60 text-sm">{t.role}</p>
                <p className="text-white/60 text-xs mt-3">{t.stack}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
