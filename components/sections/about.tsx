"use client";

import { motion } from "framer-motion";
import { aboutCards } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section bg-[var(--surface)]">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A CS student building with curiosity and discipline."
          description="Harisha combines classroom fundamentals with hands-on projects in machine learning, AI, and full-stack product development."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-[var(--primary)]">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">{card.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{card.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-6 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 md:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Academics
              </p>
              <h3 className="mt-2 text-3xl font-black text-[var(--text)]">CGPA 7.57</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">B.Tech CSE at Anurag University</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Achievement
              </p>
              <h3 className="mt-2 text-3xl font-black text-[var(--text)]">Rank 4730</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Global Rank in TCS CodeVita S13</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Machine Learning", "Full Stack Development", "Artificial Intelligence", "Problem Solving"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-center text-sm font-semibold text-[var(--text)]"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
