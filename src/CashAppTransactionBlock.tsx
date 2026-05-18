import React, { useState } from 'react';

export default function CashAppTransactionBlock() {
  const [copiedCashtag, setCopiedCashtag] = useState(false);

  const CASHTAG = "$crodacroda";
  
  const handleCopyCashtag = () => {
    navigator.clipboard.writeText(CASHTAG);
    setCopiedCashtag(true);
    setTimeout(() => setCopiedCashtag(false), 2000);
  };

  return (
    <div className="border border-[#ff6b35] bg-[#0a0a0a] p-8 rounded-none relative shadow-[0_0_20px_rgba(255,107,53,0.1)] max-w-md w-full font-sans">
      
      <div className="absolute top-0 right-0 bg-[#ff6b35] text-[#000] font-mono text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
        SECURE TRANSFER
      </div>

      <div className="text-4xl text-white font-mono font-bold tracking-tighter mb-2 mt-2">
        $15.00 <span className="text-lg text-[#666]">USD</span>
      </div>
      
      <div className="h-px w-full bg-[#333] my-6"></div>

      <h3 className="text-xs text-white font-mono font-bold tracking-widest uppercase mb-4">
        CASH APP ROUTING PROTOCOL
      </h3>
      
      <ol className="flex flex-col gap-4 text-[12px] text-[#b0b0b0] font-mono mb-8">
        <li className="flex gap-3">
          <span className="text-[#ff6b35] font-bold">01.</span>
          <span>Initialize a $15 transfer via Cash App to the routing tag below.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#ff6b35] font-bold">02.</span>
          <span>
            <strong className="text-white">CRITICAL:</strong> You must place your <strong className="text-[#ff6b35]">Email Address</strong> in the "For" note of the transaction.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#ff6b35] font-bold">03.</span>
          <span>Upon verification, the secure URL and access key will be transmitted directly to that email.</span>
        </li>
      </ol>

      <div className="bg-[#000] border border-[#333] p-1 flex items-center justify-between mb-4">
        <span className="text-white font-mono font-bold text-lg pl-4 tracking-widest">
          {CASHTAG}
        </span>
        <button 
          onClick={handleCopyCashtag}
          className="bg-[#111] hover:bg-[#ff6b35] hover:text-[#000] text-[#ff6b35] border border-[#333] hover:border-[#ff6b35] px-4 py-3 text-[10px] font-mono font-bold tracking-widest uppercase transition-none rounded-none"
        >
          {copiedCashtag ? '[ TAG COPIED ]' : '[ COPY CASHTAG ]'}
        </button>
      </div>

      <div className="border border-[#333] bg-[#111] p-3 text-[10px] font-mono text-[#666] uppercase tracking-widest leading-relaxed rounded-none">
        <span className="text-[#ff6b35] font-bold">&gt;&gt; INSTANT ACCESS:</span> Upon payment verification. Verify email spelling before sending.
      </div>

    </div>
  );
}
