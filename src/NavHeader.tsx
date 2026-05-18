import React from 'react';
import { Link } from 'react-router-dom';

interface NavHeaderProps {
  label?: string;
}

export default function NavHeader({ label = 'IMAGEGEN_PROTOCOL' }: NavHeaderProps) {
  return (
    <nav className="w-full border-b border-[#333] bg-[#0a0a0a] flex items-center justify-between px-6 h-11 font-mono text-[10px] uppercase tracking-widest sticky top-0 z-30">
      <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-[#ff6b35] transition-none">
        <span className="text-[#ff6b35]">←</span> HOME
      </Link>
      <span className="text-white/20 hidden sm:block">{label}</span>
      <div className="w-16" />
    </nav>
  );
}
