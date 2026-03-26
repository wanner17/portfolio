'use client';

import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'https://webinar.eisoft.co.kr';

export default function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<{user: string, text: string}[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let userId = localStorage.getItem('chat_user_id');
    if (!userId) {
      userId = `user_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chat_user_id', userId);
    }

    const newSocket = io(SOCKET_URL, {
      path: '/socket.io',
      query: { userId },
      transports: ['polling', 'websocket'],
    });

    newSocket.on('chat-history', (history) => setChatLog(history));
    newSocket.on('message', (data) => setChatLog((prev) => [...prev, data]));

    setSocket(newSocket);
    return () => { newSocket.close(); };
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatLog, isOpen]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && message.trim()) {
      socket.emit('message', { text: message });
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isOpen && (
        <div className={`
          bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 
          /* 모바일: 전체 화면 / 데스크톱: w-96 고정 */
          fixed inset-0 sm:relative sm:inset-auto
          sm:w-96 sm:h-[32rem] 
          flex flex-col shadow-2xl overflow-hidden 
          animate-in fade-in slide-in-from-bottom-4
          ${isOpen ? 'rounded-none sm:rounded-3xl' : ''}
        `}>
          {/* 헤더 - 모바일에서 높이 최적화 */}
          <div className="p-4 sm:p-5 bg-indigo-600 text-white font-bold flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-xl">💬</span>
              <span className="text-base sm:text-lg tracking-tight">실시간 상담</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-white hover:rotate-90 transition-transform text-3xl sm:text-2xl font-light"
            >
              ×
            </button>
          </div>
          
          {/* 채팅 메시지 영역 - 모바일 터치 스크롤 최적화 */}
          <div 
            ref={chatMessagesRef} 
            className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50 overscroll-contain"
          >
            {chatLog.map((msg, i) => (
              <div key={i} className={`flex ${msg.user === '관리자' ? 'justify-start' : 'justify-end'} w-full`}>
                <div className={`flex items-start gap-2 ${msg.user === '관리자' ? 'flex-row' : 'flex-row-reverse'} max-w-[90%] sm:max-w-[85%]`}>
                  {msg.user === '관리자' && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-sm">
                      👤
                    </div>
                  )}
                  <div className={`
                    p-3 px-4 rounded-2xl shadow-sm
                    ${msg.user === '관리자' 
                        ? 'bg-indigo-600 text-white rounded-tl-none' 
                        : 'bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-tr-none text-slate-800 dark:text-slate-100'
                    }
                    inline-block break-words whitespace-pre-wrap min-w-[40px]
                  `}>
                    {msg.user === '관리자' && (
                      <span className="text-[10px] font-bold block opacity-80 mb-1">관리자</span>
                    )}
                    <p className="text-[13px] leading-relaxed m-0">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 입력 폼 - 모바일 키보드 대응 강화 */}
          <form 
            onSubmit={sendMessage} 
            className="p-4 sm:p-5 border-t dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900 pb-safe"
          >
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white outline-none"
              placeholder="궁금한 점을 물어보세요!"
            />
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-5 sm:px-6 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-sm active:scale-95"
            >
              전송
            </button>
          </form>
        </div>
      )}

      {/* 플로팅 버튼 - 열려있을 때 모바일에서는 숨김 처리 가능 */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform text-2xl sm:text-3xl shadow-indigo-500/30"
        >
          💬
        </button>
      )}
    </div>
  );
}