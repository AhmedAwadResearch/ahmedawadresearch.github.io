"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, BookOpen, Brain, Target, Award, Globe } from "lucide-react";
import { fadeInUp } from "@/lib/variants";

const timeline = [
  {
    year: "2023",
    title: "Qatar National Cyber Security Agency",
    description: "Cybersecurity & ISO/IEC 27001 Advisory Engagement",
  },
  {
    year: "2022",
    title: "Emirates Red Crescent Authority",
    description: "Accredited Digital Investigator for cyber-enabled investigation",
  },
  {
    year: "2020",
    title: "Saudi Cybersecurity Hackathon",
    description: "Delivered cybersecurity sessions as invited speaker",
  },
  {
    year: "2015–Now",
    title: "Senior Cyber Threat Analyst",
    description: "Government Entity – Threat intelligence, incident response, and hunting operations",
  },
  {
    year: "2006–2012",
    title: "Senior Security Engineer MENA",
    description: "VFS Global – Managed security for 8 diplomatic missions",
  },
  {
    year: "2002–2006",
    title: "IT Engineer",
    description: "Etimad Private Limited – Network infrastructure and security consulting",
  },
];

const milestones = [
  { icon: BookOpen, label: "5 Published Books", description: "Cybersecurity and threat intelligence" },
  { icon: Award, label: "CISSP Certified", description: "ISC2 Certified Information Systems Security Professional" },
  { icon: Brain, label: "AnubisX Creator", description: "Behavioral digital attribution framework" },
  { icon: Shield, label: "20+ Years", description: "Cybersecurity and threat intelligence experience" },
  { icon: Globe, label: "International Work", description: "Egypt, Qatar, UAE, Saudi Arabia" },
  { icon: Target, label: "Open Science", description: "Research published under CC BY 4.0" },
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="lg:col-span-2"
            >
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
                <Image
                  src="/images/ahmedawadnullc0d3.jpg"
                  alt="Ahmed Awad (NullC0d3)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  <strong>Ahmed Awad</strong> is professionally known online as <strong>NullC0d3</strong>.
                  He is a Cybersecurity Strategist, Threat Intelligence Researcher, and AI Attribution Specialist
                  with over 20 years of experience leading intelligence-driven cybersecurity operations across
                  government and enterprise environments.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Specializing in Cyber Threat Intelligence (CTI), advanced threat hunting, digital investigations,
                  OSINT, malware analysis, and AI-powered digital identity attribution, he is the creator of the
                  <strong> AnubisX Attribution Framework</strong>, a behavioral AI methodology for attributing
                  anonymous digital identities.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  He is the author of multiple cybersecurity books exploring the human dimensions of digital security,
                  threat actor psychology, and the evolving landscape of cyber intelligence. His work bridges the gap
                  between technical cybersecurity operations and behavioral science, bringing a unique perspective
                  to digital identity attribution.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  A contributor to Cyber Defense Magazine, his research addresses threat actor attribution,
                  the financialization of cybercrime, and the application of artificial intelligence to
                  cybersecurity challenges. He holds the CISSP certification and has served in advisory
                  capacities for national cyber security agencies and international organizations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Milestones
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Career Timeline
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="text-sm font-mono text-primary-600 dark:text-primary-400">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-2 border-white dark:border-slate-900 transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Research Philosophy
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-500" />
                Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To advance the science of behavioral digital attribution through rigorous formal methodology,
                open-source research, and transparent validation, bridging the gap between cybersecurity
                operations and behavioral science.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent-500" />
                Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A world where digital identity attribution is scientifically rigorous, transparently validated,
                and accessible to the global cybersecurity community through open science and collaborative research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
