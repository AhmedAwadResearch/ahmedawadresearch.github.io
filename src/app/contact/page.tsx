import type { Metadata } from "next";
import { Linkedin, ExternalLink, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ahmed Awad (NullC0d3) for professional inquiries, research collaborations, speaking engagements, and academic discussions.",
};

export default function Contact() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fill-forwards animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Professional inquiries, research collaborations, speaking engagements, and academic discussions are welcome via LinkedIn.
            </p>
          </div>

          <div className="max-w-lg mx-auto opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <a href="https://www.linkedin.com/in/nullc0d3" target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-xl text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#0A66C2] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Connect on LinkedIn</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Professional inquiries, research collaborations, speaking engagements, and academic discussions are welcome via LinkedIn.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-medium transition-colors">
                <Linkedin size={18} /> Visit LinkedIn Profile <ExternalLink size={16} />
              </span>
            </a>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-6 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
              <MessageSquare className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Research Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Interested in behavioral attribution research? Reach out via LinkedIn to discuss potential collaborations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
              <ExternalLink className="w-8 h-8 text-accent-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Speaking &amp; Events</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Available for cybersecurity conferences, academic seminars, and industry speaking engagements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
