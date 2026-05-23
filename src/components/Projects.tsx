"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  image: string;
  year: string;
};

const projects: Project[] = [
  {
    name: "MultiMart",
    tagline: "Multi-tenant e-commerce platform",
    description:
      "Every seller gets a subdomain, storefront, Stripe Connect payouts, and dashboard. Built end-to-end with Payload CMS, tRPC, and MongoDB.",
    tags: ["Next.js", "Payload", "Stripe", "tRPC"],
    live: "https://multitenant-ecommerce-nbhs.vercel.app",
    repo: "https://github.com/praharj123barman-glitch/multitenant-ecommerce",
    image: "/projects/multimart.png",
    year: "2026",
  },
  {
    name: "Taskflow",
    tagline: "Trello-style kanban for teams",
    description:
      "Drag-and-drop boards, lists, and cards with optimistic updates. Built on Next.js 16 with Postgres and dnd-kit choreography.",
    tags: ["Next.js 16", "Postgres", "dnd-kit", "Prisma"],
    live: "https://trello-clone-five-kohl.vercel.app",
    image: "/projects/taskflow.png",
    year: "2025",
  },
  {
    name: "Pulse",
    tagline: "Real-time analytics dashboard",
    description:
      "Revenue, active users, conversion, and churn rendered live. Charts, traffic-source breakdowns, exportable reports. Data-heavy and snappy.",
    tags: ["React", "Recharts", "Tailwind"],
    live: "https://venerable-tanuki-546a9f.netlify.app",
    image: "/projects/pulse.png",
    year: "2025",
  },
  {
    name: "NOVEN",
    tagline: "Creative agency landing",
    description:
      "Bold editorial typography for a brand-strategy and web-design studio. Orange on black, statement headline, motion-rich scroll.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://noven-agency.vercel.app",
    image: "/projects/noven.png",
    year: "2025",
  },
  {
    name: "Meridian",
    tagline: "AI analytics platform",
    description:
      "Marketing site for an AI-powered analytics platform: data that thinks before you do. Clean editorial layout, fast load, conversion-focused CTAs.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    live: "https://meridian-landing-sigma.vercel.app",
    image: "/projects/meridian.png",
    year: "2025",
  },
  {
    name: "Aurm",
    tagline: "Sneaker e-commerce storefront",
    description:
      "Premium product detail page with gallery, color variants, size matrix, and a sticky buy panel. Built on Supabase with row-level security.",
    tags: ["Next.js", "Supabase", "Tailwind", "RLS"],
    live: "https://aurm-ecommerce.vercel.app",
    image: "/projects/aurm.png",
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p className="label-mono text-accent">Featured work</p>
            <h2 className="display mt-3 text-4xl text-foreground sm:text-5xl">
              Selected projects.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Six products shipped, all live. Marketplaces, kanban tools,
            dashboards, agency sites, storefronts. Each one is real, not a
            demo.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.06 }}
              className="glass-card group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:border-white/15 hover:shadow-glow"
            >
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.name} live site`}
                className="relative block aspect-[16/10] overflow-hidden bg-black/40"
              >
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={i < 3}
                />
                {/* Top gradient for badge legibility on bright screenshots */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="glass-elevated rounded-full px-2.5 py-1 text-[10px] font-medium text-foreground/90">
                    {p.year}
                  </span>
                </div>
                <div className="absolute right-5 top-5">
                  <span className="glass-elevated flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-all group-hover:bg-accent group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{p.tagline}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="glass-base rounded-full px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.live || p.repo) && (
                  <div className="flex items-center gap-2 pt-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px]"
                      >
                        Visit live
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px]"
                      >
                        <Code2 className="h-3 w-3" />
                        Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
