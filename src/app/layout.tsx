import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from 'next-themes'; // 이미 잘 가져오셨습니다!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryu Sijeong | Web Developer Portfolio",
  description: "Java, Next.js 기반의 문제 해결 중심 웹 개발자 류시정입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: 서버와 클라이언트의 테마 색상 차이로 인한 경로 에러 방지
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-indigo-100`}>
        {/* 1. ThemeProvider로 전체를 감싸줍니다. */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* 2. 다크 모드일 때의 배경색(dark:bg-slate-950)과 글자색(dark:text-slate-100)을 지정합니다. */}
          <div className="pt-16 min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}