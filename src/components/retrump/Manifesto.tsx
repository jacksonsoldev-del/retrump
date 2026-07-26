import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ocean-deep)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-texture relative rounded-md p-10 md:p-16"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 0 0 6px #f5c518, inset 0 0 0 8px #0c2340" }}
        >
          <div className="text-center font-display text-sm tracking-[0.4em] text-[color:var(--color-ocean-deep)]/70">
            OFFICIAL PRESIDENTIAL DECREE
          </div>
          <h2 className="mt-2 text-center font-display text-5xl text-[color:var(--color-trump-red)] text-stroke md:text-7xl">
            THE RETRUMP MANIFESTO
          </h2>
          <div className="mt-8 space-y-5 font-display text-lg leading-relaxed text-[color:var(--color-ocean-deep)] md:text-xl">
            <p><span className="mr-1 text-3xl">WE,</span> the extremely regarded people of the internet, in order to form a more chaotic union, do hereby declare $RETRUMP the official currency of dumb decisions, midnight tweets, and yacht-based diplomacy.</p>
            <p>We hold these truths to be self-evident: that all memes are created unequal, that some memes are pumpier than others, and that our God-given right to press the buy button shall not be infringed.</p>
            <p>We reject utility. We reject roadmaps. We reject professionalism. We embrace chaos, oil, gold chains, and the divine wisdom of the sleepy orange man at the helm.</p>
            <p className="text-center text-2xl">So help us memes. 🇺🇸</p>
          </div>
          <div className="mt-10 flex items-end justify-between">
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              width="240" height="80" viewBox="0 0 240 80" fill="none"
            >
              <motion.path
                d="M5 55 C 20 20, 40 70, 55 30 S 90 70, 110 25 S 150 60, 170 30 S 210 65, 235 25"
                stroke="#0c2340" strokeWidth="4" strokeLinecap="round" fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4 }}
              />
            </motion.svg>
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-[color:var(--color-trump-red)] bg-[color:var(--color-trump-red)]/20 font-display text-xs text-[color:var(--color-trump-red)]"
                style={{ boxShadow: "0 4px 0 #0c2340" }}
              >
                REGARDED<br/>SEAL
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}