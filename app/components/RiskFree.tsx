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
                  src="/images/u2719761642_soulfull_--ar_169_--profile_bgltxuf_--v_7_6d76eff8-3950-44a0-8154-1ce15f87b674_1.png"
                  alt="Voice Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
