// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="space-y-6">
        {/* 배지 스타일로 연차 강조 */}
        <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full">
          3년 차 Web Developer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight" style={{ color: 'var(--heading-color)' }}>
          <span className="block transition-colors">
            안정적인 시스템을 설계하는
          </span> 
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">Java 개발자 류시정</span>
          <span>입니다.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          eGovFrame 기반의 공공기관 고도화 및 신규 구축 프로젝트를 수행하며, 
          <span className="font-bold text-slate-800 dark:text-slate-200"> 10개 이상의 서비스</span>를 안정적으로 런칭하고 운영해 왔습니다. 
          문제 해결을 위한 집요함과 최신 기술에 대한 유연함을 겸비하고 있습니다.
        </p>

        <div className="flex gap-4 pt-4">
          <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform">
            프로젝트 보기
          </a>
          <a href="mailto:wanner17@naver.com" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}