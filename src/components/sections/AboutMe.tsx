'use client'; // 클라이언트 컴포넌트로 지정 (애니메이션 사용 필수)

import { motion, Variants } from 'framer-motion';

export default function AboutMe() {
  const certifications = [
    { name: "정보처리기사", date: "2024.06", organization: "한국산업인력공단" },
    { name: "네트워크관리사 2급", date: "2023.06", organization: "한국정보통신자격협회" },
    { name: "SQL 개발자 (SQLD)", date: "2022.06", organization: "한국데이터산업진흥원" },
    { name: "컴퓨터활용능력 1급", date: "2022.06", organization: "대한상공회의소" },
  ];

  // 애니메이션 설정 (Slide Up + Fade In)
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 }, // 초기 상태 (투명하고 아래에 있음)
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } // 나타날 때 (부드럽게 위로)
    },
  };

  return (
    // section 대신 motion.section을 사용합니다.
    <motion.section
      id="about"
      className="py-20 space-y-16"
      initial="hidden"       // 초기 상태 지정
      whileInView="visible"  // 스크롤 시 뷰포트에 들어오면 애니메이션 실행
      viewport={{ once: true, amount: 0.3 }} // 한 번만 실행, 30% 보일 때 시작
      variants={fadeUpVariant}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽: 자기소개 글 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            안정적인 시스템을 구축하는 <br />
            <span className="text-indigo-600">3년 차 웹 개발자</span> 류시정입니다.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            eGovFrame 기반의 Java 웹 애플리케이션 개발 및 고도화에 숙련되어 있으며, 
            산업기술진흥원, 자동차연구원 등 공공·연구기관의 핵심 업무 시스템을 
            안정적으로 운영해 온 경험이 있습니다.
          </p>
          <p className="text-slate-500">
            단순한 기능 구현을 넘어, 서비스 안정성과 확장성을 고려한 설계를 지향하며 
            빠른 이해력과 책임감을 바탕으로 실무에 즉시 기여할 수 있습니다.
          </p>
        </div>

        {/* 오른쪽: 자격증 리스트 */}
        <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            🛡️ Certifications
          </h3>
          <div className="grid gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                <div>
                  <p className="font-bold text-slate-800">{cert.name}</p>
                  <p className="text-xs text-slate-400">{cert.organization}</p>
                </div>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}