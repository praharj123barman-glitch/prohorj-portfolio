"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  {
    label: "Upwork",
    handle: "Top Rated profile",
    href: "https://www.upwork.com/freelancers/~01333d4508a3dea58e",
  },
  {
    label: "LinkedIn",
    handle: "/in/prohorj-babu-bormon",
    href: "https://www.linkedin.com/in/prohorj-babu-bormon-a6a3693b8",
  },
  {
    label: "GitHub",
    handle: "@praharj123barman-glitch",
    href: "https://github.com/praharj123barman-glitch",
  },
  {
    label: "X / Twitter",
    handle: "@prohorj_dev",
    href: "https://x.com/prohorj_dev",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !msg) return;
    // Open user's mail client pre-filled — works without backend
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Prohorj,\n\n${msg}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:praharj123barman@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-3xl"
        >
          <p className="label-caps mb-3 !text-secondary">Contact</p>
          <h2
            className="display text-[clamp(2.25rem,6vw,4rem)] leading-tight"
            style={{
              fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
            }}
          >
            Let&apos;s build something{" "}
            <em className="not-italic text-secondary">worth shipping</em>.
          </h2>
          <p
            className="mt-5 text-base text-on-surface-variant md:text-lg"
            style={{ fontFamily: "var(--font-geist), Geist, sans-serif" }}
          >
            Got a product idea, a redesign, or a marketplace you want shipped?
            Reply within a day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Left: Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="glass-panel flex flex-col gap-6 rounded-xl p-8 md:col-span-7 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="label-caps !text-secondary !text-[11px]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="minimal-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="label-caps !text-secondary !text-[11px]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="minimal-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="msg"
                className="label-caps !text-secondary !text-[11px]"
              >
                What are you building?
              </label>
              <textarea
                id="msg"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="A few sentences on the product, timeline, and budget if you have one."
                rows={5}
                className="minimal-input resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-gold mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full px-8 py-3"
            >
              {sent ? "Opening email…" : "Send inquiry"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Right: Direct + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex flex-col gap-8 md:col-span-5"
          >
            <a
              href="mailto:praharj123barman@gmail.com"
              className="glass-panel interactive flex items-center gap-4 rounded-xl p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Mail className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="mono-label">Email</span>
                <span className="text-sm text-on-surface">
                  praharj123barman@gmail.com
                </span>
              </div>
            </a>

            <div>
              <p className="label-caps mb-4 !text-secondary !text-[11px]">
                Find me elsewhere
              </p>
              <ul className="flex flex-col gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel interactive group flex items-center justify-between rounded-xl px-5 py-4"
                    >
                      <div className="flex flex-col">
                        <span
                          className="text-lg text-on-surface group-hover:text-secondary"
                          style={{
                            fontFamily:
                              "var(--font-eb-garamond), 'EB Garamond', serif",
                          }}
                        >
                          {s.label}
                        </span>
                        <span className="mono-label !text-[12px]">
                          {s.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-on-surface-variant transition-colors group-hover:text-secondary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
