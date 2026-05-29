"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactMethods, socials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful."
          description="Reach out for internships, project collaboration, ML ideas, or full-stack development opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="rounded-3xl bg-gradient-to-br from-red-600 to-red-400 p-7 text-white shadow-glow"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Available for
            </p>
            <h3 className="mt-3 text-3xl font-black">Internships and placement opportunities</h3>
            <p className="mt-4 leading-7 text-white/85">
              Harisha is interested in teams working on intelligent systems, modern web products,
              data analysis, and secure backend services.
            </p>
            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-3 rounded-2xl bg-white/14 p-4 backdrop-blur-md transition hover:bg-white/22"
                >
                  <method.icon size={20} />
                  <span>
                    <span className="block text-sm text-white/75">{method.label}</span>
                    <span className="font-semibold">{method.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="glass grid gap-4 rounded-3xl p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action={socials.email}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
                Name
                <input
                  className="focus-ring rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text)]"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
                Email
                <input
                  className="focus-ring rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text)]"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
              Message
              <textarea
                className="focus-ring min-h-40 resize-y rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text)]"
                name="message"
                placeholder="Tell me about the opportunity..."
                required
              />
            </label>
            <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-red-500">
              <Send size={17} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
