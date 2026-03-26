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
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-indigo-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* bg-white dark:bg-slate-950 대신 CSS 변수가 적용된 기본 배경을 사용합니다. */}
          <div className="pt-16 min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}