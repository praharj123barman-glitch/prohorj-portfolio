"use client";

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
  accent: string; // gradient classes
  year: string;
  scale: string; // "01", "02"...
};

const projects: Project[] = [
  {
    name: "MultiMart",
    tagline: "Multi-tenant e-commerce platform",
    description:
      "Every seller gets their own subdomain, storefront, Stripe Connect payouts, and dashboard. Built end-to-end with Payload CMS + tRPC + MongoDB.",
    tags: ["Next.js", "Payload", "Stripe", "tRPC"],
    live: "https://multitenant-ecommerce-nbhs.vercel.app",
    repo: "https://github.com/praharj123barman-glitch/multitenant-ecommerce",
    accent: "from-cyan-400/40 via-blue-500/30 to-indigo-600/20",
    year: "2026",
    scale: "01",
  },
  {
    name: "Taskflow",
    tagline: "Trello-style kanban board",
    description:
      "Drag-and-drop boards, lists, and cards with optimistic updates. Built on Next.js 16 + Prisma 7 with @dnd-kit choreography.",
    tags: ["Next.js 16", "Prisma 7", "dnd-kit", "Postgres"],
    accent: "from-violet-400/40 via-purple-500/30 to-fuchsia-600/20",
    year: "2026",
    scale: "02",
  },
  {
    name: "ShopWave",
    tagline: "Storefront experience kit",
    description:
      "Headless storefront with product galleries, faceted search, and checkout primitives ready to drop into any commerce stack.",
    tags: ["React", "Tailwind", "TypeScript"],
    accent: "from-emerald-400/40 via-teal-500/30 to-cyan-600/20",
    year: "2026",
    scale: "03",
  },
  {
    name: "DevBoard",
    tagline: "Developer-first project board",
    description:
      "GitHub-native kanban. Issues sync both ways, PR previews inline, hotkeys for everything. Built for engineers, not project managers.",
    tags: ["Next.js", "GitHub API", "shadcn/ui"],
    accent: "from-orange-400/40 via-amber-500/30 to-yellow-600/20",
    year: "2026",
    scale: "04",
  },
  {
    name: "AdminX",
    tagline: "Admin dashboard system",
    description:
      "Type-safe admin panels generated from schemas. Tables, forms, and CRUD plumbing without writing the same code twice.",
    tags: ["React", "Tailwind", "Zod"],
    accent: "from-rose-400/40 via-pink-500/30 to-purple-600/20",
    year: "2026",
    scale: "05",
  },
  {
    name: "Nexus-SaaS",
    tagline: "SaaS starter template",
    description:
      "Auth, Stripe subscriptions, team management, and email wired together with sensible defaults, so the first commit is a real feature, not setup.",
    tags: ["Next.js", "Stripe", "Auth", "Email"],
    accent: "from-blue-400/40 via-indigo-500/30 to-violet-600/20",
    year: "2026",
    scale: "06",
  },
  {
    name: "Truck Financing",
    tagline: "Lead-gen landing for a finance broker",
    description:
      "Built for a real Upwork-style client brief: converting hero, multi-step inquiry form, trust signals, fully responsive. Static, fast, indexable.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "from-yellow-400/40 via-amber-500/30 to-orange-600/20",
    year: "2026",
    scale: "07",
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
            Seven products shipped this year. Each one took something I&apos;d
            never built before and made it production.
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
              {/* Visual canvas */}
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="display text-[10rem] leading-none text-white/8 transition-transform duration-700 group-hover:scale-110">
                    {p.scale}
                  </span>
                </div>
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="glass-elevated rounded-full px-2.5 py-1 text-[10px] font-medium text-foreground/90">
                    {p.year}
                  </span>
                </div>
                <div className="absolute right-5 top-5">
                  <span className="glass-elevated flex h-9 w-9 items-center justify-center rounded-full text-foreground/90 transition-all group-hover:bg-accent group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Meta */}
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
