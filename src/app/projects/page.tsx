"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, ArrowRight, ExternalLink, Github } from "lucide-react";
import { fadeInUp } from "@/lib/variants";

const projects = [
  {
    title: "AnubisX Framework",
    role: "Creator & Lead Researcher",
    description:
      "A formal framework for behavioral digital attribution. The framework comprises an axiomatic system of 16 axioms, Cognitive Centroid theory, a mathematical framework of 292 defined objects, 37 specified algorithms across five behavioral modalities, and a four-tier validation infrastructure with 31 pre-specified acceptance criteria.",
    status: "Active Research",
    links: {
      github: "https://github.com/AnubisXFramework/AnubisXFramework",
      website: "https://anubisxframework.github.io",
      doi: "https://zenodo.org/records/21393392",
    },
  },
];

export default function Projects() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Research Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Flagship research projects advancing the science of behavioral digital attribution and
              cybersecurity intelligence.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="group p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary-600 dark:bg-primary-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {project.role}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        Website
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        DOI
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="mt-12 text-center"
          >
            <Link
              href="/anubisx/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25"
            >
              Explore AnubisX Framework in Detail
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
