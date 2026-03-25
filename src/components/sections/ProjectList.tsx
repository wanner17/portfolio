import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}