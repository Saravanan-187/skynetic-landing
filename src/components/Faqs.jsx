import React, { useState } from "react"
import { motion } from "framer-motion"

const faqs = [
  {
    q: "What exactly is Skynetic?",
    a: "An AI-powered job matching platform that combines intelligence, pacing, and preparation so developers land better roles faster.",
  },
  {
    q: "How is it different from LinkedIn or Indeed?",
    a: "We focus on verified skills, behavioral signals, and adaptive pacing instead of keyword matches and volume applications.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your data is encrypted in transit and at rest. You control what gets shared with companies.",
  },
  {
    q: "Can small companies use Skynetic?",
    a: "Absolutely. Teams of any size can tap into the verified developer pool and smart matching engine.",
  },
]

const Faqs = () => {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => {
    setOpen((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="faq" className="relative py-24 px-6 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-blue-400/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-6 right-1/4 w-[360px] h-[360px] bg-cyan-300/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[24px] border border-white/15 bg-white/6 backdrop-blur-xl p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-100">Answers to Your Top Questions</p>
              <h3 className="text-3xl font-bold mt-3 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Clarity before you commit</h3>
              <p className="text-white/70 mt-2">How it works, how it's different, and how your data stays secure.</p>
            </div>
            <div className="flex-1 grid gap-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  className="rounded-2xl border border-white/12 bg-white/6 p-5"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-3 text-left"
                  >
                    <h4 className="text-white font-semibold">{faq.q}</h4>
                    <motion.span
                      animate={{ rotate: open === idx ? 45 : 0, opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="text-white/70 text-lg"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === idx ? "auto" : 0, opacity: open === idx ? 1 : 0, marginTop: open === idx ? 8 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs
