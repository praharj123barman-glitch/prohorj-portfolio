"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    q: "What's your typical turnaround?",
    a: "Landing pages ship in 1–2 weeks, MVPs in 3–6, marketplaces in 3–8. I commit to a date in the proposal and don't move it without telling you.",
  },
  {
    q: "How does payment work?",
    a: "Fixed-fee, milestone-based. Half on kickoff, the rest on launch. UPI for India, bank transfer for international clients. No hourly billing, no surprise invoices.",
  },
  {
    q: "Do you work with my existing team?",
    a: "Yes. I integrate into your Slack, your GitHub, your project tracker. Daily updates if you want them, weekly demos by default.",
  },
  {
    q: "Can I see code samples before hiring?",
    a: "Every project on this site links to its live URL. For source access, just ask — I send a private Loom walkthrough of the codebase.",
  },
  {
    q: "What if the project goes over scope?",
    a: "Scope changes get a quick change order with a new fixed price. I never bill surprise extras, and I won't say yes to scope I can't ship on time.",
  },
  {
    q: "Where are you based?",
    a: "India. I work async with clients across US, EU, and APAC time zones. Weekly synchronous calls fit any reasonable hour.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
      className="glass-panel interactive rounded-xl"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
        aria-expanded={open}
      >
        <span
          className="text-lg text-on-surface md:text-xl"
          style={{
            fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant/30 text-secondary"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-6 py-32 md:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-caps mb-3 !text-secondary">FAQ</p>
          <h2
            className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            Common questions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {items.map((it, i) => (
            <Item key={it.q} q={it.q} a={it.a} i={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
