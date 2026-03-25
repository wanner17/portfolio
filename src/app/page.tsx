// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import ProjectList from "@/components/sections/ProjectList";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24">
      {/* 1. 히어로 섹션 */}
      <Hero />

      {/* 2. 기술 스택 섹션 */}
      <section id="tech-stack" className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
        <TechStack />
      </section>

      {/* 3. 프로젝트 리스트 섹션 */}
      <section id="projects" className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <ProjectList />
      </section>

      {/* 4. 컨택 섹션 */}
      <Contact />
    </main>
  );
}