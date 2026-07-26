import { motion } from "framer-motion";
import { useState } from "react";
import Boat from "@/assets/memes/boat.jpeg";
import Logo from "@/assets/memes/logo.png";
import { OceanBackdrop } from "./Ocean";
import { Floaties } from "./Floaties";

const btnBase =
  "relative inline-flex items-center justify-center gap-2 rounded-full comic-border comic-shadow font-display tracking-wide transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none";

export function Hero() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-8">
      <OceanBackdrop />
      <Floaties />
      <Nav />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-24 pt-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block rounded-full bg-[color:var(--color-neon)] px-4 py-1 font-display text-lg text-[color:var(--color-ocean-deep)] comic-border"
          >
            🇺🇸 CERTIFIED REGARDED 🇺🇸
          </motion.div>
          <h1 className="mt-4 font-display text-[16vw] leading-[0.85] text-[color:var(--color-trump-red)] text-stroke sm:text-8xl md:text-9xl lg:text-[10rem]">
            RE<span className="text-[color:var(--color-gold)]">TRUMP</span>
          </h1>
          <p className="mt-4 max-w-lg font-display text-2xl leading-tight text-white text-stroke-thin md:text-4xl">
            The Most Regarded Memecoin on Earth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.ponsfamily.com/launchpad/0x27ad24272b73d4d7bd14b99672b245a010f2cc0e"
              target="_blank" rel="noreferrer"
              className={`${btnBase} bg-[color:var(--color-trump-red)] text-white px-8 py-4 text-2xl`}
            >
              💰 BUY NOW
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="https://dexscreener.com/robinhood/0x12BB5c491a286AEc5A3093D2d0D8b07520Fa9518"
              target="_blank" rel="noreferrer"
              className={`${btnBase} bg-[color:var(--color-gold)] text-[color:var(--color-ocean-deep)] px-6 py-4 text-xl`}
            >
              📈 CHART
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/RetrumpRH"
              target="_blank" rel="noreferrer"
              className={`${btnBase} bg-[color:var(--color-ocean)] text-white px-6 py-4 text-xl`}
            >
              ✈️ TELEGRAM
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/RetrumpRH"
              target="_blank" rel="noreferrer"
              className={`${btnBase} bg-[color:var(--color-ocean-deep)] text-white px-6 py-4 text-xl`}
            >
              𝕏
            </motion.a>
          </div>
          <div className="mt-8 max-w-xl rounded-2xl comic-border comic-shadow bg-[color:var(--color-cream)] p-4">
            <div className="font-display text-sm uppercase tracking-wide text-[color:var(--color-ocean-deep)]/70">
              Contract Address
            </div>
            <div className="mt-1 flex items-center gap-3">
              <code className="font-display text-lg text-[color:var(--color-trump-red)] md:text-2xl break-all">
                0x27Ad24272b73D4D7bd14B99672b245A010F2cC0E
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("0x27Ad24272b73D4D7bd14B99672b245A010F2cC0E");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="ml-auto rounded-full comic-border bg-[color:var(--color-gold)] px-4 py-2 font-display text-sm text-[color:var(--color-ocean-deep)] hover:scale-105 transition-transform"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl comic-border comic-shadow-lg overflow-hidden bg-white"
          >
            <img src={Boat} alt="RETRUMP yacht" className="block h-full w-full object-cover" loading="eager" />
          </motion.div>
          {/* champagne bubbles */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white/80"
                style={{
                  left: `${(i * 53) % 100}%`,
                  bottom: 0,
                  width: 6 + (i % 4) * 4,
                  height: 6 + (i % 4) * 4,
                  animation: `bubble ${4 + (i % 3)}s ease-in ${(i * 0.3) % 4}s infinite`,
                }}
              />
            ))}
          </div>
          {/* spinning coin */}
          <motion.img
            src={Logo}
            alt=""
            className="absolute -bottom-8 -left-8 h-32 w-32 md:h-44 md:w-44 drop-shadow-2xl animate-spin-slow"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="RETRUMP" className="h-12 w-12 animate-spin-slow" />
        <span className="font-display text-3xl text-white text-stroke-thin">$RETRUMP</span>
      </div>
      <nav className="hidden gap-6 md:flex">
        {["ABOUT", "WHY", "MEMES", "TOKENOMICS", "PLAN"].map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="font-display text-lg text-white text-stroke-thin transition hover:text-[color:var(--color-neon)]">
            {n}
          </a>
        ))}
      </nav>
      <a
        href="https://www.ponsfamily.com/launchpad/0x27ad24272b73d4d7bd14b99672b245a010f2cc0e"
        target="_blank" rel="noreferrer"
        className={`${btnBase} bg-[color:var(--color-trump-red)] text-white px-5 py-2 text-lg`}
      >
        BUY
      </a>
    </div>
  );
}