import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const CtaStrip = () => {
  const navigate = useNavigate()

  return (
    <section className="relative py-14 px-6 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(82,156,255,0.16),transparent_38%),radial-gradient(circle_at_80%_50%,rgba(122,255,232,0.12),transparent_36%)]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_80px_rgba(5,12,25,0.45)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-100">Ready to transform your job search?</p>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Join thousands of developers accelerating with Skynetic.</p>
              <p className="text-white/70 mt-2">Jump in—your smarter outreach begins now.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                className="min-w-[180px] px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:translate-y-[-1px] transition text-center"
                onClick={() => navigate("/signup")}
              >
                Get started for free
              </button>
              <button className="min-w-[180px] px-5 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white hover:text-slate-900 transition text-center"
              onClick={()=>{
                navigate("/signup")
              }}>
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaStrip
