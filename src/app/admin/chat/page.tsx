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
  
  const notificationInterval = useRef<NodeJS.Timeout | null>(null);

  // 1. 초기 인증 및 마지막 선택 유저 복구
  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_auth');
    if (authStatus === 'true') setIsAuthenticated(true);
    
    const lastUser = sessionStorage.getItem('last_selected_user');
    if (lastUser) setSelectedUserId(lastUser);

    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // 2. 소켓 연결 및 데이터 동기화
  useEffect(() => {
    if (!isAuthenticated) return;

    const newSocket = io(SOCKET_URL, {
      path: '/socket.io',
      query: { isAdmin: 'true' },
      transports: ['polling', 'websocket'],
    });

    // 접속 성공 시, 마지막으로 보던 유저가 있다면 히스토리 즉시 요청
    newSocket.on('connect', () => {
      const lastUser = sessionStorage.getItem('last_selected_user');
      if (lastUser) {
        newSocket.emit('get-user-history', lastUser);
      }
    });

    newSocket.on('user-list', (list) => setUserList(list));
    
    newSocket.on('chat-history', (data) => {
      // 서버 응답 구조가 { targetId, history }인 경우와 일반 배열인 경우 모두 대응
      const targetId = data.targetId || selectedUserId;
      const history = data.history || data;
      
      setMessages((prev) => ({
        ...prev,
        [targetId]: history
      }));
    });

    newSocket.on('message', (data) => {
      const userId = data.from || data.targetId;
      if (!userId) return;

      setMessages((prev) => ({
        ...prev,
        [userId]: [...(prev[userId] || []), data]
      }));

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

  // --- 헬퍼 함수 ---
  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
    sessionStorage.setItem('last_selected_user', userId); // 새로고침 대비 저장
    setUnreadCounts(prev => ({ ...prev, [userId]: 0 }));
    if (socket) socket.emit('get-user-history', userId);
    stopTitleFlash();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('비밀번호가 틀렸습니다.');
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

  // 알림 로직 (생략 가능하지만 유지)
  const showBrowserNotification = (userId: string, text: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("🔔 새 메시지", { body: `${userId}: ${text}` });
    }
  };

  const startTitleFlash = () => {
    if (notificationInterval.current) return;
    notificationInterval.current = setInterval(() => {
      document.title = document.title.includes("［") ? "Admin Dashboard" : "［새 메시지 함］";
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

  // --- 렌더링 부 ---
  if (!isAuthenticated) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-slate-50 dark:bg-slate-950">
        <form onSubmit={handleLogin} className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border dark:border-slate-800 text-center max-w-md w-full">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-2xl font-black mb-6">ADMIN LOGIN</h1>
          <input 
            type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none mb-4 text-center text-2xl tracking-widest outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••" autoFocus
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95">ENTER</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white" onClick={stopTitleFlash}>
      {/* 사이드바 */}
      <div className="w-80 border-r dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shadow-sm">
        <div className="p-6 font-black border-b dark:border-slate-800 flex justify-between items-center">
          <span>USERS</span>
          <span className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-full">{userList.length} ONLINE</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {userList.map((user) => (
            <div 
              key={user.id} onClick={() => handleUserSelect(user.id)}
              className={`p-5 border-b dark:border-slate-800 cursor-pointer flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all ${selectedUserId === user.id ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-l-indigo-600' : ''}`}
            >
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 truncate">{user.id}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">{new Date(user.time).toLocaleTimeString()} 접속됨</p>
              </div>
              {unreadCounts[user.id] > 0 && (
                <div className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-red-500/30 ml-3">
                  {unreadCounts[user.id]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 메인 채팅창 */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900">
        {selectedUserId ? (
          <>
            <div className="p-5 border-b dark:border-slate-800 flex items-center justify-between px-8">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm tracking-tight">{selectedUserId}</span>
              </div>
              <button onClick={() => setSelectedUserId(null)} className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest">Exit</button>
            </div>
            
            <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-slate-50/50 dark:bg-slate-950/50">
              {(messages[selectedUserId] || []).map((msg, i) => (
                <div key={i} className={`flex ${msg.user === '관리자' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] p-4 px-5 rounded-3xl shadow-sm ${msg.user === '관리자' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-tl-none text-slate-800 dark:text-slate-100'}`}>
                    <p className="text-[13px] leading-relaxed font-medium">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendReply} className="p-6 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900">
              <input 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-900 dark:text-white" 
                placeholder="답장을 입력하세요..." 
              />
              <button type="submit" className="bg-indigo-600 text-white px-10 rounded-2xl font-black hover:bg-indigo-700 transition-all text-xs shadow-lg shadow-indigo-500/20 active:scale-95">SEND</button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-300 dark:text-slate-700">
            <span className="text-6xl mb-4 animate-bounce">💬</span>
            <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Select a user to start conversation</p>
          </div>
        )}
      </div>
    </div>
  );
}