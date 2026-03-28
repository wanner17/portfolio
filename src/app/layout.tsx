'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chat from "@/components/Chat";
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // 관리자 관련 경로일 때는 일반 채팅창을 아예 렌더링하지 않음
  const isHideChat = pathname?.includes('/admin');

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="pt-16 min-h-screen">
            {children}
          </div>
          <Footer />
          
          {/* 관리자 페이지가 아닐 때만 유저용 플로팅 버튼 표시 */}
          {!isHideChat && <Chat />}
          
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}