import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // 1. Image 컴포넌트 추가

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline mb-8 inline-block font-medium">
        ← 메인으로 돌아가기
      </Link>
      
      {/* 상단 이미지 영역 */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 shadow-2xl border border-slate-100 dark:border-slate-800">
        <Image 
          src={project.thumbnail || "/images/projects/default-thumbnail.png"} 
          alt={project.title}
          fill
          className="object-cover dark:brightness-90"
          priority
        />
      </div>

      {/* 🚀 실제 사이트 방문 버튼 추가 */}
      {project.link && (
        <div className="mb-12">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:-translate-y-1"
          >
            실제 서비스 방문하기
          </a>
        </div>
      )}

      <header className="mb-12">
        <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">{project.category}</p>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          {project.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">{project.period}</p>
      </header>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">프로젝트 개요</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          {project.description}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">기술 스택</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">주요 성과 및 해결 과정</h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
            {project.troubleshooting}
          </p>
        </div>
      </section>
    </div>
  );
}