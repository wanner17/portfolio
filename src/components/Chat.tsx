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
  }, [chatLog]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && message.trim()) {
      socket.emit('message', { text: message });
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-96 h-[32rem] rounded-3xl shadow-2xl flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* 헤더 */}
          <div className="p-5 bg-indigo-600 text-white font-bold flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-xl">💬</span>
              <span className="text-lg tracking-tight">실시간 상담</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform text-2xl font-light">×</button>
          </div>
          
          {/* 채팅 메시지 영역 */}
          <div ref={chatMessagesRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
            {chatLog.map((msg, i) => (
              <div key={i} className={`flex ${msg.user === '관리자' ? 'justify-start' : 'justify-end'} w-full`}>
                <div className={`flex items-start gap-2 ${msg.user === '관리자' ? 'flex-row' : 'flex-row-reverse'} max-w-[85%]`}>
                  
                  {msg.user === '관리자' && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-sm shadow-sm">
                      👤
                    </div>
                  )}
                  
                  <div className={`
                    p-3 px-4 rounded-2xl shadow-sm relative
                    ${msg.user === '관리자' 
                        ? 'bg-indigo-600 text-white rounded-tl-none' 
                        : 'bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-tr-none text-slate-800 dark:text-slate-100'
                    }
                    /* 글자 쏟아짐 방지 및 가독성 설정 */
                    inline-block break-words whitespace-pre-wrap min-w-[40px] max-w-full
                  `}>
                    {msg.user === '관리자' && (
                      <span className="text-[10px] font-bold block opacity-80 mb-1">류시정(개발자)</span>
                    )}
                    <p className="text-[13px] leading-relaxed m-0">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {chatLog.length === 0 && (
              <div className="text-center text-xs text-slate-400 italic pt-10">먼저 인사를 건네보세요!</div>
            )}
          </div>
          
          {/* 입력 폼 */}
          <form onSubmit={sendMessage} className="p-4 border-t dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white outline-none"
              placeholder="궁금한 점을 물어보세요!"
            />
            <button type="submit" className="bg-indigo-600 text-white px-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-xs active:scale-95 shadow-md shadow-indigo-500/20">전송</button>
          </form>
        </div>
      )}

      {/* 플로팅 버튼 */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform text-3xl shadow-indigo-500/30"
      >
        💬
      </button>
    </div>
  );
}