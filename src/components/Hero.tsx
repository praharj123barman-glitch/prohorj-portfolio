"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const tagline = "I'm Prohorj, a Full-Stack Developer";

// Split headline into words so each can animate individually
const headlineParts: Array<{ text: string; accent?: boolean }> = [
  { text: "Crafting" },
  { text: "digital" },
  { text: "products" },
  { text: "with" },
  { text: "obsessive", accent: true },
  { text: "attention" },
  { text: "to" },
  { text: "detail." },
];

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.25 },
  },
};

export function Hero() {
  return (
    <>
      <section className="hero-orbs relative flex min-h-[90vh] flex-col items-center justify-center px-5 pb-32 pt-40 text-center sm:px-8 sm:pt-48 lg:px-20">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="glass-elevated mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — word-by-word staggered reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="display mx-auto mb-6 max-w-4xl text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] text-foreground"
          aria-label="Crafting digital products with obsessive attention to detail."
        >
          {headlineParts.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`mr-[0.25em] inline-block ${
                word.accent
                  ? "text-glow text-accent text-[0.78em] align-middle"
                  : ""
              }`}
              style={{
                textShadow:
                  word.accent
                    ? undefined
                    : "0 2px 24px rgba(0,0,0,0.6)",
              }}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          I design and build polished web experiences end to end. From the
          database to the last pixel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.4 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="btn-primary flex items-center gap-2 rounded-full px-8 py-3.5 text-sm"
          >
            <Eye className="h-4 w-4" />
            See my work
          </motion.a>
          <motion.a
            href="mailto:praharj123barman@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="btn-ghost flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium"
          >
            Let&apos;s talk
          </motion.a>
        </motion.div>
      </section>

      {/* Single marquee — Bebas Neue scrolling tagline */}
      <div className="mb-24 flex w-full overflow-hidden whitespace-nowrap border-y border-white/5 bg-surface-container/80 py-4 backdrop-blur-md">
        <div className="marquee-track items-center gap-8 opacity-60">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`m-${i}`}
              className="display flex shrink-0 items-center gap-8 text-3xl text-on-surface-variant sm:text-4xl"
            >
              {tagline}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
