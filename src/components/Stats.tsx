"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Stat = { target: number; suffix?: string; prefix?: string; label: string };

const stats: Stat[] = [
  { target: 24, label: "products shipped" },
  { target: 100, suffix: "%", label: "on-time launches" },
  { target: 12, prefix: "<", suffix: "h", label: "reply time" },
  { target: 6, label: "countries served" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(stat.target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(stat.target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.target]);

  return (
    <span ref={ref}>
      {stat.prefix || ""}
      {Math.round(value)}
      {stat.suffix || ""}
    </span>
  );
}

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.2 + index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          setRot({
            x: ((y - cy) / cy) * -8,
            y: ((x - cx) / cx) * 8,
          });
        }}
        onMouseLeave={() => setRot({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="glass-panel interactive flex flex-col gap-2 rounded-xl p-8"
      >
        {children}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 px-6 py-32 md:px-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <TiltCard key={s.label} index={i}>
            <span
              className="text-[40px] leading-[48px] text-secondary"
              style={{
                fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
              }}
            >
              <Counter stat={s} />
            </span>
            <span className="mono-label">{s.label}</span>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
