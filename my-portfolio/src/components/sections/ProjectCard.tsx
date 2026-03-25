import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* 이미지 영역 (이미지가 없을 경우를 대비한 플레이스홀더) */}
      <div className="aspect-video bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold">
          {project.title}
        </div>
        {/* 실제 이미지가 준비되면 아래 주석 해제 */}
        {/* <Image src={project.thumbnail} alt={project.title} fill className="object-cover" /> */}
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
        
        <p className="text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* 시정님의 강점: 문제 해결 경험 노출 */}
        <div className="pt-4 border-t border-slate-50">
          <p className="text-sm font-bold text-slate-800 mb-1 italic">Key Achievement:</p>
          <p className="text-sm text-slate-500 line-clamp-2">
            {project.troubleshooting}
          </p>
        </div>
      </div>
    </div>
  );
}