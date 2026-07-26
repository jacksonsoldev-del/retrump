import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "Create Wallet", text: "Download Phantom. Write down 12 words. Lose them. Try again.", emoji: "👛" },
  { n: 2, title: "Bridge", text: "Move some SOL over. Cry at gas fees. Send it anyway.", emoji: "🌉" },
  { n: 3, title: "Buy", text: "Paste contract (COMING SOON). Slam the buy button 47 times.", emoji: "💸" },
  { n: 4, title: "Become Regarded", text: "Check chart every 6 seconds. Post memes. Ascend.", emoji: "🧠" },
];

export function HowToBuy() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ocean)] py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-6xl text-white text-stroke md:text-8xl"
      >
        HOW TO BUY
      </motion.h2>
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
              className="rounded-3xl comic-border comic-shadow-lg bg-[color:var(--color-cream)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full comic-border bg-[color:var(--color-trump-red)] px-4 py-1 font-display text-xl text-white">
                  STEP {s.n}
                </span>
                <span className="text-5xl">{s.emoji}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl text-[color:var(--color-ocean-deep)]">{s.title}</h3>
              <p className="mt-2 text-[color:var(--color-ocean-deep)]/80">{s.text}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute -right-4 top-1/2 hidden -translate-y-1/2 font-display text-5xl text-[color:var(--color-neon)] text-stroke lg:block"
              >
                ➜
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}