// src/components/sections/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden transition-colors">
      {/* 배경 장식 요소가 있다면 여기에 배치 (z-0) */}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        {/* 1. 뱃지 */}
        <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full transition-all">
          3년 차 Web Developer
        </div>
        
        {/* 2. 타이틀 */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.15]">
          <span className="text-slate-900 dark:text-white transition-colors duration-300">
            안정적인 시스템을 설계하는
          </span> 
          <br />
          <span className="text-indigo-600 dark:text-indigo-400 mt-2 block md:inline">Java 개발자 류시정</span>입니다.
        </h1>

        {/* 3. 본문 */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
          eGovFrame 기반의 공공기관 고도화 및 신규 구축 프로젝트를 수행하며, <br className="hidden md:block" />
          <span className="font-bold text-slate-900 dark:text-slate-100"> 10개 이상의 서비스</span>를 안정적으로 런칭해 왔습니다. 문제 해결을 위한 집요함과 최신 기술에 대한 유연함을 겸비하고 있습니다.
        </p>

        {/* 4. 버튼 영역 (z-20으로 클릭 우선순위 확보) */}
        <div className="flex flex-wrap gap-6 pt-6 relative z-20">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            프로젝트 보기
          </button>
          <a 
            href="mailto:wanner17@naver.com"
            className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer inline-block text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}