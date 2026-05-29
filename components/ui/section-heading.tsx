"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
    </motion.div>
  );
}
