import { motion } from "framer-motion";
import Boat from "@/assets/memes/boat.jpeg";
import { OceanBackdrop } from "./Ocean";

export function Intro({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[80] overflow-hidden"
      onAnimationComplete={() => {
        // schedule dismiss
        setTimeout(onDone, 3800);
      }}
    >
      <OceanBackdrop />
      <motion.div
        initial={{ x: "-120%", scale: 0.9 }}
        animate={{ x: "0%", scale: 1.05 }}
        transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src={Boat}
          alt=""
          className="max-h-[75vh] w-auto rounded-3xl comic-border comic-shadow-lg"
          animate={{ y: [0, -8, 0, -4, 0], rotate: [-0.6, 0.8, -0.4, 0.6, -0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
        transition={{ duration: 3.8, times: [0, 0.2, 0.8, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-display text-4xl md:text-6xl text-cream text-stroke"
        style={{ color: "#fdf6e3" }}
      >
        ALL ABOARD THE $RETRUMP
      </motion.div>
    </motion.div>
  );
}