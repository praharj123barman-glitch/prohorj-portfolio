"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/praharj123barman-glitch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.07c-3.2.69-3.87-1.36-3.87-1.36-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.78 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.37-5.25 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prohorj-babu-bormon-a6a3693b8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/prohorj_dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.97 6.817H1.674l7.73-8.835L1.25 2.25h6.83l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:praharj123barman@gmail.com",
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-surface px-5 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="accent-gradient flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-on-primary">
            P
          </span>
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Prohorj. Built with care.
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-accent"
              >
                {s.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
