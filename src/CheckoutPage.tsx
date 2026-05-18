import React from 'react';
import { useNavigate } from 'react-router-dom';
import CashAppTransactionBlock from './CashAppTransactionBlock';
import NavHeader from './NavHeader';

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavHeader label="STEP 01 // INITIALIZE TRANSFER" />

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">

        {/* Step label */}
        <div className="w-full max-w-md font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
          STEP 01 // INITIALIZE TRANSFER
        </div>

        {/* CashApp Payment Block */}
        <CashAppTransactionBlock />

        {/* Info note */}
        <div className="w-full max-w-md border border-[#333] bg-[#0a0a0a] p-4 font-mono text-[11px] text-[#888] uppercase tracking-wider leading-relaxed">
          <span className="text-[#ff6b35] font-bold">&gt;&gt; AFTER PAYMENT:</span> Use the{' '}
          <span className="text-white font-bold">[ ENTER ACCESS KEY ]</span> button (bottom-right of screen) to unlock your payload.
        </div>

      </div>
    </div>
  );
}
