// src/components/sections/TechStack.tsx
import { SKILL_CATEGORIES } from "@/constants/skills";

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.title} className="space-y-6">
          <h3 className="text-xl font-semibold text-indigo-600 border-b border-indigo-100 pb-2">
            {category.title}
          </h3>
          <ul className="space-y-4">
            {category.skills.map((skill) => (
              <li key={skill.name} className="group">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-800 group-hover:text-indigo-500 transition-colors">
                    {skill.name}
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}