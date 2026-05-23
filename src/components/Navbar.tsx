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
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-20">
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 14 }}
            className="accent-gradient flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-on-primary"
          >
            P
          </motion.span>
          <span className="display text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">
            prohorj
          </span>
        </Link>

        <ul className="glass-pill hidden items-center gap-1 rounded-full px-2 py-1 md:flex">
          {[
            { href: "/", label: "Home", active: true },
            { href: "#projects", label: "Projects" },
            { href: "#about", label: "About" },
          ].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  l.active
                    ? "text-foreground"
                    : "text-on-surface-variant hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.a
          href="mailto:praharj123barman@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
          className="btn-accent-ghost flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium sm:text-sm"
        >
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Mail className="h-3.5 w-3.5" />
          </motion.span>
          <span className="hidden sm:inline">Hire me</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}
