// src/components/layout/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  const menuItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tighter">
          RYU.DEV
        </Link>
        
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all">
          Resume
        </button>
      </div>
    </nav>
  );
}