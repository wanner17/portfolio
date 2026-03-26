// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    /* 1. 최상위 section에 배경색(bg-white / dark:bg-slate-950)을 반드시 명시해야 합니다. */
    <section className="pt-32 pb-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 space-y-6">
        
        {/* 배지 스타일 */}
        <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-full">
          3년 차 Web Developer
        </div>
        
        {/* 메인 타이틀: 모든 조각에 라이트/다크 색상을 명시함 */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
          <span className="block text-slate-900 dark:text-white transition-colors">
            안정적인 시스템을 설계하는
          </span> 
          
          {/* 포인트 컬러 부분 */}
          <span className="text-indigo-600 dark:text-indigo-400 transition-colors">
            Java 개발자 류시정
          </span>

          {/* '입니다.' 부분 */}
          <span className="text-slate-900 dark:text-white transition-colors">
            입니다.
          </span>
        </h1>

        {/* 서브 텍스트 */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          eGovFrame 기반의 공공기관 고도화 및 신규 구축 프로젝트를 수행하며, 
          <span className="font-bold text-slate-800 dark:text-slate-200"> 10개 이상의 서비스</span>를 안정적으로 런칭하고 운영해 왔습니다. 
          문제 해결을 위한 집요함과 최신 기술에 대한 유연함을 겸비하고 있습니다.
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-wrap gap-4 pt-4">
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