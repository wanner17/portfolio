// src/components/layout/Navbar.tsx (수정된 전체본)
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // 🚀 z-index를 최대로 높이고, !important 급의 명시적 위치 지정
      className="fixed top-0 left-0 right-0 w-full z-[9999] bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-all shadow-sm"
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }} // 인라인으로 한 번 더 강조
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-slate-900 dark:text-white">
          SIJEONG <span className="text-indigo-600">.DEV</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* 모바일에서는 메뉴 글자 숨기기 (공간 확보) */}
          <div className="hidden sm:flex items-center gap-6">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-2xl"
          >
            {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}