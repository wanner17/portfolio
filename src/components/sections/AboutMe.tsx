// src/components/sections/AboutMe.tsx
const STRENGTHS = [
  { title: "안정적 아키텍처", desc: "eGovFrame 및 Spring 기반의 탄탄한 서버 설계", icon: "🏛️" },
  { title: "인프라 구축 역량", desc: "Linux 환경의 화상회의 서버 및 Nginx 최적화", icon: "🐧" },
  { title: "자격 기반의 전문성", desc: "정보처리기사 및 SQLD를 통한 이론적 토대", icon: "📜" },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 왼쪽: 강점 카드들 */}
        <div className="grid grid-cols-1 gap-4">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
              <span className="text-3xl mb-2 block">{s.icon}</span>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{s.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 오른쪽: 상세 자기소개 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">학습하고 공유하는 개발자</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              단순히 기능을 구현하는 것에 그치지 않고, 시스템의 <strong>지속 가능성</strong>과 <strong>안정성</strong>을 최우선으로 생각합니다. 
              공공기관의 대규모 트래픽을 처리하는 프로젝트를 통해 데이터 무결성과 쿼리 최적화의 중요성을 체득했습니다.
            </p>
            <p>
              최근에는 <strong>Next.js</strong>와 <strong>TypeScript</strong>를 학습하며 프론트엔드 생태계의 효율성을 경험하고 있으며, 
              백엔드 전문성을 바탕으로 풀스택 역량을 확장해 나가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}