import { motion } from "framer-motion";

const cards = [
  { icon: "🛢️", title: "Oil Greed", text: "Drills for oil, victory, and dopamine. Same thing to him.", color: "var(--color-gold)" },
  { icon: "🐦", title: "Twitter Diplomacy", text: "Solves conflicts with 280 characters and ONE angry emoji.", color: "var(--color-ocean)" },
  { icon: "🔁", title: "Economic Flip-Flops", text: "Policies change faster than a wifi router mid-restart.", color: "var(--color-trump-red)" },
  { icon: "👑", title: "Massive Ego", text: "So huge it has its own gravitational field. NASA confirmed.", color: "var(--color-neon)" },
  { icon: "🤪", title: "Regarded Moments", text: "Pressed the wrong button 47 times. Blamed the button.", color: "#f97316" },
];

export function WhyRetrump() {
  return (
    <section id="why" className="relative overflow-hidden bg-[color:var(--color-ocean-deep)] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(#f5c518 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-6xl text-[color:var(--color-gold)] text-stroke md:text-8xl"
        >
          WHY RETRUMP?
        </motion.h2>
        <p className="mt-4 text-center font-display text-2xl text-white">Five extremely scientific reasons.</p>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: i % 2 ? 6 : -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 3 : -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, type: "spring", bounce: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05, animation: "shake 0.4s" }}
              className="group relative overflow-hidden rounded-3xl comic-border comic-shadow-lg p-8"
              style={{ background: `color-mix(in oklab, ${c.color} 90%, white)` }}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 select-none text-9xl opacity-20 transition group-hover:scale-125 group-hover:opacity-40">
                {c.icon}
              </div>
              <div className="text-6xl">{c.icon}</div>
              <h3 className="mt-4 font-display text-4xl text-[color:var(--color-ocean-deep)]">{c.title}</h3>
              <p className="mt-2 text-lg text-[color:var(--color-ocean-deep)]/90">{c.text}</p>
              <motion.span
                className="pointer-events-none absolute right-4 top-4 select-none text-4xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: [0, 1.6, 0.8] }}
              >
                💥
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}