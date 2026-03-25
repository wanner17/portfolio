// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © 2026 Ryu Sijeong. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="mailto:your-email@example.com" className="hover:text-indigo-600">Email</a>
          <a href="https://github.com" target="_blank" className="hover:text-indigo-600">GitHub</a>
          <a href="#" className="hover:text-indigo-600">Blog</a>
        </div>
      </div>
    </footer>
  );
}