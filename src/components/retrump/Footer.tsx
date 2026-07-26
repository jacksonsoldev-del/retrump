import { motion } from "framer-motion";
import Boat from "@/assets/memes/boat.jpeg";
import Logo from "@/assets/memes/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#ff8a4c] via-[#f97316] to-[#0c2340] pt-24">
      {/* sunset sun */}
      <div className="absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#fff2a8_0%,#f5c518_60%,#f97316_100%)]"
        style={{ boxShadow: "0 0 120px 40px rgba(245,197,24,0.6)" }} />
      {/* boat sailing away */}
      <motion.div
        initial={{ x: 0, scale: 1 }}
        whileInView={{ x: "40vw", scale: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="relative mx-auto mt-12 w-72"
      >
        <img src={Boat} alt="" className="rounded-2xl comic-border comic-shadow animate-bob" />
      </motion.div>
      {/* waves */}
      <div className="relative mt-8 h-24">
        {[0,1,2].map(i => (
          <div key={i} className="absolute inset-x-0 h-8"
            style={{
              bottom: i*20,
              background: "repeating-linear-gradient(90deg, transparent 0 30px, rgba(255,255,255,0.4) 30px 34px)",
              animation: `wave-shift ${6+i*2}s linear infinite`,
            }} />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-14 w-14 animate-spin-slow" />
            <span className="font-display text-4xl text-white text-stroke-thin">$RETRUMP</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.ponsfamily.com/launchpad/0x27ad24272b73d4d7bd14b99672b245a010f2cc0e" target="_blank" rel="noreferrer" className="rounded-full comic-border comic-shadow bg-[color:var(--color-trump-red)] px-6 py-3 font-display text-xl text-white">BUY NOW</a>
            <a href="https://dexscreener.com/robinhood/0x12BB5c491a286AEc5A3093D2d0D8b07520Fa9518" target="_blank" rel="noreferrer" className="rounded-full comic-border comic-shadow bg-[color:var(--color-gold)] px-6 py-3 font-display text-xl text-[color:var(--color-ocean-deep)]">CHART</a>
            <a href="https://t.me/RetrumpRH" target="_blank" rel="noreferrer" className="rounded-full comic-border comic-shadow bg-[color:var(--color-ocean)] px-6 py-3 font-display text-xl text-white">TELEGRAM</a>
            <a href="https://x.com/RetrumpRH" target="_blank" rel="noreferrer" className="rounded-full comic-border comic-shadow bg-white px-6 py-3 font-display text-xl text-[color:var(--color-ocean-deep)]">𝕏</a>
          </div>
        </div>
        <div className="mt-8 rounded-2xl comic-border bg-[color:var(--color-cream)] p-4 text-center">
          <div className="font-display text-sm uppercase tracking-widest text-[color:var(--color-ocean-deep)]/70">Contract</div>
          <div className="font-display text-2xl text-[color:var(--color-trump-red)] break-all">0x27Ad24272b73D4D7bd14B99672b245A010F2cC0E</div>
        </div>
        <p className="mt-8 text-center font-display text-sm text-white/80">
          $RETRUMP is a satirical memecoin with no utility, no roadmap, and no shame. Not financial advice. Not political endorsement. Just vibes.
        </p>
      </div>
    </footer>
  );
}