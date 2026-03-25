export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-4">
        Web Developer Portfolio
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        안녕하세요, <span className="text-indigo-600">류시정</span>입니다.
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        Java와 Next.js를 활용해 안정적이고 효율적인 웹 서비스를 만듭니다. 
        문제를 끝까지 파고들어 해결하는 과정에서 즐거움을 느낍니다.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          프로젝트 보기
        </a>
        <a href="#contact" className="px-8 py-3 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all">
          Contact Me
        </a>
      </div>
    </section>
  );
}