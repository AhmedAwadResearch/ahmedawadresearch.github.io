"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ahmed Awad (NullC0d3) – Cybersecurity Researcher</title>
        <meta
          name="description"
          content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework for behavioral digital attribution."
        />
        <meta
          name="keywords"
          content="Ahmed Awad, NullC0d3, Cybersecurity Researcher, Threat Intelligence, AnubisX Framework, Behavioral Digital Attribution, Cyber Threat Intelligence, Digital Forensics, OSINT"
        />
        <meta name="author" content="Ahmed Awad (NullC0d3)" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahmedawad.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://ahmedawad.github.io" />
        <meta property="og:site_name" content="Ahmed Awad (NullC0d3)" />
        <meta property="og:title" content="Ahmed Awad (NullC0d3) – Cybersecurity Researcher" />
        <meta
          property="og:description"
          content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework."
        />
        <meta property="og:image" content="https://ahmedawad.github.io/images/ahmedawadnullc0d3.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Awad (NullC0d3) – Cybersecurity Researcher" />
        <meta
          name="twitter:description"
          content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework."
        />
        <meta name="twitter:image" content="https://ahmedawad.github.io/images/ahmedawadnullc0d3.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header dark={dark} toggleTheme={toggleTheme} mounted={mounted} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
