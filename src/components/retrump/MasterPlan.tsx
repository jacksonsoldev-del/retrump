import { motion } from "framer-motion";

const stages = [
  { n: "01", title: "Tweet Nonsense", text: "Post at 3AM. Delete at 3:04AM. Post again at 3:08AM.", color: "var(--color-gold)" },
  { n: "02", title: "Create Chaos", text: "Start beef with a bagel emoji account. Win.", color: "var(--color-trump-red)" },
  { n: "03", title: "Pump", text: "Charts go vertical. Physicists cry. Mods rejoice.", color: "var(--color-ocean)" },
  { n: "04", title: "Moon", text: "Lambos, yachts, and a small country named RETRUMPia.", color: "var(--color-neon)" },
];

export function MasterPlan() {
  return (
    <section id="plan" className="relative overflow-hidden bg-[color:var(--color-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-6xl text-[color:var(--color-ocean-deep)] text-stroke md:text-8xl"
        >
          THE MASTER PLAN
        </motion.h2>
        <p className="mt-4 text-center font-display text-2xl text-[color:var(--color-trump-red)]">(definitely not a roadmap)</p>
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-2 rounded-full bg-[color:var(--color-ocean-deep)] md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-16">
            {stages.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 60, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center gap-6 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
              >
                <div className="absolute left-0 top-6 h-8 w-8 rounded-full comic-border md:left-auto md:right-[-1.5rem] md:top-1/2 md:-translate-y-1/2"
                  style={{ background: s.color, ...(i % 2 ? { left: "-1.5rem", right: "auto" } : {}) }} />
                <motion.div
                  whileHover={{ rotate: i % 2 ? -2 : 2, scale: 1.02 }}
                  className="ml-12 flex-1 rounded-3xl comic-border comic-shadow-lg bg-white p-6 md:ml-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl text-[color:var(--color-trump-red)] text-stroke">{s.n}</span>
                    <span className="font-display text-3xl text-[color:var(--color-ocean-deep)]">{s.title}</span>
                  </div>
                  <p className="mt-2 text-lg text-[color:var(--color-ocean-deep)]/80">{s.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}