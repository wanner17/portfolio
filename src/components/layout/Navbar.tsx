'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MENU_ITEMS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Personal', href: '#personal', id: 'personal' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    MENU_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight">
          <span className="text-slate-900 dark:text-white">SI</span>
          <span className="gradient-text">JEONG</span>
          <span className="text-slate-400 dark:text-slate-500 font-light">.DEV</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1">
            {MENU_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-950/50"
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-base"
          >
            {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
