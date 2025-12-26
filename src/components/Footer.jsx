import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer id="connect" className="relative py-32 text-white overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[140px]" />
      </div>

      {/* Glass Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <div className="
          relative rounded-[32px]
          border border-white/20
          backdrop-blur-md
          bg-white/5
          p-16
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        ">

          {/* Inner hover glow */}
          <div className="absolute inset-0 rounded-[32px] opacity-0 hover:opacity-100 transition duration-700 pointer-events-none
            bg-gradient-to-b from-white/10 via-transparent to-transparent" />

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-16">

            {/* Brand */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="md:col-span-2 space-y-6"
            >
              <h3 className="text-3xl font-semibold tracking-tight uppercase">
                Skynetic
              </h3>
              <p className="text-white/80 max-w-sm leading-relaxed">
                A hiring engine built for developers who value signal over noise
                and outcomes over applications.
              </p>
            </motion.div>

            {/* Footer columns */}
            {[
              {
                title: "Product",
                items: ["Engine", "Reverse Job Board", "Interview Prep", "Pricing"],
              },
              {
                title: "Company",
                items: ["About", "Careers", "Blog", "Contact"],
              },
              {
                title: "Resources",
                items: ["Docs", "Success Stories", "Community", "Support"],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-8">
                  {col.title}
                </h4>
                <ul className="space-y-5">
                  {col.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-white/70 hover:text-white cursor-pointer relative group"
                    >
                      <span>{item}</span>
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="relative mt-20 pt-10 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Skynetic. All rights reserved.
            </p>
            <p className="text-white/80 font-medium">
              ZEKA COMPANY
            </p>

            <div className="flex gap-8 text-xs text-white/70">
              {["Privacy", "Terms", "LinkedIn"].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -2 }}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

