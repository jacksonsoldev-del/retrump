import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Boat from "@/assets/memes/boat.jpeg";
import Oil from "@/assets/memes/oil.jpeg";
import Nuke from "@/assets/memes/nuke.jpeg";
import Driving from "@/assets/memes/driving.jpeg";
import Buying from "@/assets/memes/buying.jpeg";
import Logo from "@/assets/memes/logo.png";

const items = [
  { src: Boat, title: "YACHT LIFE", cap: "Bikinis, bubbles & regarded decisions." },
  { src: Oil, title: "CEO OF THE DESERT", cap: "Drill baby drill... then take a nap." },
  { src: Nuke, title: "THE BIG RED BUTTON", cap: "He drew a squiggle. Then pressed it." },
  { src: Driving, title: "DUI DIPLOMACY", cap: "Foreign policy at 3AM, 90mph, one hand." },
  { src: Buying, title: "BUYING $RETRUMP", cap: "Utility coins vs. THIS. No contest." },
  { src: Logo, title: "THE COIN", cap: "Genuinely regarded. Legally distinct." },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="memes" className="relative overflow-hidden bg-[color:var(--color-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-6xl text-[color:var(--color-trump-red)] text-stroke md:text-8xl"
        >
          MEME GALLERY
        </motion.h2>
        <p className="mt-4 text-center font-display text-2xl text-[color:var(--color-ocean-deep)]">
          A holy scroll of certified regarded moments.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const rot = [-4, 3, -2, 5, -3, 2][i % 6];
            return (
              <motion.button
                key={i}
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, y: 40, rotate: rot * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.05, y: -6 }}
                className="group relative overflow-hidden rounded-3xl comic-border comic-shadow-lg bg-white text-left"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-ocean)]/10">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="border-t-4 border-[color:var(--color-ocean-deep)] bg-[color:var(--color-neon)] p-4">
                  <div className="font-display text-2xl text-[color:var(--color-ocean-deep)]">{it.title}</div>
                  <p className="text-sm text-[color:var(--color-ocean-deep)]/80">{it.cap}</p>
                </div>
                {/* soundwave */}
                <div className="pointer-events-none absolute bottom-2 right-2 flex items-end gap-[2px] opacity-0 group-hover:opacity-100">
                  {[0, 1, 2, 3, 4].map((b) => (
                    <motion.span
                      key={b}
                      animate={{ height: [6, 20, 8, 24, 6] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.08 }}
                      className="w-1 rounded-full bg-[color:var(--color-trump-red)]"
                    />
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-6 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: 8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl comic-border comic-shadow-lg bg-white"
            >
              <img src={items[open].src} alt="" className="max-h-[80vh] w-auto" />
              <div className="bg-[color:var(--color-neon)] p-4 font-display text-2xl text-[color:var(--color-ocean-deep)]">
                {items[open].title} — {items[open].cap}
              </div>
              <button
                onClick={() => setOpen(null)}
                className="absolute right-3 top-3 rounded-full comic-border bg-[color:var(--color-trump-red)] px-3 py-1 font-display text-white"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}