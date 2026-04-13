'use client';

import { motion } from 'framer-motion';

const STATS = [
  { label: '누적 프로젝트', value: '10+' },
  { label: '경력', value: '3년' },
  { label: '취급 DB', value: '4종' },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* 배경 오브 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
      />

      <div className="relative z-10 space-y-10">
        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-200 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Available for opportunities · 3년 차 Web Developer
          </span>
        </motion.div>

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]"
        >
          <span className="text-slate-900 dark:text-white">안정적인 시스템을</span>
          <br />
          <span className="text-slate-900 dark:text-white">설계하는 </span>
          <span className="gradient-text">Java 개발자</span>
          <br />
          <span className="text-slate-900 dark:text-white">류시정</span>
          <span className="text-slate-400 dark:text-slate-500">입니다.</span>
        </motion.h1>

        {/* 설명 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          eGovFrame 기반 공공기관 프로젝트부터 화상회의 인프라 구축까지.
          <br className="hidden md:block" />
          백엔드 전문성을 바탕으로 풀스택 역량을 확장 중입니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            프로젝트 보기
          </button>
          <a
            href="mailto:wanner17@naver.com"
            className="px-8 py-3.5 rounded-2xl font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* 스탯 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-8 pt-4 border-t border-slate-100 dark:border-slate-800"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
