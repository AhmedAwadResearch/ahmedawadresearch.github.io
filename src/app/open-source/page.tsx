import { Github, ExternalLink, Code2, BookOpen } from "lucide-react";

const repos = [
  { name: "AnubisX Framework", description: "A formal framework for behavioral digital attribution. Axiomatic system, mathematical framework, algorithmic catalog, and validation infrastructure.", url: "https://github.com/AnubisXFramework/AnubisXFramework", language: "Documentation", license: "CC BY 4.0" },
  { name: "Anubis Twitter v2.5", description: "Prototype implementation of the AnubisX Framework's stylometric modality for Arabic Twitter data. 47 Python source files (~2,800 LOC).", url: "https://github.com/nullc0d30/AnubisXFramework", language: "Python", license: "MIT" },
];

export default function OpenSource() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Open Source
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Open Source</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              All research, frameworks, and tools are developed under open-source principles, enabling independent validation, replication, and community contribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, i) => (
              <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{repo.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5"><Code2 size={14} />{repo.language}</span>
                  <span className="flex items-center gap-1.5"><BookOpen size={14} />{repo.license}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="https://github.com/nullc0d30" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
              <Github size={18} /> View GitHub Profile <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-fill-forwards animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Open Science Philosophy</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            All components of the AnubisX Framework \u2014 axioms, mathematical objects, algorithms,
            validation criteria, and limitation documentation \u2014 are publicly available. The framework
            explicitly documents all limitations, failure modes, and validation status, establishing
            a new standard of transparency in behavioral attribution research. Independent researchers
            are encouraged to validate, replicate, and build upon this work.
          </p>
        </div>
      </section>
    </div>
  );
}
