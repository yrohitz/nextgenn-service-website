import React, { useState, useEffect } from 'react';
import { Phone, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-900 shadow-md py-3'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">
            NEXTGENN <span className="text-primary">TECHNOLOGIES</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="tel:9491873010"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm"
          >
            <Phone size={18} />
            <span>Call Us: 9491873010</span>
          </a>

          <a
            href="tel:9491873010"
            className="md:hidden flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-sm"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
