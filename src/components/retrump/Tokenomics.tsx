import { motion } from "framer-motion";
import Logo from "@/assets/memes/logo.png";

const slices = [
  { label: "Community", color: "var(--color-trump-red)" },
  { label: "No VC", color: "var(--color-gold)" },
  { label: "No Utility", color: "var(--color-ocean)" },
  { label: "No Roadmap", color: "var(--color-neon)" },
  { label: "Only Chaos", color: "#f97316" },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative overflow-hidden bg-[color:var(--color-trump-red)] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            className="font-display text-6xl text-[color:var(--color-cream)] text-stroke md:text-8xl"
          >
            TOKEN-<br/>OMICS
          </motion.h2>
          <div className="mt-8 space-y-4">
            {slices.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-full comic-border comic-shadow bg-white pr-6"
              >
                <div className="h-10 w-10 rounded-full" style={{ background: s.color }} />
                <span className="font-display text-2xl text-[color:var(--color-ocean-deep)]">{s.label}</span>
                <span className="ml-auto font-display text-3xl text-[color:var(--color-trump-red)]">100%</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full comic-border"
            style={{
              background:
                "conic-gradient(#e11d2e 0 20%, #f5c518 20% 40%, #0891b2 40% 60%, #f5ff3d 60% 80%, #f97316 80% 100%)",
              boxShadow: "10px 10px 0 0 #0c2340",
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[18%] rounded-full comic-border bg-[color:var(--color-cream)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={Logo} alt="" className="h-40 w-40 drop-shadow-xl animate-bob" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full comic-border bg-[color:var(--color-neon)] px-6 py-2 font-display text-2xl text-[color:var(--color-ocean-deep)]">
            100% REGARDED
          </div>
        </div>
      </div>
    </section>
  );
}