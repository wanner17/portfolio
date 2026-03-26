import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image"; // 1. Image 컴포넌트 추가

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        
        {/* 이미지 영역 수정 */}
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
          {/* 2. 실제 이미지가 출력되는 태그 추가 */}
          <Image 
            // thumbnail이 없으면 기본 이미지(placeholder)를 보여주도록 설정
            src={project.thumbnail || "/images/projects/default-thumbnail.png"} 
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 dark:brightness-90"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* 이미지가 없을 때를 대비한 오버레이 (선택사항) */}
          {!project.thumbnail && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold">
              {project.title}
            </div>
          )}
        </div>

        <div className="p-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">자세히 보기 →</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">{project.period}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}