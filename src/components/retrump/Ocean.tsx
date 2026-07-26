import { motion } from "framer-motion";

export function OceanBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffb37a] via-[#7fc7e0] to-[#0891b2]" />
      {/* sun */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,#fff2a8_0%,#f5c518_60%,#f97316_100%)] blur-[2px]"
        style={{ boxShadow: "0 0 120px 40px rgba(245,197,24,0.6)" }}
      />
      {/* sun reflection */}
      <div className="absolute bottom-0 left-1/2 h-1/2 w-[30%] -translate-x-1/2 bg-gradient-to-b from-[#f5c518]/60 to-transparent blur-md" />
      {/* clouds */}
      {[0, 12, 25, 40, 60, 80].map((d, i) => (
        <div
          key={i}
          className="absolute animate-cloud opacity-90"
          style={{ top: `${5 + i * 4}%`, animationDelay: `${-d}s`, animationDuration: `${60 + i * 8}s` }}
        >
          <Cloud />
        </div>
      ))}
      {/* birds */}
      {[0, 20, 45].map((d, i) => (
        <div
          key={`b${i}`}
          className="absolute animate-cloud text-[color:var(--color-ocean-deep)]"
          style={{ top: `${15 + i * 8}%`, animationDelay: `${-d}s`, animationDuration: `${45 + i * 10}s`, fontSize: 22 }}
        >
          <Bird />
        </div>
      ))}
      {/* ocean */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0891b2] via-[#0e7490] to-[#0c2340]" />
        {/* wave stripes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute h-[3px] w-[300%] bg-white/25"
            style={{
              bottom: `${8 + i * 12}%`,
              left: `-${(i * 20) % 100}%`,
              animation: `wave-shift ${8 + i * 2}s linear infinite`,
              borderRadius: 99,
              opacity: 0.4 - i * 0.05,
            }}
          />
        ))}
        {/* light reflections */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
      </div>
    </div>
  );
}

function Cloud() {
  return (
    <svg width="140" height="50" viewBox="0 0 140 50" fill="white">
      <ellipse cx="30" cy="30" rx="30" ry="18" />
      <ellipse cx="60" cy="22" rx="26" ry="20" />
      <ellipse cx="90" cy="28" rx="28" ry="16" />
      <ellipse cx="115" cy="32" rx="20" ry="14" />
    </svg>
  );
}
function Bird() {
  return (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 8 Q7 2 12 8" />
      <path d="M12 8 Q17 2 22 8" />
    </svg>
  );
}