'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)',
        }}
      >
        {/* 배경 장식 */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
        />

        <div className="relative z-10 px-10 py-16 text-center space-y-6">
          <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">Contact</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            함께 성장하고 싶습니다!
          </h2>
          <p className="text-indigo-100 text-lg max-w-xl mx-auto leading-relaxed">
            새로운 도전을 두려워하지 않는 개발자 류시정입니다.
            <br />
            언제든 편하게 연락해 주세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="mailto:wanner17@naver.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-indigo-900/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              wanner17@naver.com
            </a>
            <a
              href="https://github.com/wanner17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
