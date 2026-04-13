'use client';

import { motion } from 'framer-motion';

const STRENGTHS = [
  {
    title: "안정적 아키텍처",
    desc: "eGovFrame 및 Spring 기반의 탄탄한 서버 설계",
    icon: "🏛️",
    color: "from-indigo-500/10 to-blue-500/10 border-indigo-200/50 dark:border-indigo-800/50",
    dot: "bg-indigo-500",
  },
  {
    title: "인프라 구축 역량",
    desc: "Linux 환경의 화상회의 서버 및 Nginx 최적화",
    icon: "🐧",
    color: "from-violet-500/10 to-purple-500/10 border-violet-200/50 dark:border-violet-800/50",
    dot: "bg-violet-500",
  },
  {
    title: "자격 기반의 전문성",
    desc: "정보처리기사 및 SQLD를 통한 이론적 토대",
    icon: "📜",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-200/50 dark:border-emerald-800/50",
    dot: "bg-emerald-500",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* 왼쪽: 강점 카드 */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-5 rounded-2xl bg-gradient-to-br border ${s.color} transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{s.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 오른쪽: 자기소개 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-6"
        >
          <div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              학습하고 <span className="gradient-text">공유하는</span> 개발자
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              단순히 기능을 구현하는 것에 그치지 않고, 시스템의{' '}
              <strong className="text-slate-900 dark:text-white">지속 가능성</strong>과{' '}
              <strong className="text-slate-900 dark:text-white">안정성</strong>을 최우선으로 생각합니다.
              공공기관의 대규모 트래픽을 처리하는 프로젝트를 통해 데이터 무결성과 쿼리 최적화의 중요성을 체득했습니다.
            </p>
            <p>
              최근에는 <strong className="text-slate-900 dark:text-white">Next.js</strong>와{' '}
              <strong className="text-slate-900 dark:text-white">TypeScript</strong>를 학습하며 프론트엔드
              생태계의 효율성을 경험하고 있으며, 백엔드 전문성을 바탕으로 풀스택 역량을 확장해 나가고 있습니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {['정보처리기사', 'SQLD', '3년 실무 경력'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
