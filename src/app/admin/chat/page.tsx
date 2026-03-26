'use client';

import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'https://webinar.eisoft.co.kr';

export default function AdminChatPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userList, setUserList] = useState<{id: string, time: string}[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, any[]>>({});
  const [inputValue, setInputValue] = useState('');
  const [unreadCounts, setUnreadCounts] = useState<Record<string, number>>({});
  
  // 모바일에서 리스트/채팅창 전환을 위한 상태 (기본값: true = 리스트 보기)
  const [showList, setShowList] = useState(true);

  const notificationInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_auth');
    if (authStatus === 'true') setIsAuthenticated(true);
    const lastUser = sessionStorage.getItem('last_selected_user');
    if (lastUser) setSelectedUserId(lastUser);
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const newSocket = io(SOCKET_URL, {
      path: '/socket.io',
      query: { isAdmin: 'true' },
      transports: ['polling', 'websocket'],
    });

    newSocket.on('connect', () => {
      const lastUser = sessionStorage.getItem('last_selected_user');
      if (lastUser) newSocket.emit('get-user-history', lastUser);
    });

    newSocket.on('user-list', (list) => setUserList(list));
    
    newSocket.on('chat-history', (data) => {
      const targetId = data.targetId || selectedUserId;
      const history = data.history || data;
      setMessages((prev) => ({ ...prev, [targetId]: history }));
    });

    newSocket.on('message', (data) => {
      const userId = data.from || data.targetId;
      if (!userId) return;
      setMessages((prev) => ({ ...prev, [userId]: [...(prev[userId] || []), data] }));

      if (data.user !== '관리자') {
        if (selectedUserId !== userId || document.hidden) {
          setUnreadCounts(prev => ({ ...prev, [userId]: (prev[userId] || 0) + 1 }));
        }
        showBrowserNotification(userId, data.text);
        startTitleFlash();
      }
    });

    setSocket(newSocket);
    return () => { newSocket.close(); stopTitleFlash(); };
  }, [isAuthenticated, selectedUserId]);

  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
    sessionStorage.setItem('last_selected_user', userId);
    setUnreadCounts(prev => ({ ...prev, [userId]: 0 }));
    if (socket) socket.emit('get-user-history', userId);
    stopTitleFlash();
    // 모바일에서는 유저 선택 시 채팅창으로 화면 전환
    setShowList(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('비밀번호 오류');
      setPasswordInput('');
    }
  };

  const sendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && selectedUserId && inputValue.trim()) {
      socket.emit('message', { targetId: selectedUserId, text: inputValue });
      setMessages((prev) => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] || []), { user: '관리자', text: inputValue }]
      }));
      setInputValue('');
    }
  };

  const showBrowserNotification = (userId: string, text: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("🔔 새 메시지", { body: `${userId}: ${text}` });
    }
  };

  const startTitleFlash = () => {
    if (notificationInterval.current) return;
    notificationInterval.current = setInterval(() => {
      document.title = document.title.includes("［") ? "Admin" : "［새 메시지］";
    }, 800);
    window.addEventListener('focus', stopTitleFlash, { once: true });
  };

  const stopTitleFlash = () => {
    if (notificationInterval.current) {
      clearInterval(notificationInterval.current);
      notificationInterval.current = null;
      document.title = "Admin Dashboard";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <form onSubmit={handleLogin} className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border dark:border-slate-800 text-center w-full max-w-sm">
          <h1 className="text-xl font-black mb-6 uppercase tracking-widest">Admin Login</h1>
          <input 
            type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none mb-4 text-center text-xl outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••" autoFocus
          />
          <button type="submit" className="w-full bg-indigo-600 text-white font-black py-3 rounded-xl transition-all active:scale-95">ENTER</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden" onClick={stopTitleFlash}>
      
      {/* 1. 유저 리스트 사이드바 (모바일에서는 전체화면 토글) */}
      <div className={`
        ${showList ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        fixed inset-0 sm:relative sm:inset-auto z-30
        w-full sm:w-80 border-r dark:border-slate-800 bg-white dark:bg-slate-900 
        flex flex-col transition-transform duration-300 ease-in-out
      `}>
        <div className="p-5 font-black border-b dark:border-slate-800 flex justify-between items-center bg-indigo-600 text-white">
          <span>USERS</span>
          <span className="text-xs opacity-80">{userList.length} ONLINE</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {userList.map((user) => (
            <div 
              key={user.id} onClick={() => handleUserSelect(user.id)}
              className={`p-5 border-b dark:border-slate-800 cursor-pointer flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 ${selectedUserId === user.id ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-l-indigo-600' : ''}`}
            >
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 truncate">{user.id}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">{new Date(user.time).toLocaleTimeString()} 접속</p>
              </div>
              {unreadCounts[user.id] > 0 && (
                <div className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-red-500/30 ml-3 flex-shrink-0">
                  {unreadCounts[user.id]}
                </div>
              )}
            </div>
          ))}
          {userList.length === 0 && <div className="p-20 text-center text-xs text-slate-400">접속 유저 없음</div>}
        </div>
      </div>

      {/* 2. 메인 채팅창 (모바일 대응) */}
      <div className={`
        ${!showList ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'}
        fixed inset-0 sm:relative sm:inset-auto z-40 sm:z-10
        flex-1 flex flex-col bg-white dark:bg-slate-900 transition-transform duration-300 ease-in-out
      `}>
        {selectedUserId ? (
          <>
            <div className="p-4 sm:p-5 border-b dark:border-slate-800 flex items-center justify-between px-6 sm:px-8 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                {/* 모바일용 뒤로가기 버튼 */}
                <button onClick={() => setShowList(true)} className="sm:hidden text-indigo-600 font-bold text-sm">◀ LIST</button>
                <div className="hidden sm:block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-xs sm:text-sm tracking-tight truncate max-w-[120px] sm:max-w-none">{selectedUserId}</span>
              </div>
              <button onClick={() => {setSelectedUserId(null); setShowList(true);}} className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase">Exit</button>
            </div>
            
            <div className="flex-1 p-4 sm:p-8 overflow-y-auto space-y-6 bg-slate-50/50 dark:bg-slate-950/50 pb-20 sm:pb-8">
              {(messages[selectedUserId] || []).map((msg, i) => (
                <div key={i} className={`flex ${msg.user === '관리자' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[75%] p-3 sm:p-4 px-4 sm:px-5 rounded-3xl shadow-sm ${msg.user === '관리자' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-tl-none'}`}>
                    <p className="text-[13px] leading-relaxed font-medium">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendReply} className="p-4 sm:p-6 border-t dark:border-slate-800 flex gap-2 sm:gap-4 bg-white dark:bg-slate-900 pb-safe">
              <input 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white" 
                placeholder="Reply..." 
              />
              <button type="submit" className="bg-indigo-600 text-white px-6 sm:px-10 rounded-2xl font-black text-xs shadow-lg shadow-indigo-500/20 active:scale-95">SEND</button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-300 sm:bg-white dark:sm:bg-slate-900">
             {/* 모바일 리스트 강제 표시 버튼 (선택된 유저가 없을 때) */}
             <button onClick={() => setShowList(true)} className="sm:hidden bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-bold mb-4">유저 목록 보기</button>
             <span className="text-4xl sm:text-6xl mb-4 animate-bounce">💬</span>
             <p className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">Select a user</p>
          </div>
        )}
      </div>
    </div>
  );
}