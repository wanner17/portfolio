import { Project } from "@/types";

export const PROJECTS: Project[] = [
  // --- [MAIN FEATURED] 핵심 역량 강조 (신규 구축 및 주요 고도화) ---
  {
    id: "video-platform-2026",
    title: "실시간 화상 취업박람회 플랫폼 구축",
    category: "신규 구축",
    featured: true,
    period: "2026.01 ~ 현재",
    description: "테이블 설계부터 기존 사내 화상회의 서버 연계까지 전반적인 백엔드 아키텍처를 주도했습니다.",
    techStack: ["Java", "eGovFrame 4.0", "BigBlueButton", "MySQL", "Linux", "Nginx"],
    thumbnail: "/images/projects/video-platform.png",
    link: "https://www.e-myjob.com",
    troubleshooting: "오픈소스 화상회의 솔루션인 BigBlueButton을 사내 서비스와 안정적으로 연동하기 위해 DB 스키마를 직접 설계하고 아키텍처를 구성했습니다."
  },
  {
    id: "lms-platform-2025",
    title: "사내 통합 LMS(학습관리시스템) 플랫폼 구축",
    category: "신규 구축",
    featured: true,
    period: "2025.08 ~ 2025.12",
    description: "교육 콘텐츠 및 학습 운영을 위한 대학/기업용 LMS 플랫폼의 핵심 비즈니스 로직을 개발했습니다.",
    techStack: ["Java", "Spring Boot", "JSP", "Oracle", "MyBatis"],
    thumbnail: "/images/projects/lms.png",
    link: "https://www.e-mylearn.com",
    troubleshooting: "지속적으로 누적되는 대용량 학습 이력 데이터의 조회 성능을 높이기 위해 Oracle 파티셔닝 및 인덱싱 전략을 수립하여 실행 속도를 개선했습니다. 효율적인 쿼리 작성과 데이터 구조 정비를 통해 사용자가 대량의 데이터를 조회할 때 발생하는 시스템 부하를 최소화했습니다."
  },
  {
    id: "flood-safety-2025",
    title: "침수안전 산업 진흥 통합플랫폼 고도화",
    category: "고도화",
    featured: true,
    period: "2025.05 ~ 2025.08",
    description: "침수안전 산업 진흥 통합 플랫폼의 대규모 안전 데이터 관리 및 운영 기능을 고도화했습니다.",
    techStack: ["Java", "Spring", "PostgreSQL", "MyBatis", "Chart.js"],
    thumbnail: "/images/projects/safety.png",
    link: "https://www.safetyforflood.co.kr/",
    troubleshooting: "방대한 안전 센서 데이터를 실시간으로 차트화할 때 발생하는 렌더링 지연을 API 캐싱과 데이터 전처리를 통해 최적화했습니다."
  },
  {
    id: "webinar-server-2024",
    title: "자사 화상회의(BBB) 서버 인프라 구축",
    category: "인프라/구축",
    featured: true,
    period: "2024.05 ~ 2024.10",
    description: "오픈소스 기반의 웨비나 서버 환경을 Linux 환경에서 구축하고 사내 시스템과 연동했습니다.",
    techStack: ["Linux (Ubuntu)", "Nginx", "Docker", "Certbot", "BigBlueButton"],
    thumbnail: "/images/projects/webinar.png",
    link: "https://webinar.eisoft.co.kr/",
    troubleshooting: "Nginx 리버스 프록시(Reverse Proxy) 설정을 통해 외부 요청을 안전하게 중계하고, Certbot을 활용한 SSL 인증서 자동 갱신 프로세스를 구축하여 보안 연결의 연속성을 확보했습니다."
  },

  // --- [ARCHIVE] 운영 및 유지보수 경험 (안정적인 시스템 관리) ---
  {
    id: "sandbox-2nd-2025",
    title: "규제샌드박스 시스템 고도화 (2차)",
    category: "운영/고도화",
    featured: false,
    period: "2025.11 ~ 2025.12",
    description: "한국산업기술진흥원(KIAT) 샌드박스 시스템의 운영 이슈 대응 및 신규 승인 프로세스 반영.",
    techStack: ["Java", "Spring", "Oracle"],
    thumbnail: "/images/projects/sandbox.png",
    link: "https://sandbox.kiat.or.kr/",
    troubleshooting: "실무자의 승인 단계를 간소화하는 관리자 워크플로우를 개선하여 업무 처리 효율을 증대시켰습니다."
  },
  {
    id: "fusion-2nd-2025",
    title: "융합혁신지원단 플랫폼 고도화 (2차)",
    category: "운영/고도화",
    featured: false,
    period: "2025.02 ~ 2025.04",
    description: "사업 공고 및 기업 매칭 시스템의 게시판 및 관리자 편의 기능 강화.",
    techStack: ["Java", "JSP", "MySQL"],
    thumbnail: "/images/projects/tech.png",
    link: "https://융합혁신지원단.org/",
    troubleshooting: "다중 조건 검색 시 발생하는 쿼리 성능 저하를 MyBatis 동적 쿼리 최적화로 해결했습니다."
  },
  {
    id: "sandbox-1st-2024",
    title: "규제샌드박스 시스템 고도화 (1차)",
    category: "운영/고도화",
    featured: false,
    period: "2024.10 ~ 2025.01",
    description: "시스템 안정화 및 UI/UX 마이너 업데이트, 법령 개정에 따른 로직 수정.",
    techStack: ["Java", "Spring", "Oracle"],
    thumbnail: "/images/projects/sandbox.png",
    link: "https://sandbox.kiat.or.kr/",
    troubleshooting: "정기적인 보안 취약점 점검 대응 및 시큐어 코딩을 적용하여 시스템 안정성을 강화했습니다."
  },
  {
    id: "k-brand-2024",
    title: "K-브랜드 보호 포털 기능 고도화",
    category: "운영/고도화",
    featured: false,
    period: "2024.05 ~ 2024.08",
    description: "한국지식재산보호원 포털의 관리자 통계 기능 및 엑셀 리포트 자동화 구현.",
    techStack: ["Java", "eGovFrame", "MySQL", "Apache POI"],
    thumbnail: "/images/projects/kbrand.png",
    link: "https://ip-navi.or.kr/kbrands",
    troubleshooting: "대량의 통계 데이터 엑셀 다운로드 시 발생하는 OutOfMemory 에러를 POI의 스트리밍 방식(SXSSF)을 도입하여 해결했습니다."
  },
  {
    id: "patent-risk-2024",
    title: "특허분쟁 위험경보 시스템 안정화",
    category: "운영/고도화",
    featured: false,
    period: "2024.03 ~ 2024.04",
    description: "한국지식재산보호원 시스템의 데이터 정합성 검증 및 대시보드 오류 수정.",
    techStack: ["Java", "Spring", "PostgreSQL"],
    thumbnail: "/images/projects/patent.png",
    link: "https://koipa.re.kr/ipalert",
    troubleshooting: "외부 API로부터 수집되는 비정형 데이터의 파싱 오류를 수정하여 데이터 누락 없는 안정적인 정보를 제공했습니다."
  },
  {
    id: "sandbox-renewal-2023",
    title: "규제샌드박스 홈페이지 리뉴얼",
    category: "리뉴얼",
    featured: false,
    period: "2023.08 ~ 2024.02",
    description: "사용자 중심의 웹 표준/접근성을 준수하는 반응형 UI 전면 개편.",
    techStack: ["JavaScript", "jQuery", "CSS3", "HTML5"],
    thumbnail: "/images/projects/sandbox.png",
    link: "https://sandbox.kiat.or.kr/",
    troubleshooting: "기존의 복잡한 화면 구조를 사용자 흐름에 맞춰 재설계하고, 크로스 브라우징 이슈를 완벽하게 해결했습니다."
  },
  {
    id: "fusion-1st-2023",
    title: "융합혁신지원단 홈페이지 고도화 (1차)",
    category: "운영/고도화",
    featured: false,
    period: "2023.04 ~ 2023.07",
    description: "기업 지원 비즈니스 프로세스 전산화 및 관리자 통합 정보 시스템 구축.",
    techStack: ["Java", "JSP", "Oracle", "MyBatis"],
    thumbnail: "/images/projects/tech.png",
    link: "https://융합혁신지원단.org/",
    troubleshooting: "수작업으로 진행되던 기업 지원 신청 프로세스를 웹 기반 자동화 시스템으로 전환하여 행정 시간을 대폭 단축했습니다."
  }
];