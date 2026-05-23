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
    <section id="projects" className="relative px-5 py-32 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <h2 className="display text-4xl text-foreground sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="text-glow text-accent">Projects</span>
          </h2>
          <p className="max-w-xs text-right text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            A selection of my most passionately created projects with
            forward-thinking clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name} live site`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.08 }}
              className="group block"
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
                transition={{ duration: 0.5, ease }}
                className="glass-card relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                  priority={i < 2}
                />
                {/* bottom-up scrim for legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-50" />
                {/* shimmer sweep on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
                />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                {p.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
