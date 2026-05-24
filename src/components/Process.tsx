"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "A 20-minute intro call. We unpack the problem, the users, the constraints, and what shipping looks like in your world.",
  },
  {
    n: "02",
    title: "Design",
    body: "Wireframes and a UI direction within the first week. Fast feedback loops, real components, no slideware.",
  },
  {
    n: "03",
    title: "Build",
    body: "Type-safe code, weekly demos on a live preview URL, milestone-based payments. You see progress every Friday.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Production deploy on Vercel. Real domains, real monitoring, real handoff docs. Two weeks of polish bundled in.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-caps mb-3 !text-secondary">Process</p>
          <h2
            className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            How the work happens.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.1 }}
              className="glass-panel interactive relative rounded-xl p-8"
            >
              <span
                className="mb-6 block text-secondary"
                style={{
                  fontFamily:
                    "var(--font-eb-garamond), 'EB Garamond', serif",
                  fontSize: "48px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.n}
              </span>
              <h3
                className="mb-3 text-2xl text-on-surface"
                style={{
                  fontFamily:
                    "var(--font-eb-garamond), 'EB Garamond', serif",
                }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
