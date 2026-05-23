"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const repeatTags = [
  "tRPC",
  "Framer",
  "Vercel",
  "Prisma",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Postgres",
  "MongoDB",
  "Stripe",
];

export function CTA() {
  return (
    <>
      <section className="relative px-5 py-32 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="glass-card relative overflow-hidden rounded-[2rem] p-12 text-center md:p-20"
          >
            {/* Radial orange glow center */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 92, 0, 0.18), transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                Let&apos;s build
              </h3>
              <h2 className="display mx-auto mb-6 max-w-3xl text-4xl text-foreground sm:text-5xl md:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-glow text-accent">amazing</span> together.
              </h2>
              <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-on-surface-variant">
                Got a product idea, a redesign, or a marketplace you want
                shipped? I reply within a day.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:praharj123barman@gmail.com"
                  className="btn-primary flex items-center gap-2 rounded-full px-8 py-3.5 text-sm"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <a
                  href="https://github.com/praharj123barman-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium"
                >
                  See code on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom tech-tag marquee */}
      <div className="mb-8 flex w-full overflow-hidden whitespace-nowrap py-6">
        <div className="marquee-track items-center gap-8 opacity-50">
          {Array.from({ length: 4 }).map((_, dup) =>
            repeatTags.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant"
              >
                {t} <span className="text-accent">•</span>
              </span>
            )),
          )}
        </div>
      </div>
    </>
  );
}
