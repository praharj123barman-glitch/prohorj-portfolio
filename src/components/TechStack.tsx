"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlalchemy,
  SiDocker,
  SiNginx,
  SiVite,
  SiStripe,
  SiVercel,
  SiGithub,
  SiGit,
  SiFramer,
  SiTrpc,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

const ease = [0.16, 1, 0.3, 1] as const;

type Tech = { name: string; Icon: IconType; color: string };

const stack: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "tRPC", Icon: SiTrpc, color: "#2596BE" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "SQLAlchemy", Icon: SiSqlalchemy, color: "#D71F00" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
];

export function TechStack() {
  return (
    <motion.section
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
          className="mb-14 max-w-2xl"
        >
          <p className="label-caps mb-3 !text-secondary">Stack</p>
          <h2
            className="display text-[clamp(2rem,5vw,3.5rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            Tools I reach for daily.
          </h2>
          <p
            className="mt-5 text-base text-on-surface-variant md:text-lg"
            style={{ fontFamily: "var(--font-geist), Geist, sans-serif" }}
          >
            Type-safe end-to-end, fast to ship, easy to maintain. Picked for
            craft, not novelty.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
          {stack.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                  delay: 0.15 + (i % 10) * 0.05,
                }}
                whileHover={{ y: -4, scale: 1.06 }}
                title={tech.name}
                className="glass-panel interactive group flex aspect-square cursor-pointer items-center justify-center rounded-lg"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -4, 4, 0] }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <Icon
                    className="h-7 w-7 sm:h-9 sm:w-9"
                    style={{ color: tech.color }}
                    aria-label={tech.name}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
