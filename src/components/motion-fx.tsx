"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const HEADLINE_EASE = [0.22, 1, 0.36, 1] as const;

function useMagnetic(strength = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 20, mass: 0.5 });

  function bindRef<T extends HTMLElement>(el: T | null) {
    ref.current = el;
  }
  const ref = useRef<HTMLElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, dx)) * strength);
    y.set(Math.max(-1, Math.min(1, dy)) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref: bindRef, x: sx, y: sy, handleMove, handleLeave };
}

type MagneticAnchorProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticAnchor({
  children,
  strength = 8,
  ...rest
}: MagneticAnchorProps) {
  const { ref, x, y, handleMove, handleLeave } = useMagnetic(strength);
  return (
    <motion.a
      ref={(el) => ref(el)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

type MagneticButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({
  children,
  strength = 8,
  ...rest
}: MagneticButtonProps) {
  const { ref, x, y, handleMove, handleLeave } = useMagnetic(strength);
  return (
    <motion.button
      ref={(el) => ref(el)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

type WordRiseProps = {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
  highlightClassName?: string;
};

export function WordRise({
  text,
  className,
  delay = 0,
  highlight,
  highlightClassName,
}: WordRiseProps) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => {
        const isHighlight =
          highlight && w.replace(/[.,]/g, "") === highlight;
        return (
          <span
            key={`${w}-${i}`}
            style={{
              display: "inline-block",
              overflow: "hidden",
              paddingBottom: "0.12em",
              marginBottom: "-0.12em",
            }}
          >
            <motion.span
              initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                ease: HEADLINE_EASE,
                delay: delay + i * 0.08,
              }}
              className={isHighlight ? highlightClassName : undefined}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
