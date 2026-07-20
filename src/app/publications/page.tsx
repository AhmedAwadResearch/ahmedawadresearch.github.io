import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed articles, industry publications, and research contributions in cybersecurity and threat intelligence by Ahmed Awad (NullC0d3).",
};

const publications = [
  {
    id: 1,
    title: "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach",
    authors: "Awad, A.",
    year: 2026,
    journal: "Cyber Defense Magazine",
    type: "Industry Publication",
    abstract: "An exploration of threat actor psychology, decision-making processes, and cognitive patterns that security leaders must understand to anticipate and prevent sophisticated cyber attacks.",
    apa: 'Awad, A. (2026). Inside the mind of a threat actor: What CISOs must learn before the next breach. Cyber Defense Magazine.',
    mla: 'Awad, A. "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach." Cyber Defense Magazine, 2026.',
    chicago: 'Awad, A. "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach." Cyber Defense Magazine (2026).',
    bibtex: '@article{awad2026,\n  author = {Awad, A.},\n  title = {Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach},\n  journal = {Cyber Defense Magazine},\n  year = {2026}\n}',
  },
  {
    id: 2,
    title: "The Financialization of Cybercrime",
    authors: "Awad, A.",
    year: 2025,
    journal: "Cyber Defense Magazine",
    type: "Industry Publication",
    abstract: "An analysis of the evolving financial infrastructure supporting cybercrime operations, including ransomware-as-a-service, cyber insurance arbitrage, and cryptocurrency-based money laundering.",
    apa: 'Awad, A. (2025). The financialization of cybercrime. Cyber Defense Magazine.',
    mla: 'Awad, A. "The Financialization of Cybercrime." Cyber Defense Magazine, 2025.',
    chicago: 'Awad, A. "The Financialization of Cybercrime." Cyber Defense Magazine (2025).',
    bibtex: '@article{awad2025,\n  author = {Awad, A.},\n  title = {The Financialization of Cybercrime},\n  journal = {Cyber Defense Magazine},\n  year = {2025}\n}',
  },
];

export default function Publications() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">Publications</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Publications</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">Peer-reviewed articles, industry publications, and research contributions in cybersecurity and threat intelligence.</p>
          </div>

          <div className="mb-8 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input id="search-input" type="text" placeholder="Search publications..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
            </div>
          </div>

          <div className="mb-4 flex gap-2 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {["apa", "mla", "chicago", "bibtex"].map((fmt) => (
              <button key={fmt} className={`citation-fmt px-3 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${fmt === "apa" ? "bg-primary-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`} data-fmt={fmt}>
                {fmt}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {publications.map((pub, i) => (
              <div key={pub.id} className="pub-card p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.2}s` }} data-search={`${pub.title} ${pub.journal} ${pub.type}`.toLowerCase()}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">{pub.type}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{pub.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{pub.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{pub.authors}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pub.journal}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{pub.abstract}</p>

                    <button id={`copy-btn-${pub.id}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Copy Citation
                    </button>

                    {["apa", "mla", "chicago", "bibtex"].map((fmt) => (
                      <pre key={fmt} id={`citation-${pub.id}-${fmt}`} data-fmt={fmt} className={`citation-text mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-400 whitespace-pre-wrap ${fmt === "apa" ? "" : "hidden"}`}>
                        {pub[fmt as keyof typeof pub]}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
