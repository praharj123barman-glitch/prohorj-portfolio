"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = {
  name: string;
  image: string;
  live: string;
};

const projects: Project[] = [
  {
    name: "MultiMart — Multi-tenant E-commerce",
    image: "/projects/multimart.png",
    live: "https://multitenant-ecommerce-nbhs.vercel.app",
  },
  {
    name: "Taskflow — Kanban for Teams",
    image: "/projects/taskflow.png",
    live: "https://trello-clone-five-kohl.vercel.app",
  },
  {
    name: "Pulse — Analytics Dashboard",
    image: "/projects/pulse.png",
    live: "https://venerable-tanuki-546a9f.netlify.app",
  },
  {
    name: "NOVEN — Creative Agency",
    image: "/projects/noven.png",
    live: "https://noven-agency.vercel.app",
  },
  {
    name: "Meridian — AI Analytics Platform",
    image: "/projects/meridian.png",
    live: "https://meridian-landing-sigma.vercel.app",
  },
  {
    name: "Aurm — Sneaker Storefront",
    image: "/projects/aurm.png",
    live: "https://aurm-ecommerce.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header: left title + right uppercase subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <h2 className="display text-4xl text-foreground sm:text-5xl md:text-6xl">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="label-mono max-w-xs text-right text-muted-foreground sm:max-w-sm">
            A selection of my most passionately created projects with
            forward-thinking clients.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name} live site`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.07 }}
              className="group block"
            >
              {/* Dark rounded frame around screenshot */}
              <div className="glass-card relative overflow-hidden rounded-3xl p-3 transition-all hover:border-white/15 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/40">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    priority={i < 2}
                  />
                </div>
              </div>

              {/* Project name below, left-aligned */}
              <h3 className="mt-5 text-sm font-medium text-foreground transition-colors group-hover:text-accent sm:text-base">
                {p.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
