import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-8 gap-6">
      <div className="text-[#ff6b35] text-[10px] tracking-[0.3em] uppercase border border-[#ff6b35]/30 px-3 py-1">
        ERR_404 // ROUTE_NOT_FOUND
      </div>
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none">
        404
      </h1>
      <p className="text-white/40 text-xs tracking-widest uppercase text-center max-w-sm leading-relaxed">
        This path does not exist in the current deployment. Check your routing parameters.
      </p>
      <Link
        to="/"
        className="mt-4 border border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-black px-8 py-3 text-[10px] font-bold tracking-widest uppercase transition-none"
      >
        [ RETURN TO BASE ]
      </Link>
    </div>
  );
}
