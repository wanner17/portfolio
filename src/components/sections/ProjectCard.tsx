'use client';

import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-800/60 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
          {/* 썸네일 */}
          <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
            <Image
              src={project.thumbnail || "/images/projects/default-thumbnail.png"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 dark:brightness-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* 카테고리 배지 */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-indigo-600 dark:text-indigo-400 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-7 space-y-4">
            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-lg border border-indigo-100 dark:border-indigo-900/50"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-lg">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* 제목 */}
            <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors leading-snug">
              {project.title}
            </h3>

            {/* 설명 */}
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                자세히 보기 →
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{project.period}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
