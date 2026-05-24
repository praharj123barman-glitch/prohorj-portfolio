"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const socialLinks = [
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01333d4508a3dea58e",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prohorj-babu-bormon-a6a3693b8",
  },
  { label: "GitHub", href: "https://github.com/praharj123barman-glitch" },
  { label: "X", href: "https://x.com/prohorj_dev" },
  { label: "Email", href: "mailto:praharj123barman@gmail.com" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="relative w-full overflow-hidden border-t border-outline-variant/20 bg-background px-6 pb-12 pt-32 md:px-16"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
        {/* Giant PROHORJ watermark */}
        <div className="watermark mb-16 w-full text-[clamp(5rem,20vw,16rem)]">
          PROHORJ
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Prohorj. The Digital Jeweler.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    s.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="label-caps transition-colors duration-300 hover:!text-secondary"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
