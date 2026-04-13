'use client';

import { PERSONAL_PROJECTS, PersonalProject } from "@/constants/personalProjects";
import { motion } from "framer-motion";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'w-4 h-4'}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'w-4 h-4'}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function PersonalProjectCard({ project, index }: { project: PersonalProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="group relative bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-violet-200 dark:hover:border-violet-800/60 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
    >
      {/* 상단 그라디언트 바 */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />

      <div className="p-8 flex flex-col gap-5">
        {/* 헤더 */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider">
              Personal · {project.period}
            </span>
            <h3 className="mt-1 text-xl font-black text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* 설명 */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* 주요 기능 */}
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-xs font-semibold rounded-lg border border-violet-100 dark:border-violet-900/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 링크 영역 */}
        <div className="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PersonalProjects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {PERSONAL_PROJECTS.map((project, index) => (
        <PersonalProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
