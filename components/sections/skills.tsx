"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Practical tools for data, APIs, and interfaces."
          description="Animated proficiency indicators show current strengths while keeping the skill system scannable for recruiters."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              className="glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: groupIndex * 0.06 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/10 text-[var(--primary)]">
                  <group.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)]">{group.title}</h3>
              </div>
              <div className="grid gap-4">
                {group.skills.map(([skill, level]) => (
                  <div key={skill}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="font-semibold text-[var(--text)]">{skill}</span>
                      <span className="text-[var(--muted)]">{level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
