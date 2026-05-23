"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const repeatTags = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Postgres",
  "MongoDB",
  "Stripe",
  "tRPC",
  "Framer",
  "Vercel",
  "Prisma",
];

export function CTA() {
  return (
    <section className="hero-orbs relative py-32">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="glass-card relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16"
        >
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-40 w-40 rounded-full bg-accent-2/30 blur-3xl" />

          <p className="label-mono text-accent">Let&apos;s build</p>
          <h2 className="display mx-auto mt-4 max-w-3xl text-4xl text-foreground sm:text-5xl md:text-6xl">
            Let&apos;s build something{" "}
            <span className="font-bold text-accent">amazing</span> together.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Got a product idea, a redesign, or a marketplace you want shipped?
            I reply within a day.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:praharj123barman@gmail.com"
              className="btn-primary flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              <Mail className="h-4 w-4" />
              Email me
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/praharj123barman-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              See code on GitHub
            </a>
          </div>
        </motion.div>

        {/* Repeating tech-tag strip */}
        <div className="mt-14 overflow-hidden border-y border-white/5 py-5">
          <div className="marquee-track gap-6">
            {Array.from({ length: 4 }).map((_, dup) =>
              repeatTags.map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="label-mono shrink-0 !text-xs !tracking-[0.25em] text-muted-foreground/60"
                >
                  <span className="text-accent/60">✦</span> {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
