import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import ProjectList from "@/components/sections/ProjectList";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Contact from "@/components/sections/Contact";

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills" className="py-20">
        <SectionHeader label="Expertise" title="Tech Stack" />
        <TechStack />
      </section>

      <section id="projects" className="py-20">
        <SectionHeader label="Work" title="Featured Projects" />
        <ProjectList />
      </section>

      <section id="personal" className="py-20">
        <SectionHeader label="Side Work" title="Personal Projects" />
        <PersonalProjects />
      </section>

      <Contact />
    </main>
  );
}
