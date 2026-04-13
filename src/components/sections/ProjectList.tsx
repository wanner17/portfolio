'use client';

import { useState } from "react";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [showArchive, setShowArchive] = useState(false);

  const featured = PROJECTS.filter((p) => p.featured);
  const archive = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="space-y-16">
      {/* Featured */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Archive 토글 */}
      <div>
        <button
          onClick={() => setShowArchive((v) => !v)}
          className="group flex items-center gap-3 w-full py-4 border-t border-b border-slate-100 dark:border-slate-800 text-left hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-colors"
        >
          <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            운영/유지보수 프로젝트 아카이브
          </span>
          <span className="ml-auto px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {archive.length}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${showArchive ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {showArchive && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
            {archive.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
