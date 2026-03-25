'use client';

import { useTheme } from 'next-themes'; // 추가
import { useEffect, useState } from 'react'; // 추가
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme(); // 테마 상태 가져오기
  const [mounted, setMounted] = useState(false); // 하이드레이션 에러 방지

  // 마운트된 후에만 렌더링
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  if (!mounted) return null; // 하이드레이션 전에는 아무것도 렌더링하지 않음

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">
          SIJEONG <span className="text-indigo-600">.DEV</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* 테마 토글 버튼 */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a 
            href="/resume_20260325.pdf" 
            target="_blank"
            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}