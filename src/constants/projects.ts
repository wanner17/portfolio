import { Project } from "@/types";

export const PROJECTS: Project[] = [
  // --- [MAIN FEATURED] 핵심 역량 강조 프로젝트 (신규 구축 및 주요 고도화) ---
  {
    id: "video-platform-2026",
    title: "화상 취업박람회 플랫폼 구축",
    category: "신규 구축",
    featured: true,
    period: "2026.01 ~ 현재",
    description: "테이블 설계부터 기존 사내 화상회의 서버 연계까지 전반적인 개발을 주도한 프로젝트입니다.",
    techStack: ["Java", "Spring", "BigBlueButton", "MySQL", "Linux"],
    thumbnail: "/images/projects/video-platform.png",
    troubleshooting: "오픈소스 화상회의 솔루션인 BigBlueButton을 사내 서비스와 안정적으로 연동하기 위해 DB 스키마를 직접 설계하고 아키텍처를 구성했습니다."
  },
  {
    id: "lms-platform-2025",
    title: "사내 LMS 플랫폼 구축",
    category: "신규 구축",
    featured: true,
    period: "2025.08 ~ 2025.12",
    description: "교육 콘텐츠 및 학습 운영을 위한 대학 LMS 플랫폼의 핵심 기능을 신규 개발했습니다.",
    techStack: ["Java", "eGovFrame", "JSP", "Oracle", "MyBatis"],
    thumbnail: "/images/projects/lms.png",
    troubleshooting: "사용자와 관리자 모두에게 최적화된 교육 환경을 제공하기 위해 콘텐츠 관리 및 학습 현황 추적 기능을 모듈화하여 구현했습니다."
  },
  {
    id: "flood-safety-2025",
    title: "침수안전 산업 진흥 통합플랫폼",
    category: "고도화",
    featured: true,
    period: "2025.05 ~ 2025.08",
    description: "전북과학기술진흥단 통합 플랫폼의 고도화 및 운영 기능 개선을 수행했습니다.",
    techStack: ["Java", "Spring", "PostgreSQL", "MyBatis"],
    thumbnail: "/images/projects/safety.png",
    troubleshooting: "대규모 안전 관련 데이터를 안정적으로 처리하기 위해 기존 기능을 고도화하고 관리자 시스템의 유지보수 효율을 높였습니다."
  },
  {
    id: "webinar-server-2024",
    title: "자사 화상회의(BigBlueButton) 서버 구축",
    category: "인프라/구축",
    featured: true,
    period: "2024.07 ~ 2024.10",
    description: "오픈소스 기반의 웨비나 서버 환경을 구축하고 내부 사이트와 연동했습니다.",
    techStack: ["BigBlueButton", "Linux", "Apache", "Nginx", "Docker"],
    thumbnail: "/images/projects/webinar.png",
    troubleshooting: "실시간 영상 송출을 위한 최적의 운영 환경을 세팅하고, 내부 서비스와의 원활한 API 연동을 성공시켰습니다."
  },

  // --- [ARCHIVE] 안정적인 운영 및 유지보수 경험 (리스트 노출용) ---
  {
    id: "sandbox-2nd-2025",
    title: "규제샌드박스 홈페이지 고도화 (2차)",
    category: "운영/고도화",
    featured: false,
    period: "2025.11 ~ 2025.12",
    description: "한국산업기술진흥원 샌드박스 시스템의 운영 이슈 대응 및 기능 개선.",
    techStack: ["Java", "Spring", "Oracle"],
    troubleshooting: "사용자 요청사항을 신속히 반영하여 운영 안정성을 확보했습니다."
  },
  {
    id: "fusion-2nd-2025",
    title: "융합혁신지원단 홈페이지 고도화 (2차)",
    category: "운영/고도화",
    featured: false,
    period: "2025.02 ~ 2025.04",
    description: "한국산업기술진흥원 시스템의 게시판 및 관리자 기능 운영 개선.",
    techStack: ["Java", "JSP", "MySQL"],
    troubleshooting: "실무자의 요구를 바탕으로 운영 편의성을 증대시키는 기능을 보완했습니다."
  },
  {
    id: "sandbox-1st-2024",
    title: "샌드박스 홈페이지 고도화 (1차)",
    category: "운영/고도화",
    featured: false,
    period: "2024.11 ~ 2025.01",
    description: "규제샌드박스 시스템의 전반적인 유지보수 및 UI/기능 수정.",
    techStack: ["Java", "Spring", "Oracle"],
    troubleshooting: "다양한 운영 이슈에 대응하며 시스템 가용성을 높였습니다."
  },
  {
    id: "k-brand-2024",
    title: "K-브랜드 보호 포털 고도화",
    category: "운영/고도화",
    featured: false,
    period: "2024.05 ~ 2024.06",
    description: "한국지식재산보호원 포털의 기능 개선 및 관리자 기능 보완.",
    techStack: ["Java", "eGovFrame", "MySQL"],
    troubleshooting: "운영 편의성 개선을 위해 사용자 요구사항을 분석하고 반영했습니다."
  },
  {
    id: "patent-risk-2024",
    title: "특허분쟁 위험경보 시스템 고도화",
    category: "운영/고도화",
    featured: false,
    period: "2024.03 ~ 2024.04",
    description: "한국지식재산보호원 시스템의 안정화 및 데이터 조회 오류 수정.",
    techStack: ["Java", "Spring", "PostgreSQL"],
    troubleshooting: "데이터 등록 및 조회 과정의 버그를 수정하여 시스템 안정성을 제고했습니다."
  },
  {
    id: "sandbox-renewal-2023",
    title: "규제샌드박스 홈페이지 리뉴얼",
    category: "리뉴얼",
    featured: false,
    period: "2023.11 ~ 2024.02",
    description: "기존 화면 구조 개편 및 레이아웃/콘텐츠 관리 기능 개선.",
    techStack: ["HTML", "Javascript", "Jquery", "CSS"],
    troubleshooting: "사용자 중심의 UI 개선을 위해 전체적인 레이아웃 구조를 재설계했습니다."
  },
  {
    id: "car-db-2023",
    title: "한국자동차연구원 기업DB 시스템 고도화",
    category: "고도화",
    featured: false,
    period: "2023.08 ~ 2023.10",
    description: "기업 정보 검색 기능 개선 및 SQL 튜닝 지원.",
    techStack: ["Java", "MySQL", "MyBatis"],
    troubleshooting: "DB 연동 로직 개선과 SQL 튜닝을 통해 대규모 기업 정보 조회 속도를 최적화했습니다."
  },
  {
    id: "fusion-1st-2023",
    title: "융합혁신지원단 홈페이지 고도화 (1차)",
    category: "운영/고도화",
    featured: false,
    period: "2023.04 ~ 2023.07",
    description: "기존 홈페이지 UI 및 업무 프로세스 고도화.",
    techStack: ["Java", "JSP", "Oracle"],
    troubleshooting: "사용자 요청 기반의 관리자 기능을 신규 구축하여 업무 효율을 높였습니다."
  }
];