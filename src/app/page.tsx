import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ahmed Awad (NullC0d3) – Cybersecurity Researcher",
  description:
    "Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework for behavioral digital attribution.",
  openGraph: {
    title: "Ahmed Awad (NullC0d3) – Cybersecurity Researcher",
    description:
      "Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework.",
  },
};
import Image from "next/image";
import { ArrowRight, BookOpen, Code2, FileText, Shield, Brain, Eye, Search, Fingerprint } from "lucide-react";

const researchInterests = [
  { icon: Brain, label: "Behavioral Digital Attribution" },
  { icon: Shield, label: "Cyber Threat Intelligence" },
  { icon: Eye, label: "Digital Identity" },
  { icon: Fingerprint, label: "Behavioral Biometrics" },
  { icon: Search, label: "OSINT" },
  { icon: FileText, label: "Digital Forensics" },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5", label: "Published Books" },
  { value: "2", label: "Journal Publications" },
  { value: "1", label: "Research Framework" },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-600 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 dark:bg-accent-600 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "-3s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6">
                  Cybersecurity Researcher &amp; Threat Intelligence Analyst
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Ahmed Awad
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-500 dark:text-slate-400 mt-2">
                  (NullC0d3)
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Advancing the science of behavioral digital attribution. Creator of the{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  AnubisX Framework
                </span>
                , a formal methodology for attributing anonymous digital identities through behavioral analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25"
                >
                  About Me
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/anubisx/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  AnubisX Framework
                  <Code2 size={18} />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 animate-pulse-slow opacity-20 blur-2xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image
                    src="/images/ahmedawadnullc0d3.jpg"
                    alt="Ahmed Awad (NullC0d3)"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Research Interests
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Advancing the intersection of behavioral science, artificial intelligence, and cybersecurity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, i) => (
              <div
                key={interest.label}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg opacity-0 animate-fill-forwards animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <interest.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {interest.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore my latest research, publications, and open-source projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Link
                href="/anubisx/"
                className="block h-full p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all group"
              >
                <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  AnubisX Framework
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A formal framework for behavioral digital attribution. 16 axioms, 292 mathematical objects, 37 algorithms across 5 behavioral modalities.
                </p>
              </Link>
            </div>
            <div className="opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/publications/"
                className="block h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group"
              >
                <FileText className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-4" />
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Recent Publications
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Peer-reviewed articles in Cyber Defense Magazine on threat actor psychology and the financialization of cybercrime.
                </p>
              </Link>
            </div>
            <div className="opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/books/"
                className="block h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group"
              >
                <BookOpen className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-4" />
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Published Books
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Five books exploring cybersecurity, threat intelligence, and the human dimensions of digital security.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-fill-forwards animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Open Science Commitment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            All research, frameworks, and tools are developed under open-source principles.
            The AnubisX Framework is publicly available for independent validation, replication,
            and community contribution.
          </p>
          <Link
            href="/open-source/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25"
          >
            Explore Open Source
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-fill-forwards animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Professional inquiries, research collaborations, speaking engagements, and academic discussions are welcome.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Contact via LinkedIn
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
