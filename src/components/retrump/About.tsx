import { motion } from "framer-motion";

const paragraphs = [
  { icon: "🛢️", title: "Oil Baron Origins", text: "RETRUMP was born in a golden Cadillac at 3AM, whispering 'drill baby drill' into a solid gold iPhone. He believes crude oil is just Earth's smoothie." },
  { icon: "🐦", title: "Twitter Diplomat", text: "Foreign policy conducted entirely through ALL CAPS midnight posts. Won three imaginary wars, lost one to a spam bot named Karen." },
  { icon: "💵", title: "Flip-Flop Economy", text: "Raised tariffs on Tuesday, lowered them Wednesday, forgot he was president Thursday. The market loved every second of it." },
  { icon: "💥", title: "Ego Nuclear Reactor", text: "Powered by a self-sustaining ego core so massive NASA classified it as a small star. Complimenting himself generates 8 gigawatts of confidence." },
  { icon: "🧱", title: "Big Beautiful Walls", text: "Constructed 47 walls, mostly around his ego. They're huge. Everyone says so. Even the walls agree." },
  { icon: "🪙", title: "Certified Regarded", text: "This coin has no utility, no roadmap, and no shame. Just vibes, memes, and one very sleepy orange man at the wheel." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[color:var(--color-cream)] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.h2
            initial={{ opacity: 0, x: -40, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-6xl leading-none text-[color:var(--color-trump-red)] text-stroke md:text-8xl"
          >
            Who Is <br />RETRUMP?
          </motion.h2>
          <p className="mt-6 max-w-md font-display text-2xl text-[color:var(--color-ocean-deep)]">
            A cartoon president. A memecoin god. A napping oil tycoon. All at once. Zero apologies.
          </p>
        </div>
        <div className="grid gap-6">
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              className="rounded-3xl comic-border comic-shadow bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{p.icon}</span>
                <div>
                  <h3 className="font-display text-3xl text-[color:var(--color-trump-red)]">{p.title}</h3>
                  <p className="mt-2 text-lg text-[color:var(--color-ocean-deep)]">{p.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}