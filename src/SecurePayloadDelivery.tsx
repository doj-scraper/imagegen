import React, { useState } from 'react';
import NavHeader from './NavHeader';

const QUICKSTART_STEPS = [
  {
    num: '01',
    title: 'DOWNLOAD THE APP',
    body: 'Open the App Store on your iPhone or iPad. Search for "Draw Things" (by Draw Things AI) and install it. It\'s free.',
  },
  {
    num: '02',
    title: 'FIRST LAUNCH — SKIP INITIAL SETUP',
    body: 'Open the app. Cancel or skip any prompts to initialize/download models right away. Do not download anything yet.',
  },
  {
    num: '03',
    title: 'ACCESS THE MAIN INTERFACE',
    body: 'Go to the Canvas window (main generation screen). Tap the top left area to open the left shelf/menu.',
  },
  {
    num: '04',
    title: 'ACTIVATE FREE CLOUD COMPUTE',
    body: 'On the far left sidebar (bottom section), look for three squares (stacked icon). Tap the bottom one to open compute/server options. Sign in with your Apple ID (no payment required). Choose the Community / Free server option. This gives you free compute units — most generations cost 1,000–9,000 units, so you get plenty per day.',
  },
];

const CENSORSHIP_LEVELS = [
  { label: 'MILDLY UNCENSORED', desc: 'Good for solo posing/nudes but may refuse heavy explicit content or interactions.' },
  { label: 'STRONG POSING / NSFW', desc: 'Handles solo explicit poses well but struggles with multi-person interactions.' },
  { label: 'FULLY UNCENSORED', desc: 'Generates almost any explicit scene, fetish, or interaction with good prompting + correct LoRAs.' },
];

const RECOMMENDED_MODELS = [
  { name: 'GONZALOMO FLUX PONY', desc: 'Excellent all-rounder. Strong photorealism + Pony flexibility. Great base for NSFW.' },
  { name: 'REDCRAFT NSFW + AMATEUR PHOTOGRAPHY LORA', desc: 'Produces realistic, natural-looking explicit photos. Highly recommended for undress-style edits and authentic skin/details.' },
  { name: 'OTHER STRONG STARTERS', desc: 'Flux.2 variants, Z Image Turbo, Juggernaut Ragnarok / Z-Image, Fluxxxed Up fine-tunes, Pony Diffusion models.' },
];

function QuickStartGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#333] bg-[#0a0a0a] rounded-none mt-8">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-6 font-mono text-left group"
      >
        <div>
          <div className="text-[10px] text-[#ff6b35] tracking-[0.2em] uppercase mb-1">QUICK START GUIDE</div>
          <div className="text-white font-bold uppercase tracking-tight text-sm">Draw Things on iOS — Unlimited Free Generation</div>
        </div>
        <span className="text-[#ff6b35] text-xl font-bold ml-4">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="border-t border-[#333] p-6 flex flex-col gap-8 font-mono text-[13px]">

          {/* Steps */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">SETUP STEPS</h3>
            <div className="flex flex-col gap-4">
              {QUICKSTART_STEPS.map(s => (
                <div key={s.num} className="flex gap-4">
                  <span className="text-[#ff6b35] font-bold w-8 flex-shrink-0">{s.num}.</span>
                  <div>
                    <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-1">{s.title}</div>
                    <div className="text-[#999] leading-relaxed">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Censorship Levels */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">MODEL CENSORSHIP LEVELS</h3>
            <div className="flex flex-col gap-3">
              {CENSORSHIP_LEVELS.map(c => (
                <div key={c.label} className="flex gap-4 border-l-2 border-[#ff6b35]/40 pl-3">
                  <div>
                    <div className="text-white font-bold text-[11px] uppercase tracking-wider mb-1">{c.label}</div>
                    <div className="text-[#999]">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[#666] text-[11px]">Tip: Start with versatile models and add LoRAs for more control.</div>
          </div>

          {/* LoRA explanation */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">WHAT ARE LORAS?</h3>
            <p className="text-[#999] leading-relaxed mb-2">
              <span className="text-white font-bold">LoRA = Low-Rank Adaptation.</span> Small lightweight add-ons (10–200 MB) that teach a base model new styles, characters, bodies, or effects without replacing the whole model.
            </p>
            <p className="text-[#999] leading-relaxed">Think of them as specialized plugins — load a strong base model + one or more LoRAs. Great for boosting NSFW quality, anatomy, specific aesthetics, or consistency.</p>
          </div>

          {/* How to find models */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">HOW TO FIND & ADD MODELS / LORAS</h3>
            <p className="text-[#999] leading-relaxed">Use the built-in Civitai browser in Draw Things (search directly in the app) or visit <span className="text-white">Civitai.com</span> / <span className="text-white">Civitai.red</span> in Safari. Download models/LoRAs → import into Draw Things (the app handles this smoothly via links or files).</p>
          </div>

          {/* Recommended models */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">RECOMMENDED MODELS & LORAS</h3>
            <div className="flex flex-col gap-3">
              {RECOMMENDED_MODELS.map((m, i) => (
                <div key={m.name} className="flex gap-4">
                  <span className="text-[#ff6b35] font-bold w-6 flex-shrink-0">{i + 1}.</span>
                  <div>
                    <div className="text-white font-bold text-[11px] uppercase tracking-wider mb-1">{m.name}</div>
                    <div className="text-[#999]">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test prompt */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">QUICK TEST PROMPT</h3>
            <div className="bg-[#000] border border-[#333] p-4 text-[#ff6b35] leading-relaxed">
              "solo female, detailed skin, natural lighting, bedroom, nude, seductive pose, amateur photography style"
            </div>
            <div className="text-[#666] text-[11px] mt-2">Add the Amateur Photography LoRA at 0.7–1.0 strength for better realism.</div>
          </div>

          {/* Next steps */}
          <div>
            <h3 className="text-[10px] text-[#888] tracking-widest uppercase border-b border-[#333] pb-2 mb-4">NEXT STEPS</h3>
            <ul className="flex flex-col gap-2 text-[#999]">
              <li>[+] Download a base model (e.g., Flux or Pony variant) via the in-app browser.</li>
              <li>[+] Try simple text-to-image first.</li>
              <li>[+] Move to img2img and Inpainting for targeted edits — load a clothed photo → mask clothes → prompt "nude, bare skin…"</li>
              <li>[+] Experiment with denoising strength 0.6–0.85 for big changes.</li>
              <li>[+] Use lighter/quantized model versions if you hit memory limits on iOS.</li>
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

interface VideoModule {
  id: string;
  title: string;
  duration: string | 'TBD';
  url: string;
  status: 'AVAILABLE' | 'PENDING';
}

const VIDEO_MODULES: VideoModule[] = [
  { id: '01', title: 'ENVIRONMENT INITIALIZATION & MAC MEMORY CONFIG', duration: 'TBD', url: '#', status: 'PENDING' },
  { id: '02', title: 'BASE WEIGHT ROUTING (FLUX.2 & JUGGERNAUT)', duration: 'TBD', url: '#', status: 'PENDING' },
  { id: '03', title: 'STRUCTURAL PROMPTING PROTOCOLS', duration: 'TBD', url: '#', status: 'PENDING' },
  { id: '04', title: 'IMG2IMG & PIXEL REPLACEMENT MASTERY', duration: 'TBD', url: '#', status: 'PENDING' },
  { id: '05', title: 'CONTROLNET STACKING ARCHITECTURE', duration: 'TBD', url: '#', status: 'PENDING' },
];

export default function SecurePayloadDelivery() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e0e0e0] font-sans">
      <NavHeader label="DEPLOYMENT PAYLOAD" />
      <div className="p-4 md:p-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="border-b border-[#333] pb-4 mb-12 flex flex-col md:flex-row md:justify-between md:items-end font-mono gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl text-white font-bold tracking-tighter uppercase mb-2">
              DEPLOYMENT PAYLOAD
            </h1>
            <div className="text-xs text-[#ff6b35] tracking-[0.2em] uppercase">
              STATUS: PHASE 1 AUTHORIZED // PARTIAL SYSTEM ACCESSIBLE
            </div>
          </div>
          <div className="text-xs text-[#666] tracking-[0.1em] border border-[#333] px-3 py-1">
            LOCAL + HYBRID CAPABILITY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN: DOCUMENTATION, LINKS & ASSETS */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* OMNIBUS MANUAL */}
            <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded-none">
              <h2 className="text-xs text-white font-mono font-bold tracking-widest uppercase border-b border-[#333] pb-3 mb-4">
                CORE DOCUMENTATION
              </h2>
              <div className="flex flex-col gap-3 font-mono text-[13px]">
                <a href="/downloads/OMNIBUS-FINAL-cece.pdf" target="_blank" rel="noopener noreferrer" className="group text-[#ff6b35] border border-[#ff6b35]/40 hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 p-2 -mx-2 transition-none flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] opacity-60">↓</span>
                    DEPLOYMENT_PROTOCOL_OMNIBUS_2026.PDF
                  </span>
                  <span className="text-[#00FF00] text-[10px]">ONLINE</span>
                </a>
              </div>
            </div>

            {/* EXTERNAL REFERENCES */}
            <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded-none">
              <h2 className="text-xs text-white font-mono font-bold tracking-widest uppercase border-b border-[#333] pb-3 mb-4">
                EXTERNAL INFRASTRUCTURE LINKS
              </h2>
              <div className="flex flex-col gap-4 font-mono text-[11px] uppercase tracking-wider">
                <a href="https://github.com/camenduru/comfyui-colab" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-[#ff6b35]/40 hover:border-[#ff6b35] pl-3 transition-none">
                  <div className="text-white group-hover:text-[#ff6b35] mb-1">BASE COMPUTE // COMFYUI COLAB KERNEL</div>
                  <div className="text-[#ff6b35]/50 group-hover:text-[#ff6b35] break-all">github.com/camenduru/comfyui-colab</div>
                </a>
                <a href="https://github.com/ltdrdata/ComfyUI-Manager" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-[#ff6b35]/40 hover:border-[#ff6b35] pl-3 transition-none">
                  <div className="text-white group-hover:text-[#ff6b35] mb-1">PACKAGE MANAGER // COMFYUI MANAGER</div>
                  <div className="text-[#ff6b35]/50 group-hover:text-[#ff6b35] break-all">github.com/ltdrdata/ComfyUI-Manager</div>
                </a>
                <a href="https://civitai.com/models/133005?modelVersionId=357609" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-[#ff6b35]/40 hover:border-[#ff6b35] pl-3 transition-none">
                  <div className="text-white group-hover:text-[#ff6b35] mb-1">THE PHOTOREALISM ENGINE // JUGGERNAUT RAGNAROK</div>
                  <div className="text-[#ff6b35]/50 group-hover:text-[#ff6b35] break-all">civitai.com/models/... [REDIRECT]</div>
                </a>
                <a href="https://civitai.com/models/257749?modelVersionId=290640" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-[#ff6b35]/40 hover:border-[#ff6b35] pl-3 transition-none">
                  <div className="text-white group-hover:text-[#ff6b35] mb-1">THE STRUCTURAL ENGINE // PONY DIFFUSION V6 XL</div>
                  <div className="text-[#ff6b35]/50 group-hover:text-[#ff6b35] break-all">civitai.com/models/... [REDIRECT]</div>
                </a>
              </div>
            </div>

            {/* ECOSYSTEM DIRECTORY */}
            <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded-none mt-8">
              <h2 className="text-xs text-white font-mono font-bold tracking-widest uppercase border-b border-[#333] pb-3 mb-4">
                EXTENDED ARCHITECTURE
              </h2>
              <p className="text-xs text-[#888] font-mono mb-4 leading-relaxed">
                Access the complete master list of verified ComfyUI custom nodes, extensions, and front-end wrappers for advanced system scaling.
              </p>
              <a
                href="/payload/extensions"
                className="block text-center border border-[#ff6b35]/50 text-[#ff6b35] hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-none rounded-none"
              >
                [ ACCESS COMFYUI EXTENSION DIRECTORY ]
              </a>
            </div>

            {/* ROUTING ARCHITECTURE */}
            <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded-none">
              <h2 className="text-xs text-white font-mono font-bold tracking-widest uppercase border-b border-[#333] pb-3 mb-4">
                COLAB ROUTING INJECTION
              </h2>
              <a
                href="/downloads/DEPLOYMENT_PROTOCOL_BASE.json"
                download
                className="block text-center border border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-black py-3 text-xs font-mono font-bold tracking-widest uppercase transition-none rounded-none"
              >
                [ DOWNLOAD .JSON NODE GRAPH ]
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: VIDEO MODULES */}
          <div className="lg:col-span-7 border border-[#333] bg-[#0a0a0a] p-6 rounded-none flex flex-col">
            {/* Prominent pending notice */}
            <div className="border border-[#ff6b35] bg-[#ff6b35]/10 p-4 mb-6 font-mono text-[11px] text-[#ff6b35] uppercase tracking-wider leading-relaxed">
              <span className="font-bold text-white">&gt;&gt; VIDEO STATUS: COMPILING</span><br />
              All PDF manuals, Colab configs, and resource links are live and ready now. The video modules are finalizing on secure infrastructure. You will receive an email with direct access links as soon as each module goes live.
            </div>
            <div className="border-b border-[#333] pb-3 mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-2">
              <h2 className="text-xs text-white font-mono font-bold tracking-widest uppercase">
                EXECUTION VIDEOS // CORE CURRICULUM
              </h2>
              <span className="text-[10px] font-mono text-[#888] bg-[#222] px-2 py-1 uppercase tracking-widest">
                COMPILE STATE: IN PROGRESS
              </span>
            </div>

            <div className="flex flex-col flex-1">
              {VIDEO_MODULES.map((video) => (
                <div key={video.id} className="group border-b border-[#222] last:border-0 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 font-mono opacity-60">
                    <span className="text-[#666] font-bold">[{video.id}]</span>
                    <span className="text-[#888] text-sm uppercase">{video.title}</span>
                  </div>
                  <div className="flex items-center gap-6 font-mono text-xs">
                    <span className="text-[#444]">{video.duration}</span>
                    {video.status === 'PENDING' ? (
                      <span className="border border-[#333] bg-[#111] px-3 py-1 text-[#666] uppercase whitespace-nowrap">
                        PENDING
                      </span>
                    ) : (
                      <a href={video.url} className="border border-[#444] px-3 py-1 text-[#888] hover:border-[#ff6b35] hover:text-[#ff6b35] whitespace-nowrap">
                        EXECUTE ▶
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-4 text-[11px] font-mono text-[#ff8c5a] uppercase leading-relaxed rounded-none">
              <span className="font-bold text-[#ff6b35]">&gt;&gt; SYSTEM NOTICE:</span> All PDF architectures and Colab deployment parameters are fully operational and available for immediate extraction. The visual execution modules are currently compiling on secure infrastructure. You will receive an automated transmission containing the direct access links as soon as they mount.
            </div>

          </div>

        </div>

        <QuickStartGuide />

      </div>
      </div>
    </div>
  );
}
