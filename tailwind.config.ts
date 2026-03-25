import type { Config } from "tailwindcss";

const config: Config = {
  // 핵심: 다크 모드를 클래스 기반으로 제어하겠다는 설정
  darkMode: "class", 
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 시정님의 3년 차 경력만큼이나 깔끔한 디자인을 위해 
      // 나중에 커스텀 컬러를 여기에 추가할 수 있습니다.
    },
  },
  plugins: [],
};

export default config;