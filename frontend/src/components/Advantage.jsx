import React from "react"
import { motion } from "framer-motion"
import CardSwap, { Card } from "./CardSwap"

const copilotModes = [
  {
    title: "Auto-Pilot",
    desc: "Set preferences once. Agent applies to relevant roles daily.",
    meta: "3-8 applications/day",
  },
  {
    title: "Interview Prep",
    desc: "AI conducts realistic mock interviews with instant feedback.",
    meta: "Unlimited practice",
  },
  {
    title: "Network Effects",
    desc: "Get referred by verified developers already in top companies.",
    meta: "3x response rate",
  },
]

const coreNodes = [
  {
    title: "Neural Matching",
    desc: "Deep learning models analyze your true skills vs. what you've written.",
    gradient: "from-[#1e2a58]/90 via-[#142044]/88 to-[#0d142f]/92",
    accent: "bg-[#72f5ff]",
  },
  {
    title: "Market Intelligence",
    desc: "Real-time salary trends and demand forecasting guide every move.",
    gradient: "from-[#18304e]/90 via-[#12263f]/88 to-[#0b192b]/92",
    accent: "bg-[#6ec2ff]",
  },
  {
    title: "Behavioral Prediction",
    desc: "Pattern recognition from 10,000+ successful placements.",
    gradient: "from-[#0d2f3f]/92 via-[#0a2533]/90 to-[#081a26]/92",
    accent: "bg-[#7ce8ff]",
  },
  {
    title: "Success Optimization",
    desc: "Adaptive pacing prevents burnout and maximizes response rates.",
    gradient: "from-[#132d46]/92 via-[#0f2439]/90 to-[#0a1a2a]/92",
    accent: "bg-[#7fd2ff]",
  },
]

const Advantage = () => {
  return (
    <section id="product" className="relative py-28 px-6 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-white/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[460px] h-[460px] bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative space-y-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.24em]">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              Mode
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Pick the mode, stay in flow</h3>
            <p className="text-white/80 leading-relaxed max-w-xl">
              Auto-Pilot runs your daily outreach, Interview Prep sharpens your responses with realistic drills, and Network Effects unlocks verified referrals—each tuned to the same core intelligence.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm text-white/70">
              {copilotModes.map((mode) => (
                <div key={mode.title} className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200 mb-2">{mode.title}</p>
                  <p className="text-white/80 text-sm">{mode.meta}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_60%_30%,rgba(96,176,255,0.18),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(82,255,238,0.12),transparent_45%)] blur-3xl" />
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
              {copilotModes.map((mode) => (
                <Card key={mode.title}>
                  <span className="pill">
                    <span className="w-2 h-2 rounded-full bg-cyan-300 inline-block" />
                    {mode.title}
                  </span>
                  <p>{mode.desc}</p>
                  <p className="meta">{mode.meta}</p>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </div>

        <motion.div
          id="core-engine"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[28px] border border-white/12 bg-gradient-to-br from-[#0b1426] via-[#0a1222] to-[#050910] p-8 overflow-hidden shadow-[0_30px_120px_rgba(3,8,20,0.6)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,176,255,0.12)_0%,_rgba(7,18,34,0.7)_50%,_rgba(5,9,16,0.95)_80%)]" />
          <div className="absolute -left-10 top-10 w-72 h-72 bg-cyan-400/12 blur-[120px]" />
          <div className="absolute -right-8 bottom-0 w-64 h-64 bg-blue-500/10 blur-[120px]" />

          <div className="relative space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">Skynetic AI Core Engine</p>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Signals that keep developers in flow</h3>
                <p className="text-white/70 mt-2 max-w-2xl">Neural intelligence, behavioral prediction, and market awareness work together to deliver the clean, actionable signal shown below.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_260px_minmax(0,1fr)] gap-8 items-center">
              <div className="space-y-6">
                {coreNodes.slice(0, 2).map((node, idx) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br ${node.gradient} p-5 shadow-xl`}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-white/5" />
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${node.accent} shadow-[0_0_18px_rgba(190,255,115,0.45)]`} />
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">Core Signal</p>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{node.title}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{node.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative flex items-center justify-center py-8">
                <motion.div
                  className="absolute w-64 h-64 rounded-full bg-cyan-300/10 blur-3xl"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.6, 0.45] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-48 h-48 rounded-full border border-cyan-200/25"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.8, 0.4, 0.8] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.div
                  className="absolute w-40 h-40 rounded-full border border-cyan-200/35"
                  animate={{ rotate: [0, 6, 0], opacity: [0.85, 0.55, 0.85] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.6 }}
                />

                <div className="relative w-44 h-44 rounded-full bg-gradient-to-b from-[#0f1f35] via-[#0b1729] to-[#060d18] border border-cyan-200/45 shadow-[0_0_80px_rgba(96,176,255,0.28)] flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200 text-slate-900 font-bold shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                      <path
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3.5c-3.6 0-6.5 2.9-6.5 6.5v2c0 1.5 1 2.8 2.4 3.2.6.2 1.1.7 1.1 1.4v.4c0 1 .8 1.8 1.8 1.8H12m0-15c3.6 0 6.5 2.9 6.5 6.5v2c0 1.5-1 2.8-2.4 3.2-.6.2-1.1.7-1.1 1.4v.4c0 1-.8 1.8-1.8 1.8H12m-3.25-12c-1 .3-1.75 1.2-1.75 2.3V12c0 .7.4 1.3 1 1.6l.4.2c.2.1.35.3.35.6v1c0 .55.45 1 1 1H12m3.25-12c1 .3 1.75 1.2 1.75 2.3V12c0 .7-.4 1.3-1 1.6l-.4.2c-.2.1-.35.3-.35.6v1c0 .55-.45 1-1 1H12m0-11.25v2.4m0 2.1v2.1"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-white">Skynetic AI</p>
                  <p className="text-sm text-white/60">Core Engine</p>
                </div>

                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <span className="absolute left-[-40%] top-[38%] h-px w-[260px] origin-left -rotate-[14deg] bg-gradient-to-r from-transparent via-cyan-200/75 to-transparent blur-[1px]" />
                  <span className="absolute left-[-40%] top-[62%] h-px w-[260px] origin-left rotate-[14deg] bg-gradient-to-r from-transparent via-cyan-200/75 to-transparent blur-[1px]" />
                  <span className="absolute right-[-40%] top-[38%] h-px w-[260px] origin-right rotate-[14deg] bg-gradient-to-l from-transparent via-cyan-200/75 to-transparent blur-[1px]" />
                  <span className="absolute right-[-40%] top-[62%] h-px w-[260px] origin-right -rotate-[14deg] bg-gradient-to-l from-transparent via-cyan-200/75 to-transparent blur-[1px]" />
                </div>
              </div>

              <div className="space-y-6">
                {coreNodes.slice(2).map((node, idx) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br ${node.gradient} p-5 shadow-xl`}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-white/5" />
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${node.accent} shadow-[0_0_18px_rgba(190,255,115,0.45)]`} />
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">Core Signal</p>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{node.title}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{node.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Advantage
