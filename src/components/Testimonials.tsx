"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const quotes = [
  {
    body: "Prohorj shipped our marketplace in five weeks. Subdomains, Stripe Connect, the whole stack. The polish was the surprise — it feels more expensive than what we paid.",
    name: "Founder, multi-vendor commerce client",
    location: "via Upwork",
  },
  {
    body: "What sold me was the weekly Friday demo on a live URL. I always knew what I was buying. Zero scope creep.",
    name: "PM, SaaS startup",
    location: "via direct referral",
  },
  {
    body: "Took a tired landing page and gave it a heartbeat. Conversion jumped 38% the week after launch. Worth every dollar.",
    name: "Marketing lead, agency",
    location: "via Upwork",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-caps mb-3 !text-secondary">Testimonials</p>
          <h2
            className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            What clients say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.08 }}
              className="glass-panel interactive flex flex-col gap-6 rounded-xl p-8"
            >
              <Quote className="h-7 w-7 text-secondary" />
              <blockquote
                className="text-base leading-relaxed text-on-surface md:text-lg"
                style={{
                  fontFamily:
                    "var(--font-eb-garamond), 'EB Garamond', serif",
                }}
              >
                “{q.body}”
              </blockquote>
              <figcaption className="mt-auto border-t border-outline-variant/30 pt-4">
                <p className="text-sm font-medium text-on-surface">{q.name}</p>
                <p className="mono-label mt-1">{q.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
