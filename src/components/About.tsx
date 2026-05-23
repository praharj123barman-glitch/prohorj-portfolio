"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Wand2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const attributes = [
  {
    icon: Code2,
    label: "Full-Stack",
    title: "End-to-end builder",
    body: "From schema to pixel. TypeScript across the stack, tRPC for type-safe APIs, Prisma with Postgres or Payload with MongoDB for data.",
  },
  {
    icon: Wand2,
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
    icon: Layers,
    label: "Detail-obsessed",
    title: "The 1% that compounds",
    body: "8px grid, semantic tokens, easing curves picked by hand. The polish you feel before you can name it.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <p className="label-mono text-accent">About me</p>
          <h2 className="display mt-3 text-4xl text-foreground sm:text-5xl">
            I build the kind of products I&apos;d want to use.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Multi-tenant marketplaces, real-time dashboards, kanban tools,
            financing platforms. Shipped end-to-end with the same care a
            jeweller gives to a setting.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr, i) => {
            const Icon = attr.icon;
            return (
              <motion.div
                key={attr.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.07 }}
                className="glass-card group relative overflow-hidden rounded-3xl p-6 transition-colors hover:border-white/20"
              >
                <div className="glass-elevated mb-5 flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="label-mono text-accent">{attr.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {attr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {attr.body}
                </p>
                {/* hover glow */}
                <div
                  aria-hidden
                  className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
