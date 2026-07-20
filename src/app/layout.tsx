import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <title>Ahmed Awad (NullC0d3) – Cybersecurity Researcher</title>
        <meta name="description" content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework for behavioral digital attribution." />
        <meta name="keywords" content="Ahmed Awad, NullC0d3, Cybersecurity Researcher, Threat Intelligence, AnubisX Framework, Behavioral Digital Attribution, Cyber Threat Intelligence, Digital Forensics, OSINT" />
        <meta name="author" content="Ahmed Awad (NullC0d3)" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahmedawadresearch.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://ahmedawadresearch.github.io" />
        <meta property="og:site_name" content="Ahmed Awad (NullC0d3)" />
        <meta property="og:title" content="Ahmed Awad (NullC0d3) – Cybersecurity Researcher" />
        <meta property="og:description" content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework." />
        <meta property="og:image" content="https://ahmedawadresearch.github.io/images/ahmedawadnullc0d3.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Awad (NullC0d3) – Cybersecurity Researcher" />
        <meta name="twitter:description" content="Official academic website of Ahmed Awad (NullC0d3). Cybersecurity Researcher, Threat Intelligence Analyst, and creator of the AnubisX Framework." />
        <meta name="twitter:image" content="https://ahmedawadresearch.github.io/images/ahmedawadnullc0d3.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
