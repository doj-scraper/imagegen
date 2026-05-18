import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ACCESS_KEY = 'PAYLOAD2026';

export default function AccessGateway() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Already on payload — no need to show the gateway
  if (location.pathname === '/payload') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === ACCESS_KEY) {
      setOpen(false);
      setKey('');
      navigate('/payload');
    } else {
      setError('ERR_AUTH_FAILED: Invalid access key.');
      setKey('');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setKey('');
    setError('');
  };

  return (
    <>
      {/* Floating persistent button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 border border-[#ff6b35] bg-black px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff6b35] hover:bg-[#ff6b35] hover:text-black transition-none shadow-[0_0_20px_rgba(255,107,53,0.25)]"
      >
        <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse group-hover:bg-black" />
        [ ENTER ACCESS KEY ]
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="w-full max-w-md border border-[#333] bg-[#0a0a0a] p-8 relative">

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 font-mono text-[10px] text-[#666] hover:text-white uppercase tracking-widest transition-none"
            >
              [ ESC ]
            </button>

            <div className="text-[10px] text-[#888] font-mono tracking-[0.2em] uppercase border-b border-[#333] pb-3 mb-6">
              RESTRICTED INFRASTRUCTURE // ENTER ACCESS KEY
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="gateway-key" className="text-[10px] text-[#ff6b35] font-mono font-bold tracking-widest uppercase">
                  &gt;&gt; ACCESS KEY
                </label>
                <input
                  id="gateway-key"
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="bg-[#000] border border-[#444] text-white p-3 outline-none focus:border-[#ff6b35] font-mono text-sm rounded-none"
                  autoComplete="off"
                  autoFocus
                  placeholder="••••••••••••"
                />
              </div>

              {error && (
                <div className="text-[#ff6b35] text-[10px] border border-[#ff6b35] bg-[#ff6b35]/10 p-3 font-mono uppercase tracking-wider">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="bg-[#111] hover:bg-[#ff6b35] text-white hover:text-black border border-[#333] hover:border-[#ff6b35] p-3 text-[10px] font-mono font-bold tracking-widest uppercase transition-none rounded-none"
              >
                [ INITIALIZE DECRYPTION ]
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
