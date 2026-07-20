import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Ahmed Awad (NullC0d3). Cybersecurity Strategist with 20+ years of experience in Cyber Threat Intelligence, digital forensics, OSINT, and AI-powered digital identity attribution. CISSP certified.",
};
import { Download, Shield, BookOpen, Award, Briefcase, Globe, Code2 } from "lucide-react";

const experience = [
  { period: "2015 \u2013 Present", title: "Senior Cyber Threat Analyst", organization: "Government Entity (Confidential)", highlights: ["Security event monitoring using SIEM and advanced threat hunting operations", "Incident response coordination and escalation management", "Malware analysis and forensic reporting", "Threat intelligence extraction and IOC/IOA analysis", "Mentoring junior analysts and leading CIRT/SOC response efforts"] },
  { period: "2014 \u2013 2017", title: "Technical Instructor", organization: "Freelance / Professional Training", highlights: ["Delivered professional training in CCNA, CCNA Security, MCITP, OSINT, C#, and Python", "Developed hands-on labs and training materials for cybersecurity fundamentals"] },
  { period: "2012 \u2013 2015", title: "Cyber Threat Analyst", organization: "Government Entity (Confidential)", highlights: ["Detailed forensic analysis and reporting on packet captures, file systems, and logs", "Malware functionality analysis and indicator extraction", "DFIR and threat intelligence conduit operations", "Threat hunting and incident response leadership"] },
  { period: "2006 \u2013 2012", title: "Senior Security Engineer \u2013 MENA", organization: "VFS Global", highlights: ["Managed security infrastructure for 8 diplomatic missions across Europe", "Secret-level security clearance while supporting embassy operations", "Network management, IDS/IPS, SIEM, and security device administration", "Security operations and service management for government clients"] },
  { period: "2002 \u2013 2006", title: "IT Engineer", organization: "Etimad Private Limited", highlights: ["IT infrastructure consulting and technical team supervision", "Data network and VoIP infrastructure deployment", "IT department design for multiple organizations"] },
];

const professionalActivities = [
  { year: "2023", title: "Cybersecurity & ISO/IEC 27001 Advisory", organization: "Qatar National Cyber Security Agency" },
  { year: "2022", title: "Accredited Digital Investigator", organization: "Emirates Red Crescent Authority" },
  { year: "2020", title: "Speaker", organization: "Saudi Cybersecurity Hackathon" },
];

const certifications = ["ISC2 CISSP (Certified Information Systems Security Professional)", "Chief Information Security Officer (CISO)", "Penetration Testing and Ethical Hacking", "Security Blue Team Analyst", "Python for Security Professionals", "CCNA Security", "Security+", "Network+", "MCITP"];

const skills = ["Cyber Threat Intelligence", "Threat Hunting", "OSINT (VT, Shodan, Maltego, Censys, Splunk)", "SIEM, IDS/IPS, HIDS/HIPS, SOAR", "Malware Analysis", "Penetration Testing", "Digital Forensics", "Python, C#", "Security Risk Management", "Data Mining & Visualization"];

export default function CV() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 opacity-0 animate-fill-forwards animate-fade-in-up">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">Curriculum Vitae</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">CV</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
            </div>
            <button id="cv-print-btn" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium transition-colors shadow-lg shadow-primary-500/25">
              <Download size={16} /> Download PDF
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 mb-8 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 shrink-0">
                <Image src="/images/ahmedawadnullc0d3.jpg" alt="Ahmed Awad (NullC0d3)" width={80} height={80} className="object-cover w-full h-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ahmed Awad <span className="text-slate-500 dark:text-slate-400 font-normal">(NullC0d3)</span></h2>
                <p className="text-slate-600 dark:text-slate-400">Cybersecurity Strategist \u00b7 Threat Intelligence Researcher \u00b7 AI Attribution Specialist \u00b7 CISSP \u00b7 Author</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">English (C1) \u00b7 Arabic (Native)</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 mb-8 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary-500" /> Professional Summary</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Cybersecurity Strategist, Threat Intelligence Researcher, and AI Attribution Specialist with 20+ years of experience leading intelligence-driven cybersecurity operations across government and enterprise environments. Specialized in Cyber Threat Intelligence (CTI), advanced threat hunting, digital investigations, OSINT, malware analysis, and AI-powered digital identity attribution. Creator of the AnubisX Attribution Framework, a behavioral AI methodology for attributing anonymous digital identities. Author of multiple cybersecurity books and contributor to Cyber Defense Magazine.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><Shield className="w-5 h-5 text-primary-500" /> Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={`${exp.title}-${exp.period}`} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.2}s` }}>
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{exp.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-primary-600 dark:text-primary-400 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-primary-500 mt-1.5 shrink-0">\u2022</span><span>{h}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-primary-500" /> Certifications</h2>
              <ul className="space-y-2">{certifications.map((cert, i) => (<li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>{cert}</span></li>))}</ul>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Code2 className="w-5 h-5 text-primary-500" /> Skills</h2>
              <div className="flex flex-wrap gap-2">{skills.map((skill, i) => (<span key={i} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400">{skill}</span>))}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 mb-8 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-primary-500" /> Professional Activities</h2>
            <div className="space-y-4">{professionalActivities.map((act, i) => (<div key={i} className="flex items-start gap-4"><span className="text-xs font-mono text-primary-600 dark:text-primary-400 whitespace-nowrap mt-0.5">{act.year}</span><div><h3 className="font-semibold text-sm text-slate-900 dark:text-white">{act.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{act.organization}</p></div></div>))}</div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 opacity-0 animate-fill-forwards animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary-500" /> Key Achievements</h2>
            <ul className="space-y-2">
              <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>Supported multiple cybercrime and fraud investigations through advanced OSINT and digital intelligence collection</span></li>
              <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>Conducted threat actor tracking and attribution activities across Egypt and international jurisdictions</span></li>
              <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>Produced intelligence reports and threat assessments used by security leadership and operational teams</span></li>
              <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>Identified and analyzed malicious infrastructure, IOCs, and adversary tactics associated with active threat campaigns</span></li>
              <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"><span className="text-accent-500 mt-1.5 shrink-0">\u2022</span><span>Contributed to proactive threat hunting operations resulting in early detection of malicious activity</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
