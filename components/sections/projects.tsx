"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const filters = ["All", "Machine Learning", "Full Stack"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section bg-[var(--surface)]">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio projects with real placement value."
          description="A focused set of machine learning and full-stack builds that demonstrate analysis, modeling, secure APIs, deployment, and product thinking."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`focus-ring rounded-full px-5 py-2 text-sm font-bold transition ${
                filter === item
                  ? "bg-red-600 text-white shadow-glow"
                  : "border border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] shadow-xl shadow-black/5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className={`relative grid aspect-[16/10] place-items-center bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%)]" />
                <project.icon className="relative text-white drop-shadow-lg" size={54} />
                <span className="absolute left-4 top-4 rounded-full bg-white/18 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 min-h-28 leading-7 text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  {project.githubUrl ? (
                    <a className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--text)] px-4 py-3 text-sm font-bold text-[var(--background)] transition hover:bg-red-600 hover:text-white" href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  ) : null}
                  <a className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-bold text-[var(--text)] transition hover:border-red-500 hover:text-red-500" href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
