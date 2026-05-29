"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

const socialLinks = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Github, href: socials.github, label: "GitHub" },
  { icon: Mail, href: socials.email, label: "Email" }
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-8">
      <div className="container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-[var(--muted)]">
          Copyright {new Date().getFullYear()} Harisha Gunti. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-red-500 hover:text-red-500"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-red-600 text-white shadow-glow transition hover:bg-red-500"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
