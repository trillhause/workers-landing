import React from 'react';
import Image from 'next/image';

export function RiskFree() {
  return (
    <section id="testing" className="py-24 bg-black pb-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full animate-pulse bg-orange-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Testing</span>
          </div>
          
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-2xl font-medium">Experiment without risk</h3>
                </div>
                <p className="text-zinc-400 mb-8 leading-relaxed">
Before handing over the keys, run your agents in Simulation Mode. Watch how they would handle real incoming requests.
                </p>
              </div>
              <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-[600px]">
                <Image
                  src="/images/experimentation.png"
                  alt="Voice Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/50" />
                
                {/* Overlay UI Mockup */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full max-w-md mx-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 pointer-events-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-sm">Simulation Mode</div>
                          <div className="text-[10px] text-zinc-400">Safe experimentation environment</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-1 rounded">Active</span>
                    </div>

                    <div className="space-y-2 font-mono text-[10px]">
                        <div className="p-2 bg-zinc-950/50 rounded border border-zinc-800/50 text-zinc-500">
                          <span className="text-blue-400">INCOMING:</span> "Update the production database schema."
                        </div>
                        <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                          <span className="text-orange-400">ANALYSIS:</span> Detected high-risk keyword "production".
                        </div>
                        <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                          <span className="text-orange-400">ACTION:</span> <span className="line-through opacity-50">Execute SQL Query</span>
                        </div>
                        <div className="p-2 bg-red-500/10 rounded border border-red-500/20 text-red-300">
                          <span className="text-red-400">SAFETY:</span> Action intercepted. Requires manual approval in Simulation Mode.
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
