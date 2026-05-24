"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = {
  name: string;
  tagline: string;
  stack: string[];
  image: string;
  live: string;
  year: string;
};

const projects: Project[] = [
  {
    name: "MultiMart",
    tagline: "Multi-tenant e-commerce platform",
    stack: ["Next.js", "Payload CMS", "Stripe Connect", "MongoDB"],
    image: "/projects/multimart.png",
    live: "https://multitenant-ecommerce-nbhs.vercel.app",
    year: "2026",
  },
  {
    name: "Taskflow",
    tagline: "Kanban for teams",
    stack: ["Next.js 16", "Postgres", "dnd-kit", "Prisma"],
    image: "/projects/taskflow.png",
    live: "https://trello-clone-five-kohl.vercel.app",
    year: "2025",
  },
  {
    name: "Pulse",
    tagline: "Real-time analytics dashboard",
    stack: ["React", "Recharts", "Tailwind"],
    image: "/projects/pulse.png",
    live: "https://venerable-tanuki-546a9f.netlify.app",
    year: "2025",
  },
  {
    name: "NOVEN",
    tagline: "Creative agency landing",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/noven.png",
    live: "https://noven-agency.vercel.app",
    year: "2025",
  },
  {
    name: "Meridian",
    tagline: "AI analytics platform",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    image: "/projects/meridian.png",
    live: "https://meridian-landing-sigma.vercel.app",
    year: "2025",
  },
  {
    name: "Aurm",
    tagline: "Sneaker e-commerce storefront",
    stack: ["Next.js", "Supabase", "RLS", "Tailwind"],
    image: "/projects/aurm.png",
    live: "https://aurm-ecommerce.vercel.app",
    year: "2025",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="label-caps mb-3 !text-secondary">Selected work</p>
            <h2
              className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
              style={{
                fontFamily:
                  "var(--font-eb-garamond), 'EB Garamond', serif",
              }}
            >
              Recent projects shipped end-to-end.
            </h2>
          </div>
          <p
            className="max-w-sm text-base text-on-surface-variant"
            style={{ fontFamily: "var(--font-geist), Geist, sans-serif" }}
          >
            Marketplaces, SaaS, dashboards, and storefronts. Each one a real,
            live product with paying users or real client deliverables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.name} live`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.08 }}
              className="group interactive block"
            >
              <div className="glass-panel relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  priority={i < 2}
                />
                {/* gold pill year top-left */}
                <span className="glass-pill mono-label absolute left-4 top-4 rounded-full px-3 py-1 !text-[11px] text-secondary">
                  {p.year}
                </span>
                {/* arrow top-right */}
                <span className="glass-pill absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-all group-hover:bg-secondary group-hover:text-on-primary-fixed">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                {/* bottom scrim */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className="text-xl text-on-surface transition-colors group-hover:text-secondary md:text-2xl"
                    style={{
                      fontFamily:
                        "var(--font-eb-garamond), 'EB Garamond', serif",
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant">{p.tagline}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="glass-pill mono-label rounded-full px-2.5 py-0.5 !text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
