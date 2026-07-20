"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/variants";

const books = [
  {
    title: "You Can Hide Your Name... Not Your Mind",
    subtitle: "How Artificial Intelligence Reveals the Human Behind Digital Identities",
    url: "https://www.amazon.com/dp/B0H8LCTTWW",
    description:
      "Explores how artificial intelligence and behavioral analysis can unmask anonymous digital identities, revealing the unique cognitive patterns that make each individual identifiable online.",
  },
  {
    title: "Inside the Hacker Hunter's Mind",
    url: "https://www.amazon.com/gp/product/B0FF1X2WS4",
    description:
      "A deep dive into the psychological and methodological approaches of those who track and apprehend cybercriminals, exploring the cat-and-mouse dynamics of digital pursuit.",
  },
  {
    title: "Inside the Hacker Hunter's Toolkit",
    url: "https://www.amazon.com/gp/product/B0FFSWB2XS",
    description:
      "Comprehensive guide to the tools, techniques, and technologies used by cybersecurity professionals in the ongoing battle against cyber threats.",
  },
  {
    title: "Inside the Hacker Hunter's Domain Cyber Intelligence",
    url: "https://www.amazon.com/gp/product/B0FXGTRCQT",
    description:
      "Examines the domain of cyber intelligence operations, from threat detection to attribution, providing insights into the intelligence-driven approach to cybersecurity.",
  },
  {
    title: "Inside the Hacker Hunter's AI Identity War",
    url: "https://www.amazon.com/gp/product/B0GF23FBCN",
    description:
      "Investigates the emerging battlefield where artificial intelligence is used both to conceal and reveal digital identities, and the implications for the future of cybersecurity.",
  },
];

export default function Books() {
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
              Books
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Published Books
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Author of five books exploring cybersecurity, threat intelligence, and the human dimensions
              of digital security. Each work bridges the gap between technical cybersecurity operations
              and behavioral science.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, i) => (
              <motion.a
                key={book.title}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 italic">
                    {book.subtitle}
                  </p>
                )}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {book.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
                  View on Amazon
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
