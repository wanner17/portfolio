'use client';

import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from "@/constants/skills";

const CATEGORY_STYLES: Record<string, { accent: string; badge: string; dot: string }> = {
  Frontend: {
    accent: 'text-sky-600 dark:text-sky-400',
    badge: 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60',
    dot: 'bg-sky-500',
  },
  Backend: {
    accent: 'text-indigo-600 dark:text-indigo-400',
    badge: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60',
    dot: 'bg-indigo-500',
  },
  'Infrastructure & DB': {
    accent: 'text-violet-600 dark:text-violet-400',
    badge: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-800/60',
    dot: 'bg-violet-500',
  },
  Tools: {
    accent: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60',
    dot: 'bg-emerald-500',
  },
};

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SKILL_CATEGORIES.map((category, i) => {
        const style = CATEGORY_STYLES[category.title] ?? CATEGORY_STYLES['Tools'];
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className={`w-2 h-2 rounded-full ${style.dot}`} />
              <h3 className={`text-sm font-bold uppercase tracking-wider ${style.accent}`}>
                {category.title}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex-shrink-0 px-2.5 py-0.5 rounded-lg text-xs font-bold whitespace-nowrap ${style.badge}`}
                  >
                    {skill.name}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
