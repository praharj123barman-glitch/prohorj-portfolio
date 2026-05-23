"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Tech = {
  name: string;
  initial: string;
  tint: string;
};

const stack: Tech[] = [
  { name: "TypeScript", initial: "TS", tint: "from-blue-400 to-blue-600" },
  { name: "React", initial: "Re", tint: "from-cyan-300 to-cyan-500" },
  { name: "Next.js", initial: "Nx", tint: "from-white to-zinc-400" },
  { name: "Tailwind", initial: "Tw", tint: "from-cyan-300 to-sky-500" },
  { name: "Node.js", initial: "Nd", tint: "from-emerald-400 to-green-600" },
  { name: "Python", initial: "Py", tint: "from-yellow-300 to-blue-500" },
  { name: "Django", initial: "Dj", tint: "from-emerald-500 to-emerald-700" },
  { name: "Prisma", initial: "Pr", tint: "from-indigo-300 to-indigo-500" },
  { name: "Postgres", initial: "Pg", tint: "from-sky-400 to-blue-600" },
  { name: "MongoDB", initial: "Mo", tint: "from-green-400 to-emerald-600" },
  { name: "Stripe", initial: "St", tint: "from-violet-400 to-purple-600" },
  { name: "tRPC", initial: "tR", tint: "from-blue-400 to-cyan-400" },
  { name: "Framer", initial: "Fm", tint: "from-pink-400 to-rose-500" },
  { name: "Vercel", initial: "Vc", tint: "from-zinc-100 to-zinc-400" },
  { name: "Git", initial: "Gt", tint: "from-orange-400 to-red-500" },
  { name: "GitHub", initial: "Gh", tint: "from-zinc-200 to-zinc-500" },
];

export function TechStack() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="label-mono text-accent">Tech stack</p>
          <h2 className="display mt-3 text-4xl text-foreground sm:text-5xl">
            Tools I reach for.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Picked for ergonomics, type safety, and how fast they let me get
            from idea to deployed.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                ease,
                delay: 0.1 + (i % 8) * 0.04 + Math.floor(i / 8) * 0.08,
              }}
              className="glass-card group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl transition-all hover:border-white/20 hover:shadow-glow"
            >
              <div
                className={`bg-gradient-to-br ${tech.tint} flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-black/85 shadow-sm`}
              >
                {tech.initial}
              </div>
              <span className="text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
