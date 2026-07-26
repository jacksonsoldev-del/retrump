import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "@/assets/memes/logo.png";

export function ChaosMeter() {
  const [v, setV] = useState(50);
  const label = v < 20 ? "Normal Human 🙂"
    : v < 45 ? "Curious Degen 😏"
    : v < 70 ? "Getting Regarded 🤪"
    : v < 90 ? "Peak Chaos 🤯"
    : "Certified RETRUMP 👑";

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-neon)] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-6xl text-[color:var(--color-trump-red)] text-stroke md:text-8xl"
        >
          CHAOS METER
        </motion.h2>
        <p className="mt-4 font-display text-2xl text-[color:var(--color-ocean-deep)]">How Regarded Are You?</p>
        <motion.div
          animate={{ rotate: (v - 50) * 0.3, scale: 1 + v / 400 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mx-auto mt-10 h-56 w-56"
          style={{ filter: `hue-rotate(${v * 3}deg) saturate(${1 + v / 60})` }}
        >
          <img src={Logo} alt="" className="h-full w-full drop-shadow-2xl" />
        </motion.div>
        <div className="mt-6 font-display text-3xl text-[color:var(--color-ocean-deep)] md:text-5xl">{label}</div>
        <div className="mx-auto mt-8 max-w-2xl rounded-full comic-border bg-white p-2 comic-shadow">
          <input
            type="range" min={0} max={100} value={v}
            onChange={(e) => setV(Number(e.target.value))}
            className="w-full accent-[color:var(--color-trump-red)]"
          />
        </div>
        <div className="mx-auto mt-2 flex max-w-2xl justify-between font-display text-lg text-[color:var(--color-ocean-deep)]">
          <span>0 · Normal Human</span>
          <span>100 · Certified RETRUMP</span>
        </div>
      </div>
    </section>
  );
}