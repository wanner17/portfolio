export default function Footer() {
  return (
    // bg-slate-50 -> dark:bg-slate-950, border-t -> dark:border-slate-800 추가
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* 저작권 표시 */}
        <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © 2026 <span className="text-slate-900 dark:text-white font-bold">Ryu Sijeong</span>. All rights reserved.
        </div>
        
        {/* 연락처 및 링크 */}
        <div className="flex items-center gap-8 text-sm font-bold">
          {/* 실제 시정님 이메일로 변경 */}
          <a 
            href="mailto:wanner17@naver.com" 
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <span>Email</span>
          </a>
          
          {/* 시정님 깃허브 주소로 변경 */}
          <a 
            href="https://github.com/wanner17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      {/* 하단에 작은 강조 문구 하나 더 (선택사항) */}
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Built with <span className="text-indigo-500">Next.js</span> & <span className="text-indigo-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}