import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import ModelShowcase from './TelemetryFeatureCycler';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const STAGGER = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const DeployButton: React.FC<{ label?: string; price?: string }> = ({
  label = "INITIALIZE DEPLOYMENT",
  price = "$15",
}) => {
  return (
    <div className="relative inline-flex">
      <span className="absolute inset-0 animate-ping bg-[#ff6b35] opacity-20 rounded-none" />
      <Link
        to="/checkout"
        className="relative group inline-flex items-center justify-between border-2 border-[#ff6b35] bg-[#ff6b35] px-8 py-4 uppercase tracking-[0.2em] text-black font-bold transition-none hover:bg-black hover:text-[#ff6b35] w-full md:w-auto"
      >
        <span className="font-bold text-sm tracking-widest">{label}</span>
        <span className="ml-8 border-l border-black/40 pl-4 text-sm font-mono group-hover:border-[#ff6b35]/40">
          {price}
        </span>
      </Link>
    </div>
  );
};

const ERROR_LOGS = [
  { id: "ERR_01", title: "CENSORSHIP PROTOCOLS", desc: "Arbitrary prompt filtering and hardcoded restrictions bottleneck output." },
  { id: "ERR_02", title: "TOKEN DRAIN", desc: "Slow queues and daily credit caps punish experimentation and refinement." },
  { id: "ERR_03", title: "INCONSISTENT OUTPUTS", desc: "Unpredictable results from generic SaaS wrappers built for mass appeal." },
  { id: "ERR_04", title: "PRIVACY LEAK", desc: "Loss of control over generations and concepts on remote corporate servers." },
];

