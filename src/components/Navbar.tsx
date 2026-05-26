"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MagneticAnchor } from "./motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="glass-nav fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-16">
        <Link
          href="/"
          className="headline text-2xl tracking-tight text-on-surface md:text-3xl"
        >
          Prohorj
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="label-caps transition-colors duration-300 hover:!text-secondary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <MagneticAnchor
          href="#contact"
          className="btn-gold hidden rounded-full px-6 py-2 md:inline-block"
        >
          Book a call
        </MagneticAnchor>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="text-on-surface md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          className="border-t border-outline-variant/30 px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-caps block py-2 transition-colors hover:!text-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold inline-block rounded-full px-6 py-2"
              >
                Book a call
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
