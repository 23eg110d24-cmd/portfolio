"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="education" className="section bg-[var(--surface)]">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic path with strong fundamentals."
          description="A concise timeline of Harisha's Computer Science education and earlier academic milestones."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-red-500 via-[var(--border)] to-transparent sm:left-1/2" />
          <div className="grid gap-8">
            {education.map((item, index) => (
              <motion.article
                key={item.place}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-8 ${
                  index % 2 === 0 ? "" : "sm:[&>div]:col-start-2"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="ml-14 sm:ml-0">
                  <div className="glass rounded-3xl p-6">
                    <p className="text-sm font-semibold text-[var(--primary)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-black text-[var(--text)]">{item.place}</h3>
                    <p className="mt-2 text-[var(--muted)]">{item.program}</p>
                    <p className="mt-4 inline-flex rounded-full bg-red-500/10 px-3 py-1 text-sm font-bold text-[var(--primary)]">
                      {item.score}
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full bg-red-600 text-white shadow-glow sm:left-1/2 sm:-translate-x-1/2">
                  <GraduationCap size={20} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
