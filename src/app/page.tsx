import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe"; // 추가
import TechStack from "@/components/sections/TechStack";
import ProjectList from "@/components/sections/ProjectList";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <AboutMe /> {/* 추가: 3년 차 경력 및 자격증 강조 */}
      
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
        <TechStack />
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <ProjectList />
      </section>
      
      <Contact />
    </main>
  );
}