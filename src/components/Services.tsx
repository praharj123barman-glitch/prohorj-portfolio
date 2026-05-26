"use client";

import { motion } from "framer-motion";
import { Layers, ShoppingCart, Rocket, Wand2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: Layers,
    title: "Full-stack web apps",
    body: "Next.js, tRPC, Postgres or MongoDB, type-safe end-to-end. Auth, billing, dashboards, the works.",
    deliverable: "App in production, 2–6 weeks",
  },
  {
    icon: ShoppingCart,
    title: "Multi-tenant marketplaces",
    body: "Vendor onboarding, Stripe Connect payouts, subdomain or path-based tenants, role-based access.",
    deliverable: "Live marketplace, 3–8 weeks",
  },
  {
    icon: Rocket,
    title: "SaaS MVPs",
    body: "Idea to shipped product. Auth, subscriptions, team management, email — wired and live.",
    deliverable: "MVP launched, 3–6 weeks",
  },
  {
    icon: Wand2,
    title: "Landing pages & redesigns",
    body: "Conversion-focused marketing sites, brand-tier polish, Framer Motion, hand-tuned typography.",
    deliverable: "Live site, 1–2 weeks",
  },
];

export function Services() {
  return (
    <motion.section
      id="services"
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
          <p className="label-caps mb-3 !text-secondary">Services</p>
          <h2
            className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            How I can help.
          </h2>
          <p
            className="mt-5 text-base text-on-surface-variant md:text-lg"
            style={{ fontFamily: "var(--font-geist), Geist, sans-serif" }}
          >
            Pick the engagement that fits where you are. All work is fixed-fee
            and milestone-based. UPI for India, bank transfer for international
            clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.08 }}
                className="glass-panel interactive flex flex-col gap-4 rounded-xl p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-highest">
                  <Icon className="h-5 w-5 text-secondary" />
                </div>
                <h3
                  className="text-2xl text-on-surface"
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
                <p className="mono-label mt-2 !text-secondary">
                  ↳ {s.deliverable}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
