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
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ease = [0.16, 1, 0.3, 1] as const;

type Tech = {
  name: string;
  Icon: IconType;
  color: string;
};

const stack: Tech[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export function TechStack() {
  return (
    <section className="relative px-5 py-32 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="display text-4xl text-foreground sm:text-5xl md:text-6xl">
            My Tech{" "}
            <span className="text-glow text-accent">Stack</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-on-surface-variant">
            The tools I use to build scalable, high-performance web
            applications.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {stack.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                  delay: 0.15 + (i % 5) * 0.06 + Math.floor(i / 5) * 0.1,
                }}
                whileHover={{ y: -4, scale: 1.04 }}
                title={tech.name}
                className="glass-card card-glow group relative flex aspect-square cursor-pointer items-center justify-center rounded-2xl"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -4, 4, 0] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Icon
                    className="h-10 w-10 sm:h-12 sm:w-12"
                    style={{ color: tech.color }}
                    aria-label={tech.name}
                  />
                </motion.div>
                {/* Hover label */}
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface-container-highest px-2.5 py-1 text-[10px] font-medium text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
