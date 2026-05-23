"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="glass-nav fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="accent-gradient flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-background shadow-glow">
            P
          </span>
          <span className="display text-base text-foreground">prohorj</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {[
            { href: "/", label: "Home" },
            { href: "#projects", label: "Projects" },
            { href: "#about", label: "About" },
          ].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:praharj123barman@gmail.com"
          className="btn-primary flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Hire me</span>
          <span className="text-base leading-none">+</span>
        </a>
      </nav>
    </motion.header>
  );
}
