"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "AnubisX", href: "/anubisx/" },
  { label: "Publications", href: "/publications/" },
  { label: "Books", href: "/books/" },
  { label: "Articles", href: "/articles/" },
  { label: "Open Source", href: "/open-source/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header({
  dark,
  toggleTheme,
  mounted,
}: {
  dark: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-sm lg:text-base text-slate-900 dark:text-white">
                Ahmed Awad
              </span>
              <span className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 ml-1.5">
                (NullC0d3)
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
