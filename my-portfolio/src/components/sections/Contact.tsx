export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 w-full py-20 text-center">
      <div className="bg-indigo-50 rounded-3xl p-12 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">함께 성장하고 싶습니다!</h2>
        <p className="text-lg text-slate-600">
          새로운 도전을 두려워하지 않는 개발자 류시정입니다. <br />
          언제든 편하게 연락해 주세요.
        </p>
        <div className="flex flex-col items-center gap-2">
          <a href="mailto:wanner17@naver.com" className="text-xl font-semibold text-indigo-600 hover:underline">
            wanner17@naver.com
          </a>
          <p className="text-sm text-slate-400">GitHub · Blog · LinkedIn</p>
        </div>
      </div>
    </section>
  );
}