const SystemErrors: React.FC = () => {
  return (
    <div className="w-full border-t border-b border-white/20 font-mono text-sm mt-8">
      {ERROR_LOGS.map((log) => (
        <div key={log.id} className="flex flex-col md:flex-row border-b border-white/20 last:border-0 hover:bg-[#111] transition-none p-4">
          <div className="md:w-32 text-white/50 mb-2 md:mb-0">
            [{log.id}]
          </div>
          <div className="md:w-64 font-bold text-white uppercase tracking-wider mb-2 md:mb-0">
            {log.title}
          </div>
          <div className="flex-1 text-white/80">
            {log.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

const INFRA_DATA = [
  {
    layer: "DRAW THINGS (LOCAL)",
    target: "iOS & macOS / Unlimited",
    specs: "Full offline execution on iPhone, iPad, and Mac, direct Civitai integration, Flux.2 + Z Image Turbo + Wan video, advanced img2img/inpainting, LoRA training. No credit limits — generate as much as you want."
  },
  {
    layer: "GOOGLE COLAB (CLOUD)",
    target: "Heavy Batches / Stress Testing",
    specs: "Free high-tier GPU allocation (T4/V100), ComfyUI asynchronous workflows, scaled Flux.2 runs. No credit system — unlimited compute at zero cost."
  }
];

const ArchitectureTable: React.FC = () => {
  return (
    <div className="w-full border border-white mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white bg-white text-black font-bold uppercase text-xs tracking-widest p-3">
        <div className="md:col-span-3">INFRASTRUCTURE</div>
        <div className="md:col-span-3 mt-2 md:mt-0">DEPLOYMENT TARGET</div>
        <div className="md:col-span-6 mt-2 md:mt-0">CAPABILITIES UNLOCKED</div>
      </div>
      
      {INFRA_DATA.map((row, idx) => (
        <div 
          key={idx} 
          className="grid grid-cols-1 md:grid-cols-12 border-b border-white/20 last:border-0 p-4 text-sm font-mono hover:bg-[#111]"
        >
          <div className="md:col-span-3 text-white font-bold mb-2 md:mb-0">
            {row.layer}
          </div>
          <div className="md:col-span-3 text-white/60 mb-2 md:mb-0">
            {row.target}
          </div>
          <div className="md:col-span-6 text-white/90 leading-relaxed">
            {row.specs}
          </div>
        </div>
      ))}
    </div>
  );
};

const CURRICULUM = [
  { num: "01", title: "ENVIRONMENT INITIALIZATION", desc: "Draw Things setup on iOS (iPhone/iPad) and macOS, model manager, memory optimization for all supported devices." },
  { num: "02", title: "MODEL SELECTION & ROUTING", desc: "When and how to deploy Flux.2, Z Image Turbo, Juggernaut Z-Image / Ragnarok, Fluxxxed Up variants, Pony, Demon Core NSFW, and Qwen." },
  { num: "03", title: "PROMPT ARCHITECTURE", desc: "Technical prompting, CFG scales, step counts, seeding, and negative prompts optimized for these models." },
  { num: "04", title: "IMG2IMG & INPAINTING MASTERY", desc: "Load clothed references → precise clothing removal, body edits, pose/lighting control while preserving faces." },
  { num: "05", title: "ADVANCED CONTROL", desc: "LoRA stacking, ControlNet, masking tricks, and custom fine-tunes." },
  { num: "06", title: "IMAGE-TO-VIDEO WORKFLOWS", desc: "Wan 2.2 and compatible models for turning static images into short NSFW clips + chaining techniques." },
  { num: "07", title: "HYBRID OPTIMIZATION & TROUBLESHOOTING", desc: "Switching to free Colab, UI quirks, crash fixes, batch processing, and maximizing throughput." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans leading-relaxed flex flex-col items-center">
      
      {/* Top Banner */}
      <div className="w-full border-b border-white/20 bg-black text-center py-3 px-4 uppercase tracking-[0.2em] text-xs font-mono text-white/60">
        UNLIMITED FREE IMAGE &amp; VIDEO GENERATION // iOS + macOS LOCAL DEPLOY // FREE UNLIMITED CLOUD COMPUTE
      </div>

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col min-h-screen">
        
        {/* Hero Section */}
        <motion.section 
          className="py-24 md:py-32 border-b border-white/20 flex flex-col items-start"
          initial="initial"
          animate="animate"
          variants={STAGGER}
        >
          <motion.div variants={FADE_UP} className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-black text-white/70 font-mono text-xs uppercase tracking-widest">
            <Terminal size={14} className="text-white" />
            <span>&gt;_ DEPLOYMENT PROTOCOL INITIATED</span>
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-8 text-white">
            Free. Unlimited.<br />
            <span className="text-white/40">Image &amp; Video</span><br />
            Generation.
          </motion.h1>
          
          <motion.div variants={FADE_UP} className="w-full h-[1px] bg-white/20 mb-8" />
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-white/70 max-w-3xl mb-12 font-medium leading-snug">
            A complete technical guide to running uncensored AI image and video generation locally on iOS and macOS — with free unlimited cloud compute on Google Colab. No credits. No subscriptions. No filters. No one watching.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="w-full flex">
            <DeployButton label="INITIALIZE DEPLOYMENT" />
          </motion.div>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          className="py-20 md:py-24 border-b border-white/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">The Credit-Based Compute Trap Is Over.</h2>
          <p className="text-white/60 font-mono text-sm leading-relaxed max-w-2xl">
            Monthly fees, token limits, heavy censorship, and privacy leaks from cloud platforms are no longer necessary. Generate unlimited images and videos — free, locally on iOS and macOS, and free on the cloud.
          </p>
          
          <SystemErrors />
        </motion.section>

        {/* System Capabilities Slideshow */}
        <section className="py-20 md:py-24 border-b border-white/20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">What You'll Deploy</h2>
            <p className="text-white/60 font-mono text-sm">Live System Feed</p>
          </div>
          <ModelShowcase />
        </section>

        {/* Architecture Table */}
        <section className="py-20 md:py-24 border-b border-white/20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">The Architecture</h2>
            <p className="text-white/60 font-mono text-sm">Deployment Options</p>
          </div>
          
          <ArchitectureTable />
        </section>

        {/* Curriculum List */}
        <motion.section
          className="py-20 md:py-24 border-b border-white/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Core Curriculum</h2>
            <p className="text-white/60 font-mono text-sm leading-relaxed mb-6">Video + Technical Manual Breakdown</p>
            
            <div className="border border-white/20 bg-[#111] p-4 inline-block">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-white border-b border-white/20 pb-2">
                DELIVERABLES
              </h4>
              <ul className="space-y-2 font-mono text-xs text-white/60">
                <li>[+] 5-7 clear screen-recorded videos (~50-70 mins)</li>
                <li>[+] Detailed technical PDF manual</li>
                <li>[+] Curated list of best-performing models/LoRAs</li>
                <li>[+] Ready-to-run Colab notebook links</li>
                <li>[+] Personal follow-up support</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full border-t border-white/20 font-mono text-sm">
            {CURRICULUM.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row border-b border-white/20 border-l-4 border-l-transparent hover:border-l-[#ff6b35] p-6 hover:bg-[#111] transition-none pl-5">
                <div className="md:w-16 font-bold text-white/40 mb-2 md:mb-0">
                  {item.num}
                </div>
                <div className="md:w-72 font-bold text-white uppercase tracking-wider pr-4 mb-2 md:mb-0">
                  {item.title}
                </div>
                <div className="flex-1 text-white/70 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Footer / Final CTA */}
      <footer id="checkout" className="w-full border-t flex flex-col border-white/20 py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center">
          <Terminal size={32} className="text-white/40 mb-8" />
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6 text-white leading-none">
            Free. Unlimited.<br/>Generate Forever.
          </h2>
          <p className="text-lg text-white/60 font-mono mb-12 max-w-2xl">
            Deploy locally on iOS and macOS. Scale free on the cloud. No credits. No limits. Generate as much as you want.
          </p>

          <div className="relative inline-flex mb-4">
            <span className="absolute inset-0 animate-ping bg-[#ff6b35] opacity-20 rounded-none" />
            <Link
              to="/checkout"
              className="relative inline-flex items-center justify-between border-2 border-[#ff6b35] bg-[#ff6b35] px-10 py-5 uppercase tracking-[0.2em] text-black font-bold transition-none hover:bg-black hover:text-[#ff6b35] text-sm"
            >
              <span className="font-bold tracking-widest">GET INSTANT ACCESS</span>
              <span className="ml-8 border-l border-black/40 pl-4 font-mono hover:border-[#ff6b35]/40">$15</span>
            </Link>
          </div>
          <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-16">One-time payment · Instant access</p>
          
          <div className="border border-white/20 p-4 text-xs font-mono text-white/50 text-left w-full max-w-2xl mx-auto bg-[#111]">
            <span className="text-white font-bold tracking-widest">WARNING // LEGAL & RESPONSIBLE USE NOTE:</span><br/>
            For consenting adult and fictional characters only. Always follow applicable laws regarding generated content.
          </div>
        </div>
      </footer>
    </div>
  );
}
