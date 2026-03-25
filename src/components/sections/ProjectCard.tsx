import { Project } from "@/types";
import Link from "next/link"; // Link 컴포넌트 추가

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Link로 전체 카드를 감쌉니다.
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        {/* 이미지 영역 */}
        <div className="aspect-video bg-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold">
            {project.title}
          </div>
        </div>

        <div className="p-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
            <span className="text-sm font-bold text-indigo-600">자세히 보기 →</span>
            <span className="text-xs text-slate-400">{project.period}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}