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
          className="mt-8 grid gap-6 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 md:grid-cols-[0.8fr_1.2fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Profile snapshot
            </p>
            <h3 className="mt-3 text-3xl font-black text-[var(--text)]">CGPA 7.57</h3>
            <p className="mt-3 text-[var(--muted)]">B.Tech Computer Science at Anurag University</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Machine Learning", "Full Stack Development", "Artificial Intelligence", "Problem Solving"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 font-semibold text-[var(--text)]"
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
