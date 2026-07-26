const items = [
  "MAKE MEMES GREAT AGAIN",
  "REGARDED SINCE DAY ONE",
  "DRILL BABY DRILL",
  "NOBODY KNOWS MEMES BETTER",
  "RETRUMP 2026",
  "LOL",
];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-[6px] border-[color:var(--color-ocean-deep)] bg-[color:var(--color-neon)] py-4">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-4xl text-[color:var(--color-ocean-deep)] md:text-6xl">
            {t} <span className="text-[color:var(--color-trump-red)]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}