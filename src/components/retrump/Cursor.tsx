import { useEffect, useRef } from "react";
import Logo from "@/assets/memes/logo.png";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const coin = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100, cx: -100, cy: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.12;
      p.cy += (p.y - p.cy) * 0.12;
      if (dot.current) dot.current.style.transform = `translate3d(${p.x - 6}px, ${p.y - 6}px, 0)`;
      if (coin.current) coin.current.style.transform = `translate3d(${p.cx - 24}px, ${p.cy - 24}px, 0) rotate(${p.cx}deg)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-[color:var(--color-neon)] mix-blend-difference"
        style={{ boxShadow: "0 0 12px #f5ff3d" }}
      />
      <div
        ref={coin}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-12 w-12 hidden md:block"
      >
        <img src={Logo} alt="" className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]" />
      </div>
    </>
  );
}