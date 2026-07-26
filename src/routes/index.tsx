import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Cursor } from "@/components/retrump/Cursor";
import { Intro } from "@/components/retrump/Intro";
import { Hero } from "@/components/retrump/Hero";
import { Marquee } from "@/components/retrump/Marquee";
import { About } from "@/components/retrump/About";
import { WhyRetrump } from "@/components/retrump/WhyRetrump";
import { Gallery } from "@/components/retrump/Gallery";
import { Tokenomics } from "@/components/retrump/Tokenomics";
import { HowToBuy } from "@/components/retrump/HowToBuy";
import { Manifesto } from "@/components/retrump/Manifesto";
import { ChaosMeter } from "@/components/retrump/ChaosMeter";
import { MasterPlan } from "@/components/retrump/MasterPlan";
import { Footer } from "@/components/retrump/Footer";
import Boat from "@/assets/memes/boat.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$RETRUMP | The Most Regarded Memecoin" },
      { name: "description", content: "The funniest Trump-inspired memecoin celebrating chaos, memes, oil greed and regarded politics." },
      { property: "og:title", content: "$RETRUMP | The Most Regarded Memecoin" },
      { property: "og:description", content: "The funniest Trump-inspired memecoin celebrating chaos, memes, oil greed and regarded politics." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: Boat },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: Boat },
    ],
  }),
  component: Index,
});

function Index() {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    if (!intro) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
  }, [intro]);
  return (
    <div className="relative">
      <Cursor />
      <AnimatePresence>
        {intro && <Intro key="intro" onDone={() => setIntro(false)} />}
      </AnimatePresence>
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <WhyRetrump />
        <Gallery />
        <Tokenomics />
        <HowToBuy />
        <Manifesto />
        <ChaosMeter />
        <MasterPlan />
        <Footer />
      </main>
    </div>
  );
}
