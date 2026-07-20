import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ahmed Awad (NullC0d3) – Cybersecurity Researcher",
    template: "%s | Ahmed Awad (NullC0d3)",
  },
  description:
    "Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework for behavioral digital attribution.",
  keywords: [
    "Ahmed Awad",
    "NullC0d3",
    "Cybersecurity Researcher",
    "Threat Intelligence",
    "AnubisX Framework",
    "Behavioral Digital Attribution",
    "Cyber Threat Intelligence",
    "Digital Forensics",
    "OSINT",
  ],
  authors: [{ name: "Ahmed Awad (NullC0d3)" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ahmed Awad (NullC0d3)",
    url: "https://ahmedawadresearch.github.io",
    images: [
      {
        url: "https://ahmedawadresearch.github.io/images/ahmedawadnullc0d3.jpg",
        width: 800,
        height: 800,
        alt: "Ahmed Awad (NullC0d3) - Cybersecurity Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://ahmedawadresearch.github.io",
    types: {
      "application/rss+xml": "https://ahmedawadresearch.github.io/feed.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RH5CLFBQ7P"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RH5CLFBQ7P');`,
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TBHL394X');`,
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
try{var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s&&p))document.documentElement.classList.add('dark')}catch(e){}
document.addEventListener('DOMContentLoaded',function(){
function t(){document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')}
function m(){document.getElementById('mobile-menu').classList.toggle('hidden')}
var d=document.getElementById('theme-toggle-desktop');if(d)d.addEventListener('click',t);
var m2=document.getElementById('theme-toggle-mobile');if(m2)m2.addEventListener('click',t);
var m3=document.getElementById('menu-toggle');if(m3)m3.addEventListener('click',m);
var k=document.getElementById('search-input');if(k)k.addEventListener('input',function(){var q=this.value.toLowerCase();document.querySelectorAll('.pub-card').forEach(function(c){var t=c.getAttribute('data-search')||'';c.style.display=t.includes(q)?'':'none'})});
var f=document.querySelectorAll('.citation-fmt');f.forEach(function(b){b.addEventListener('click',function(){f.forEach(function(x){x.classList.remove('bg-primary-600','text-white');x.classList.add('bg-slate-100','dark:bg-slate-800','text-slate-600','dark:text-slate-400')});this.classList.remove('bg-slate-100','dark:bg-slate-800','text-slate-600','dark:text-slate-400');this.classList.add('bg-primary-600','text-white');var fmt=this.getAttribute('data-fmt');document.querySelectorAll('.citation-text').forEach(function(e){e.style.display=e.getAttribute('data-fmt')===fmt?'block':'none'})})});
document.querySelectorAll('[id^=copy-btn-]').forEach(function(b){b.addEventListener('click',function(){var id=this.id.replace('copy-btn-','');var v=document.querySelector('.citation-text:not(.hidden)');if(!v)v=document.querySelector('[id^=citation-'+id+']');if(!v)return;navigator.clipboard.writeText(v.textContent).then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy Citation'},2000)})})});
var p=document.getElementById('cv-print-btn');if(p)p.addEventListener('click',function(){window.print()});
})})();
`,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Ahmed Awad, NullC0d3, Cybersecurity Researcher, Threat Intelligence, AnubisX Framework, Behavioral Digital Attribution, Cyber Threat Intelligence, Digital Forensics, OSINT" />
        <meta name="author" content="Ahmed Awad (NullC0d3)" />
        <meta name="google-site-verification" content="ucf5telVeNvwOc8QpbVX1Kl9OWWVGgqZut8AIEP0pRA" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://ahmedawadresearch.github.io" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Ahmed Awad (NullC0d3) - Publications Feed" href="https://ahmedawadresearch.github.io/feed.xml" />
        <link rel="llms-txt" href="/llms.txt" />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://zenodo.org" />
        <link rel="dns-prefetch" href="https://www.amazon.com" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div dangerouslySetInnerHTML={{ __html: '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBHL394X" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->' }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-600 focus:text-white focus:font-medium focus:shadow-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
