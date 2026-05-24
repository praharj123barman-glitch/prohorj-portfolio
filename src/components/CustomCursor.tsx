"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -50, y: -50 });
  const [enlarged, setEnlarged] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mice, trackpads)
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive =
        t.closest(
          'a, button, [role="button"], input, textarea, select, .glass-panel, .interactive',
        ) !== null;
      setEnlarged(interactive);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        width: enlarged ? 40 : 8,
        height: enlarged ? 40 : 8,
        borderRadius: "50%",
        background: enlarged ? "transparent" : "#e5c281",
        border: enlarged ? "1px solid rgba(229, 194, 129, 0.5)" : "none",
        boxShadow: enlarged ? "0 0 10px rgba(229, 194, 129, 0.3)" : "none",
        pointerEvents: "none",
        zIndex: 9999,
        transition:
          "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, box-shadow 0.2s, border 0.2s",
        mixBlendMode: enlarged ? "normal" : "difference",
      }}
    />
  );
}
