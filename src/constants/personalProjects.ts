export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  period: string;
  highlights: string[];
}

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: "ai-interview",
    title: "AI 면접 시뮬레이터",
    description:
      "카메라와 마이크로 실제 면접 환경을 재현하고, AI가 시선·표정·발화를 분석해 면접 역량 리포트를 제공하는 웹 앱입니다.",
    techStack: ["Next.js", "TypeScript", "MediaPipe", "WebSocket", "Docker"],
    github: "https://github.com/wanner17/ai-interview",
    demo: "https://api.eisoft.co.kr:543/interview",
    period: "2025",
    highlights: [
      "MediaPipe Face Mesh로 시선·표정·입 움직임 실시간 감지",
      "WebSocket 기반 STT 실시간 자막 처리",
      "면접 종료 후 집중도·발화량 AI 피드백 및 PDF 리포트 생성",
    ],
  },
  {
    id: "parking-together",
    title: "같이 주차해요",
    description:
      "카카오맵 기반으로 주변 주차 공간을 탐색하고 공유할 수 있는 위치 기반 주차 정보 플랫폼입니다.",
    techStack: ["Next.js", "TypeScript", "Kakao Maps API"],
    github: "https://github.com/wanner17/parking-together",
    demo: "https://parking-together.vercel.app",
    period: "2025",
    highlights: [
      "카카오맵 SDK 연동으로 현위치 기준 주차장 탐색",
      "사용자 제보 기반 주차 공간 등록 및 공유",
    ],
  },
];
