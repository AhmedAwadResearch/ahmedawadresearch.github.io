"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Copy, Check, Search, ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/variants";

const publications = [
  {
    id: 1,
    title: "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach",
    authors: "Awad, A.",
    year: 2026,
    journal: "Cyber Defense Magazine",
    type: "Industry Publication",
    url: "#",
    abstract:
      "An exploration of threat actor psychology, decision-making processes, and cognitive patterns that security leaders must understand to anticipate and prevent sophisticated cyber attacks.",
  },
  {
    id: 2,
    title: "The Financialization of Cybercrime",
    authors: "Awad, A.",
    year: 2025,
    journal: "Cyber Defense Magazine",
    type: "Industry Publication",
    url: "#",
    abstract:
      "An analysis of the evolving financial infrastructure supporting cybercrime operations, including ransomware-as-a-service, cyber insurance arbitrage, and cryptocurrency-based money laundering.",
  },
];

type CitationFormat = "apa" | "mla" | "chicago" | "bibtex";

function formatCitation(pub: typeof publications[0], format: CitationFormat): string {
  switch (format) {
    case "apa":
      return `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}.`;
    case "mla":
      return `${pub.authors} "${pub.title}." ${pub.journal}, ${pub.year}.`;
    case "chicago":
      return `${pub.authors} "${pub.title}" ${pub.journal} (${pub.year}).`;
    case "bibtex":
      return `@article{awad${pub.year},
  author = {${pub.authors}},
  title = {${pub.title}},
  journal = {${pub.journal}},
  year = {${pub.year}}
}`;
  }
}

export default function Publications() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [citationFormat, setCitationFormat] = useState<CitationFormat>("apa");

  const filtered = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.journal.toLowerCase().includes(search.toLowerCase()) ||
      pub.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (pub: typeof publications[0]) => {
    const text = formatCitation(pub, citationFormat);
    navigator.clipboard.writeText(text);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Publications
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Publications
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Peer-reviewed articles, industry publications, and research contributions in cybersecurity
              and threat intelligence.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>
            <div className="flex gap-2">
              {(["apa", "mla", "chicago", "bibtex"] as CitationFormat[]).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
                    citationFormat === fmt
                      ? "bg-primary-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filtered.map((pub, i) => (
              <motion.div
                key={pub.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                        {pub.type}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{pub.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{pub.authors}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pub.journal}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {pub.abstract}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopy(pub)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {copiedId === pub.id ? (
                          <>
                            <Check size={14} className="text-accent-500" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy Citation
                          </>
                        )}
                      </button>
                    </div>

                    <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                      <pre className="text-xs font-mono text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                        {formatCitation(pub, citationFormat)}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                No publications match your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
