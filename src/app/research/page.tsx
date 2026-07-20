import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas of Ahmed Awad (NullC0d3): Behavioral Digital Attribution, Cyber Threat Intelligence, Digital Forensics, OSINT, Artificial Intelligence, and the AnubisX Framework.",
};
import { Brain, Shield, Eye, Fingerprint, Search, FileText, Activity, ArrowRight } from "lucide-react";

const researchAreas = [
  { icon: Brain, title: "Behavioral Digital Attribution", description: "Formal methodology for attributing digital artifacts to human sources through behavioral analysis. The AnubisX Framework provides an axiomatic foundation, mathematical framework, and multi-modal algorithmic catalog for behavioral attribution.", status: "Active Research" },
  { icon: Shield, title: "Cyber Threat Intelligence", description: "Advanced threat actor profiling, campaign attribution, and intelligence-driven operations. Over 20 years of experience in CTI across government and enterprise environments.", status: "Active" },
  { icon: Fingerprint, title: "Digital Identity & Behavioral Biometrics", description: "Cognitive Centroid theory \u2014 a formal model of behavioral identity as an asymptotic attractor in feature space. Multi-modal behavioral fingerprinting across stylometric, temporal, terminal, network, and media modalities.", status: "Active Research" },
  { icon: Eye, title: "Identity Intelligence (IdINT)", description: "Systematic identity resolution across disparate data sources and platforms. Cross-platform behavioral fingerprinting linking accounts based on behavioral rather than technical signatures.", status: "Active Research" },
  { icon: Search, title: "OSINT & Digital Forensics", description: "Advanced open-source intelligence collection, digital footprint analysis, identity correlation, and infrastructure mapping for investigative support.", status: "Active" },
  { icon: Activity, title: "AI for Cybersecurity", description: "Application of artificial intelligence and machine learning to threat attribution, behavioral analysis, and automated threat intelligence.", status: "Active" },
];

export default function Research() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Research
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Research
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              My research advances the science of behavioral digital attribution \u2014 developing formal
              methodologies, mathematical frameworks, and open-source implementations for attributing
              anonymous digital identities through behavioral analysis.
            </p>
          </div>

          <div className="space-y-6">
            {researchAreas.map((area, i) => (
              <div key={area.title} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <area.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {area.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
                        {area.status}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Research Roadmap
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-3 text-sm uppercase tracking-wider">
                Current Work
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">\u2022</span><span>AnubisX Framework validation infrastructure</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">\u2022</span><span>Cross-platform behavioral fingerprinting</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">\u2022</span><span>Multi-modal fusion algorithms</span></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold text-accent-600 dark:text-accent-400 mb-3 text-sm uppercase tracking-wider">
                Near-Term Goals
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">\u2022</span><span>Ground-truth labeled dataset acquisition</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">\u2022</span><span>Formal experiment execution (38 experiments)</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">\u2022</span><span>Confidence calibration (ALG-023)</span></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold text-slate-600 dark:text-slate-400 mb-3 text-sm uppercase tracking-wider">
                Long-Term Vision
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-1">\u2022</span><span>Multi-platform behavioral attribution</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-1">\u2022</span><span>Real-time attribution systems</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-1">\u2022</span><span>Industry-standard forensic tool integration</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-fill-forwards animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Explore the AnubisX Framework
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            A formal framework for behavioral digital attribution with 16 axioms, 292 mathematical objects,
            and 37 algorithms across 5 behavioral modalities.
          </p>
          <Link href="/anubisx/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25">
            View Framework
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
