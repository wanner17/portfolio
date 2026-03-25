import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. 함수 앞에 async를 붙여 비동기로 만듭니다.
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> // 2. params 타입을 Promise로 변경합니다.
}) {
  // 3. params를 await로 기다려 실제 값을 추출합니다.
  const { id } = await params;

  // 시정님이 주신 데이터 배열에서 ID가 일치하는 프로젝트를 찾습니다.
  const project = PROJECTS.find((p) => p.id === id);

  // 일치하는 ID가 없으면 404 페이지를 보여줍니다.
  if (!project) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/" className="text-indigo-600 hover:underline mb-8 inline-block">
        ← 메인으로 돌아가기
      </Link>
      
      <header className="mb-12">
        <p className="text-indigo-600 font-bold mb-2">{project.category}</p>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{project.title}</h1>
        <p className="text-slate-500">{project.period}</p>
      </header>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
        <p className="text-slate-600 mb-8">{project.description}</p>

        <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">주요 성과 및 해결 과정</h2>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <p className="text-slate-700 leading-relaxed">
            {project.troubleshooting}
          </p>
        </div>
      </section>
    </div>
  );
}