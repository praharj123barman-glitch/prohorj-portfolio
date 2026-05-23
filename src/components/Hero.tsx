"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const tagline = "I'm Prohorj, a Full-Stack Developer";

export function Hero() {
  return (
    <section className="hero-orbs relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="glass-base mx-auto mb-8 flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="label-mono !text-[10px] !tracking-[0.2em] text-foreground/80">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="display mx-auto max-w-5xl text-center text-[clamp(2.75rem,8vw,6.5rem)] text-foreground"
        >
          Crafting digital products with{" "}
          <span className="font-bold text-accent">obsessive</span> attention to detail.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I design and build polished web experiences end to end. From the
          database to the last pixel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
          >
            <Sparkles className="h-4 w-4" />
            See my work
          </a>
          <a
            href="mailto:praharj123barman@gmail.com"
            className="btn-ghost flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
          >
            Let&apos;s talk
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="glass-base flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Marquee tagline strips */}
      <div className="relative mt-20 overflow-hidden border-y border-white/5 py-6">
        <div className="marquee-track gap-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`m1-${i}`}
              className="display flex shrink-0 items-center gap-12 text-[clamp(2rem,6vw,4.5rem)] text-foreground/90"
            >
              {tagline}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-white/5 py-6">
        <div className="marquee-track-rev gap-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={`m2-${i}`}
              className="display flex shrink-0 items-center gap-12 text-[clamp(2rem,6vw,4.5rem)] text-muted-foreground/40"
            >
              {tagline}
              <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
