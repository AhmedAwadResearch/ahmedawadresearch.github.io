import { Code2, ExternalLink, Github, BookOpen, Brain, FileText, Shield, Layers, GitBranch, Award } from "lucide-react";

const highlights = [
  { icon: Brain, title: "16 Formal Axioms", description: "Six groups of logically necessary axioms governing uncertainty, behavior, identity, attribution, evidence, and reasoning." },
  { icon: Layers, title: "292 Mathematical Objects", description: "24 categories including 10 formal spaces, 9 distance functions, 7 similarity functions, and a likelihood ratio evidence model." },
  { icon: GitBranch, title: "37 Algorithms", description: "Across 9 domains spanning 5 behavioral modalities: stylometric, chrono-profiling, terminal profiling, network analysis, and media forensics." },
  { icon: Shield, title: "4-Tier Validation", description: "31 pre-specified acceptance criteria across unit, component, system, and operational validation tiers with a priori thresholds." },
  { icon: Award, title: "Open Source", description: "Released under CC BY 4.0 with MIT-licensed prototype implementation. DOI: 10.5281/zenodo.21393392." },
  { icon: BookOpen, title: "Cognitive Centroid Theory", description: "A formal model of behavioral identity as an asymptotic attractor in feature space, with four hypothesized formal properties." },
];

const architectureLayers = [
  { num: 1, name: "Data Ingestion", status: "Implemented", desc: "Data acquisition through platform-specific adapters" },
  { num: 2, name: "Feature Extraction", status: "Implemented", desc: "Modality-specific feature computation with normalization" },
  { num: 3, name: "Profile Construction", status: "Implemented", desc: "Fingerprint generation with quality assessment" },
  { num: 4, name: "Comparison", status: "Implemented", desc: "Similarity computation using configured metrics" },
  { num: 5, name: "Evidence Evaluation", status: "Proposed", desc: "Score calibration and likelihood ratio computation" },
  { num: 6, name: "Decision", status: "Proposed", desc: "Threshold-based classification with confidence quantification" },
];

const modalities = [
  { name: "Stylometric", status: "Prototype Validated", description: "Linguistic style analysis, authorship attribution, writeprints", algorithms: "ALG-001 to ALG-004" },
  { name: "Chrono-Profiling", status: "Specified", description: "Temporal behavior patterns, activity rhythms, posting schedules", algorithms: "ALG-005 to ALG-008" },
  { name: "Terminal Profiling", status: "Specified", description: "Command-line patterns, shell behavior, tool usage signatures", algorithms: "ALG-009 to ALG-012" },
  { name: "Network Analysis", status: "Specified", description: "Social graph analysis, interaction patterns, community detection", algorithms: "ALG-013 to ALG-016" },
  { name: "Media Forensics", status: "Specified", description: "Image metadata, editing artifacts, content analysis", algorithms: "ALG-017 to ALG-020" },
];

export default function AnubisX() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Flagship Research
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              AnubisX Framework
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              A Formal Framework for Behavioral Digital Attribution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/AnubisXFramework/AnubisXFramework" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                <Github size={18} /> GitHub Repository <ExternalLink size={16} />
              </a>
              <a href="https://anubisxframework.github.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25">
                Official Website <ExternalLink size={16} />
              </a>
              <a href="https://zenodo.org/records/21393392" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                DOI: 10.5281/zenodo.21393392 <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Scientific Motivation</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
              Digital attribution \u2014 determining the human source of digital actions \u2014 is a foundational requirement
              across cybersecurity, digital forensics, and counter-fraud. Current methods rely on technical identifiers
              (IP addresses, device fingerprints) that sophisticated adversaries can spoof or eliminate. The AnubisX
              Framework addresses this gap by shifting the analytical focus from transient technical identifiers to
              persistent human behavioral patterns.
            </p>
          </div>
          <div className="mb-12 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Research Vision</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
              The framework provides: (a) an axiomatic system of 16 axioms governing attribution reasoning;
              (b) Cognitive Centroid theory \u2014 a formal model of behavioral identity as an asymptotic attractor
              in feature space; (c) a mathematical framework of 292 defined objects including a likelihood ratio
              evidence model; (d) 37 specified algorithms spanning five behavioral modalities; and (e) a four-tier
              validation infrastructure with 31 pre-specified acceptance criteria with thresholds defined a priori.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Six-Layer Architecture</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">The framework implements a six-layer architecture with a six-stage pipeline supporting identification, verification, and forensic comparison workflows.</p>
          </div>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {architectureLayers.map((layer, i) => (
              <div key={layer.num} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold text-sm shrink-0">
                  {layer.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{layer.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${layer.status === "Implemented" ? "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                      {layer.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Behavioral Modalities</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">Five behavioral modalities span the framework, each with specified algorithms and implementation status.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((mod, i) => (
              <div key={mod.name} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{mod.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${mod.status === "Prototype Validated" ? "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                    {mod.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{mod.description}</p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-500">{mod.algorithms}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-fill-forwards animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Open Science Commitment</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            The AnubisX Framework is developed under full open science principles. All components \u2014 axioms,
            mathematical objects, algorithms, validation criteria, and limitation documentation \u2014 are publicly
            available for independent validation, replication, and community contribution. The framework explicitly
            documents all limitations, failure modes, and validation status, establishing a new standard of
            transparency in behavioral attribution research.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Version 3.0.0 \u2014 Scientific Re-Architecture \u00b7 July 2026 \u00b7 License: CC BY 4.0
          </p>
        </div>
      </section>
    </div>
  );
}
