"use client";

import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useState } from "react";
import { contactMethods } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/xjgzzvpv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

          {status === "success" ? (
            <motion.div
              className="glass grid gap-4 rounded-3xl p-6 place-content-center text-center min-h-[350px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500/10 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <Check size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mt-3">Message sent!</h3>
              <p className="text-sm text-[var(--muted)] max-w-sm leading-6">
                Thank you for reaching out. Harisha will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="focus-ring mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-bold text-[var(--text)] transition hover:border-red-500"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="glass grid gap-4 rounded-3xl p-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
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
              {status === "error" && (
                <p className="text-sm font-semibold text-red-500">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={17} /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
