import { motion } from "framer-motion"
import MagicBento from "./MagicBento"

const agentSignals = [
  { title: "94% fit", description: "Precision matching using behavioral AI", label: "Behavioral AI" },
  { title: "∞ growth", description: "Learns from every interaction", label: "Continuous Learning" },
  { title: "24/7", description: "Applications, prep, and insights while you rest", label: "Always On" },
]

const comparison = [
  { label: "Apps", old: "50+", fresh: "8" },
  { label: "Time", old: "14 days", fresh: "3 days" },
  { label: "Response", old: "5%", fresh: "47%" },
  { label: "Interviews", old: "2-3", fresh: "3-5" },
]

const PainPoints = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative w-full space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em] mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-300" />
            Your AI Agent Never Sleeps
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">
            While you rest, your opportunities multiply
          </h2>
          <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
            Skynetic's agent works 24/7—scanning roles, crafting tailored applications, and prepping you for interviews.
            This is augmentation, not generic automation.
          </p>

          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={300}
            particleCount={12}
            glowColor="82, 156, 255"
            cards={agentSignals.map((card) => ({ ...card, color: "#0b1426" }))}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[28px] bg-gradient-to-br from-[#0c1427]/95 via-[#0a1222]/90 to-[#060b16]/95 border border-white/12 backdrop-blur-xl p-10 shadow-[0_20px_80px_rgba(5,12,25,0.65)] overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(82,156,255,0.14),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(82,196,255,0.12),transparent_35%)]" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-100">From Spray & Pray to Surgical Precision</p>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Watch the transformation in real-time</h3>
              <p className="text-white/70 mt-2 max-w-2xl">Traditional friction vs. Skynetic's paced, contextual flow shown side-by-side.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 shadow-inner">
                Average improvement <span className="font-semibold text-cyan-200">9.4x</span>
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-16 w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/35 to-lime-200/0" />

            <div className="grid grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] gap-5 items-center mb-8 px-2">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-rose-100/90 justify-start text-left leading-[1.25] pr-2 whitespace-normal break-words">
                <span className="w-2 h-2 rounded-full bg-rose-300" />
                Traditional approach
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300/35 via-cyan-200/24 to-blue-500/18 border border-cyan-200/35 shadow-[0_0_24px_rgba(82,156,255,0.5)] flex items-center justify-center backdrop-blur-sm">
                  <div className="absolute inset-[-6px] rounded-full blur-xl bg-cyan-300/25" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(82,156,255,0.9)]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 3L6 14h5v7l7-11h-5V3Z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end text-[11px] sm:text-xs uppercase tracking-[0.2em] text-cyan-100/90 text-right leading-[1.25] pl-2 whitespace-normal break-words">
                <span className="w-2 h-2 rounded-full bg-cyan-300" />
                Skynetic intelligence
              </div>
            </div>

            {/* Mobile flow chart mirroring desktop */}
            <div className="md:hidden grid gap-4">
              {comparison.map((item, idx) => (
                <div key={item.label} className="grid grid-cols-[minmax(0,1fr)_38px_minmax(0,1fr)] gap-3 items-stretch">
                  <div className="rounded-2xl border border-rose-200/25 bg-gradient-to-r from-[#1b0f1e]/90 via-[#1c1627]/90 to-[#161625]/85 px-4 py-4 shadow-[0_10px_30px_rgba(73,22,58,0.25)] text-sm sm:text-base">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-rose-100/80 mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-rose-100">{item.old}</p>
                    <p className="hidden md:block text-sm text-white/70 leading-relaxed">Spray-and-pray, slow signals.</p>
                  </div>

                  <div className="relative flex flex-col items-center justify-start pt-2">
                    <div className="absolute top-0 bottom-0 w-px bg-white/12" />
                    <div className="relative z-10 w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(82,156,255,0.6)]" />
                    {idx !== comparison.length - 1 && <div className="flex-1" />} {/* spacer keeps line full height */}
                  </div>

                  <div className="rounded-2xl border border-cyan-200/25 bg-gradient-to-r from-[#0f1f2f]/90 via-[#10283a]/88 to-[#0f2d3a]/85 px-4 py-4 shadow-[0_10px_30px_rgba(82,156,255,0.22)] text-sm sm:text-base">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/85 mb-1">{item.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-white">{item.fresh}</span>
                    </div>
                    <p className="hidden md:block text-sm text-white/70 leading-relaxed">Paced outreach with contextual fit.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop dual-column view */}
            <div className="hidden md:grid gap-3">
              {comparison.map((item) => (
                <div key={item.label} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-stretch">
                  <div className="rounded-2xl border border-rose-200/25 bg-gradient-to-r from-[#1b0f1e]/90 via-[#1c1627]/90 to-[#161625]/85 px-5 py-4 shadow-[0_10px_30px_rgba(73,22,58,0.25)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-100/80 mb-2">{item.label}</p>
                    <p className="text-lg font-semibold text-rose-100">{item.old}</p>
                    <p className="text-sm text-white/70">Spray-and-pray, slow signals.</p>
                  </div>

                  <div className="relative hidden md:flex flex-col items-center justify-center">
                    <div className="h-full w-px bg-white/10" />
                    <div className="absolute w-3.5 h-3.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(82,156,255,0.65)]" />
                  </div>

                  <div className="rounded-2xl border border-cyan-200/25 bg-gradient-to-r from-[#0f1f2f]/90 via-[#10283a]/88 to-[#0f2d3a]/85 px-5 py-4 shadow-[0_10px_30px_rgba(82,156,255,0.22)] md:mt-0 mt-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/85 mb-2">{item.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-white">{item.fresh}</span>
                      <span className="text-sm text-white/60">targeted</span>
                    </div>
                    <p className="text-sm text-white/70">Paced outreach with contextual fit.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-cyan-200/30 bg-gradient-to-r from-[#0f1f2f]/80 via-[#10273b]/80 to-[#123047]/80 px-6 py-4 flex items-center justify-center gap-3 shadow-[0_12px_40px_rgba(82,156,255,0.28)]">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 text-slate-900 flex items-center justify-center shadow-[0_0_18px_rgba(82,156,255,0.55)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path
                    d="M3 18.5 10.5 11 15.5 16l6.5-6.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.2 9.5H22v3.8"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute inset-[-6px] rounded-full blur-xl bg-cyan-300/40" />
              </div>
              <p className="text-white text-base">
                Average improvement: <span className="font-bold text-cyan-200">9.4x better results</span>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default PainPoints