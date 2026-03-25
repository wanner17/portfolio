import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import ProjectList from "@/components/sections/ProjectList";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      
      {/* 앵커 링크 연결을 위한 ID 부여 */}
      <section id="about">
        <AboutMe />
      </section>
      
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
        <TechStack />
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <ProjectList />
      </section>
      
      <Contact />
    </main>
  );
}