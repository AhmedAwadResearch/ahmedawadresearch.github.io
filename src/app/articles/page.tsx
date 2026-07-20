import { Newspaper, ExternalLink, Calendar } from "lucide-react";

const articles = [
  { title: "Inside the Mind of a Threat Actor: What CISOs Must Learn Before the Next Breach", publication: "Cyber Defense Magazine", year: 2026, url: "#", description: "An analysis of threat actor psychology and decision-making patterns, providing CISOs with insights to anticipate and prepare for sophisticated cyber attacks." },
  { title: "The Financialization of Cybercrime", publication: "Cyber Defense Magazine", year: 2025, url: "#", description: "Examining the evolving financial ecosystem supporting cybercrime, from ransomware-as-a-service to cryptocurrency-based money laundering operations." },
  { title: "How Blockchain Could Disrupt Industries", publication: "Blocktelegraph.io", year: 2023, url: "https://blocktelegraph.io/how-blockchain-could-disrupt-industries/", description: "An exploration of blockchain technology's potential to transform traditional industries through decentralized trust models and smart contract automation." },
];

export default function Articles() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Articles
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Articles</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Industry articles, security analyses, and thought leadership pieces published in cybersecurity magazines and technology platforms.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article, i) => (
              <a key={`${article.title}-${article.year}`} href={article.url} target="_blank" rel="noopener noreferrer" className="block p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg group opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <Newspaper className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Calendar size={14} /> {article.year}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{article.publication}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{article.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{article.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 mt-3">
                      Read Article <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
