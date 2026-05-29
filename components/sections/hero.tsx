"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Mouse, Send } from "lucide-react";
import Image from "next/image";
import { socials } from "@/lib/data";

const titleWords = ["Computer Science Engineer", "Machine Learning Enthusiast", "Full Stack Developer"];
const socialLinks = [
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Github, href: socials.github, label: "GitHub" },
  { icon: Mail, href: socials.email, label: "Email" }
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <motion.div
        className="absolute left-[8%] top-28 h-56 w-56 rounded-full bg-red-500/20 blur-3xl"
        animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-[10%] h-72 w-72 rounded-full bg-rose-500/15 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-[var(--primary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Open to internships, ML projects, and full-stack roles
          </motion.p>
          <motion.h1
            className="max-w-4xl text-5xl font-black leading-[1.02] text-[var(--text)] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Harisha <span className="text-gradient">Gunti</span>
          </motion.h1>
          <motion.div
            className="mt-6 min-h-20 text-2xl font-semibold text-[var(--text)] sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                className="mr-2 inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.14 }}
              >
                {word}
                {index < titleWords.length - 1 ? " |" : ""}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 inline-block h-8 w-1 translate-y-1 rounded bg-red-500"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          <motion.p
            className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            I build thoughtful software across machine learning and full-stack engineering, with a
            strong foundation in programming, problem solving, and turning data into practical
            product experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-red-500" href="#projects">
              View Projects
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-red-500" href="/Harisha-Gunti-Resume.pdf" download>
              <Download size={17} /> Download Resume
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-red-500/40 px-5 py-3 text-sm font-bold text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-red-500 hover:text-white" href="#contact">
              <Send size={17} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[430px]"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-600/35 to-rose-400/10 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <Image
              src="/harisha-gunti.jpeg"
              alt="Harisha Gunti smiling on a rooftop"
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[40%_center]"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-black/55 p-4 text-white backdrop-blur-xl">
              <p className="text-sm text-white/75">Current focus</p>
              <p className="mt-1 font-semibold">Machine Learning + Production-ready web apps</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[var(--muted)] md:block"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Mouse size={24} />
        </motion.span>
      </a>
    </section>
  );
}
