"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .map((item) => item.href.slice(1))
        .findLast((id) => {
          const element = document.getElementById(id);
          return element ? element.offsetTop - 120 <= window.scrollY : false;
        });
      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-3 transition ${
          scrolled ? "glass" : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-red-600 to-red-400 text-sm font-black text-white shadow-glow">
            HG
          </span>
          <span className="hidden text-sm font-semibold text-[var(--text)] sm:inline">
            Harisha Gunti
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === id
                    ? "bg-red-500 text-white shadow-glow"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-red-500"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute right-4 top-4 w-[min(360px,calc(100vw-2rem))] rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-2xl"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-semibold text-[var(--text)]">Navigation</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--border)]"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-red-500 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
