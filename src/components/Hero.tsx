"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const tagline = "I'm Prohorj, a Full-Stack Developer";

export function Hero() {
  return (
    <>
      <section className="hero-orbs relative flex min-h-[90vh] flex-col items-center justify-center px-5 pb-32 pt-40 text-center sm:px-8 sm:pt-48 lg:px-20">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
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

        {/* Headline — Bebas Neue */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="display mx-auto mb-6 max-w-4xl text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.95] text-foreground"
        >
          Crafting digital products with{" "}
          <span className="text-glow text-accent">obsessive</span> attention to
          detail.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg"
        >
          I design and build polished web experiences end to end. From the
          database to the last pixel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2 rounded-full px-8 py-3.5 text-sm"
          >
            <Eye className="h-4 w-4" />
            See my work
          </a>
          <a
            href="mailto:praharj123barman@gmail.com"
            className="btn-ghost flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium"
          >
            Let&apos;s talk
          </a>
        </motion.div>
      </section>

      {/* Single marquee — Bebas Neue scrolling tagline */}
      <div className="mb-24 flex w-full overflow-hidden whitespace-nowrap border-y border-white/5 bg-surface-container py-4">
        <div className="marquee-track items-center gap-8 opacity-50">
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
