"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning across AI, data, networking, and automation."
          description="Credential cards highlight the breadth of Harisha's training and the issuers behind each certificate."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map(([name, issuer, badge], index) => (
            <motion.article
              key={name}
              className="glass rounded-3xl p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/10 text-[var(--primary)]">
                  <Award size={22} />
                </div>
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-black text-white">
                  {badge}
                </span>
              </div>
              <h3 className="min-h-16 text-base font-bold leading-6 text-[var(--text)]">{name}</h3>
              <p className="mt-3 text-sm font-medium text-[var(--muted)]">{issuer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
