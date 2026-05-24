"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const clientTags = [
  "NEXT.JS",
  "PAYLOAD CMS",
  "STRIPE CONNECT",
  "TRPC",
  "POSTGRES",
  "TYPESCRIPT",
  "REACT",
  "TAILWIND",
  "FRAMER MOTION",
  "VERCEL",
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, 240]);
  const photoScale = useTransform(scrollY, [0, 800], [1.1, 1.0]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Background image — right-side bleed, parallax */}
      <motion.div
        aria-hidden
        style={{ y: photoY, scale: photoScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top opacity-60 saturate-50"
          style={{ mixBlendMode: "luminosity" }}
        />
        <div className="hero-bg-overlay absolute inset-0" />
        {/* Grain */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Bottom gold hairline */}
        <div className="hairline-gold absolute bottom-0 h-px w-full" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-12 md:px-16">
        <div className="flex flex-col items-start gap-6 md:col-span-7">
          {/* Status pill — lime breathing dot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="glass-pill flex items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="status-dot h-2 w-2 rounded-full" />
            <span className="mono-label">
              Booking June 2026 · 1 slot left
            </span>
          </motion.div>

          {/* Headline — EB Garamond serif */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="display text-[clamp(2.5rem,7vw,5rem)] leading-[1.05]"
          >
            Crafting digital products with{" "}
            <em className="not-italic text-secondary">obsessive</em> attention
            to detail.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="max-w-lg text-base leading-[1.6] text-secondary/80 sm:text-lg"
            style={{ fontFamily: "var(--font-geist), Geist, sans-serif" }}
          >
            Full-stack developer building marketplaces, SaaS, and tools that
            feel alive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-gold interactive rounded-full px-8 py-3"
            >
              Book a 20-min intro call
            </a>
            <a
              href="#work"
              className="btn-glass interactive rounded-full px-8 py-3"
            >
              See case studies
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom tech-tag marquee — replaces the placeholder client marquee */}
      <div className="glass-panel absolute bottom-0 z-10 w-full border-x-0 border-b-0 border-t py-6">
        <div className="overflow-hidden">
          <div className="marquee-track items-center gap-16 px-8 opacity-50">
            {Array.from({ length: 4 }).map((_, dup) =>
              clientTags.map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="label-caps shrink-0 whitespace-nowrap"
                >
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
