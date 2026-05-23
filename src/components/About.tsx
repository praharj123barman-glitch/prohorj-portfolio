"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Gem } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const attributes = [
  {
    icon: Code2,
    label: "Full-Stack",
    title: "End-to-end builder",
    body: "From schema to pixel. TypeScript across the stack, tRPC for type-safe APIs, Prisma with Postgres or Payload with MongoDB for data.",
  },
  {
    icon: Sparkles,
    label: "Design-first",
    title: "Interfaces that feel alive",
    body: "Glassmorphic depth, real type systems, motion that breathes. Every interaction is intentional, never ornamental.",
  },
  {
    icon: Rocket,
    label: "Ship-fast",
    title: "Production on day one",
    body: "Live on Vercel within hours. Real Stripe, real auth, real database. Never a demo dressed up as a product.",
  },
  {
    icon: Gem,
    label: "Detail-obsessed",
    title: "The 1% that compounds",
    body: "8px grid, semantic tokens, easing curves picked by hand. The polish you feel before you can name it.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-32 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 max-w-2xl"
        >
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            About me
          </h3>
          <h2 className="display mb-6 text-4xl text-foreground sm:text-5xl">
            I build the kind of products I&apos;d want to use.
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Multi-tenant marketplaces, real-time dashboards, kanban tools,
            financing platforms. Shipped end-to-end with the same care a
            jeweller gives to a setting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr, i) => {
            const Icon = attr.icon;
            return (
              <motion.div
                key={attr.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.08 }}
                className="glass-card card-glow group rounded-2xl p-8"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -6, 6, 0], scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-highest"
                >
                  <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                  {attr.label}
                </h4>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {attr.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {attr.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
