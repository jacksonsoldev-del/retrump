import Logo from "@/assets/memes/logo.png";

// Floating coins, bubbles, dollar bills
export function Floaties() {
  const coins = Array.from({ length: 8 });
  const bubbles = Array.from({ length: 14 });
  const bills = Array.from({ length: 6 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {coins.map((_, i) => {
        const left = (i * 137) % 100;
        const delay = (i * 0.7) % 6;
        const size = 30 + ((i * 13) % 30);
        return (
          <img
            key={`c${i}`}
            src={Logo}
            alt=""
            className="absolute animate-float-slow"
            style={{
              left: `${left}%`,
              top: `${(i * 53) % 80}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${5 + (i % 4)}s`,
              filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.3))",
            }}
          />
        );
      })}
      {bubbles.map((_, i) => (
        <span
          key={`b${i}`}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${(i * 71) % 100}%`,
            bottom: 0,
            width: 8 + (i % 5) * 3,
            height: 8 + (i % 5) * 3,
            animation: `bubble ${5 + (i % 4)}s ease-in ${(i * 0.4) % 5}s infinite`,
          }}
        />
      ))}
      {bills.map((_, i) => (
        <div
          key={`$${i}`}
          className="absolute animate-float-slow font-display text-3xl text-[#3a8046]"
          style={{
            left: `${(i * 91) % 100}%`,
            top: `${(i * 37) % 80}%`,
            animationDelay: `${(i * 0.9) % 5}s`,
            textShadow: "2px 2px 0 #0c2340",
          }}
        >
          💵
        </div>
      ))}
    </div>
  );
}