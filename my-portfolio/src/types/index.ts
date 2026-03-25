// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  category: string;    // 추가
  featured: boolean;   // 추가
  period: string;      // 추가
  description: string;
  techStack: string[];
  thumbnail?: string;  // 썸네일은 없을 수도 있으니 옵셔널 처리
  github?: string;
  link?: string;
  troubleshooting?: string;
}