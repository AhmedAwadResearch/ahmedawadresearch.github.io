import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";

const researchLinks = [
  { label: "ORCID", href: "https://orcid.org/0009-0005-0654-3393" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Ahmed-Awad-118" },
  { label: "OSF", href: "https://osf.io/37bhn/" },
  { label: "Zenodo", href: "https://zenodo.org/records/21393392" },
  { label: "Figshare", href: "https://figshare.com/authors/Ahmed_Awad/24415733" },
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Publications", href: "/publications/" },
  { label: "Books", href: "/books/" },
  { label: "Contact", href: "/contact/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <Image src="/favico.png" alt="Ahmed Awad (NullC0d3)" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Ahmed Awad</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">(NullC0d3)</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Cybersecurity Researcher · Threat Intelligence Analyst · Author · Creator of the AnubisX Framework
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nullc0d30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nullc0d3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://orcid.org/0009-0005-0654-3393"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                aria-label="ORCID"
              >
                <BookOpen size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4" id="footer-nav-heading">
              Navigation
            </h3>
            <nav aria-labelledby="footer-nav-heading">
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4" id="footer-research-heading">
              Research Profiles
            </h3>
            <nav aria-labelledby="footer-research-heading">
            <ul className="space-y-2.5">
              {researchLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4" id="footer-anubisx-heading">
              AnubisX Framework
            </h3>
            <nav aria-labelledby="footer-anubisx-heading">
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/AnubisXFramework/anubisxframework.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  GitHub Repository
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AnubisXFramework/anubisxframework.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Official Website
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://zenodo.org/records/21393392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  DOI: 10.5281/zenodo.21393392
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
            </nav>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-500">
              &copy; {new Date().getFullYear()} Ahmed Awad (NullC0d3). All rights reserved.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Content licensed under CC BY 4.0 unless otherwise noted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
