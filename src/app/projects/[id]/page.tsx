import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* 뒤로 가기 */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 group"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
          <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
        </svg>
        돌아가기
      </Link>

      {/* 썸네일 */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl border border-slate-100 dark:border-slate-800">
        <Image
          src={project.thumbnail || "/images/projects/default-thumbnail.png"}
          alt={project.title}
          fill
          className="object-cover dark:brightness-90"
          priority
        />
      </div>

      {/* 헤더 */}
      <header className="mb-10 space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
            {project.category}
          </span>
          <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">{project.period}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* 실제 서비스 버튼 */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 mb-12"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          실제 서비스 방문하기
        </a>
      )}

      {/* 기술 스택 */}
      <section className="mb-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-semibold border border-indigo-100 dark:border-indigo-900/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 트러블슈팅 */}
      {project.troubleshooting && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">주요 성과 및 해결 과정</h2>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500" />
            <p className="relative px-8 py-7 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {project.troubleshooting}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
