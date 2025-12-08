'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function Onboarding() {
  const [activeGoLiveStep, setActiveGoLiveStep] = useState<string>("Step 1");

  return (
    <section id="onboarding" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Onboarding</span>
          </div>
          <div 
            className="bg-zinc-900/30 border border-zinc-800 rounded-md overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-8 relative min-h-[700px] order-2 lg:order-1">
                <Image
                  src="/images/onboarding.png"
                  alt="Agent Canvas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80" />
                
                {/* Dynamic Overlay UI */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-full max-w-md mx-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-xl p-6 shadow-2xl transition-all duration-500 ${activeGoLiveStep ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    
                    {activeGoLiveStep === 'Step 1' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Upload Knowledge</div>
                            <div className="text-[10px] text-zinc-400">Processing 3 documents...</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                           <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                              <div className="w-6 h-8 bg-zinc-700 rounded-sm flex items-center justify-center">
                                <span className="text-[8px] text-zinc-400 font-mono">PDF</span>
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-zinc-300">Support_Policy_v2.pdf</span>
                                    <span className="text-[10px] text-green-400">Done</span>
                                 </div>
                                 <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-green-500 rounded-full" />
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                              <div className="w-6 h-8 bg-zinc-700 rounded-sm flex items-center justify-center">
                                <span className="text-[8px] text-zinc-400 font-mono">DOC</span>
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-zinc-300">Refund_Process.docx</span>
                                    <span className="text-[10px] text-cyan-400">Parsing...</span>
                                 </div>
                                 <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-cyan-500 rounded-full animate-pulse" />
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                    )}

                    {activeGoLiveStep === 'Step 2' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-6">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Shadow Mode</div>
                                <div className="text-[10px] text-zinc-400">Simulating responses</div>
                              </div>
                           </div>
                           <span className="text-[10px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-1 rounded">Test</span>
                        </div>
                        <div className="space-y-2 font-mono text-[10px]">
                           <div className="p-2 bg-zinc-950/50 rounded border border-zinc-800/50 text-zinc-500">
                              <span className="text-blue-400">INCOMING:</span> "How do I reset my password?"
                           </div>
                           <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                              <span className="text-green-400">AGENT (SHADOW):</span> "I can help with that. Go to Settings &gt; Security &gt; Reset Password."
                           </div>
                           <div className="flex items-center gap-2 mt-2">
                              <div className="h-px bg-zinc-800 flex-1" />
                              <span className="text-zinc-600">Match Score: 99%</span>
                              <div className="h-px bg-zinc-800 flex-1" />
                           </div>
                        </div>
                      </div>
                    )}

                    {activeGoLiveStep === 'Step 3' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-8">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium text-sm">System Active</div>
                                <div className="text-[10px] text-zinc-400">Autonomous mode enabled</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-1.5">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                              </span>
                              <span className="text-[10px] text-green-400 font-medium">Online</span>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                           <div className="p-3 bg-zinc-800/30 rounded-lg border border-zinc-800 text-center">
                              <div className="text-2xl font-light text-white mb-1">128</div>
                              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Tickets Solved</div>
                           </div>
                           <div className="p-3 bg-zinc-800/30 rounded-lg border border-zinc-800 text-center">
                              <div className="text-2xl font-light text-white mb-1">1.2s</div>
                              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Avg Response</div>
                           </div>
                        </div>
                        <button className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-zinc-200 transition-colors">
                           View Dashboard
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[700px] order-1 lg:order-2">
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-medium">Go Live in a week</h3>
                  </div>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Bypass months of engineering. Our builder empowers all teams to instantly transform existing documentation into fully active agents.
                  </p>
                </div>

                <div className="flex flex-col">
                  {[
                    {
                      id: 'Step 1',
                      time: 'Day 1-2',
                      title: 'Upload & Configure',
                      description: 'Autogenerate policies for agents by uploading documents and API specs. Ask Orion (our built-in co-pilot) to fine-tune exisint agent policies.',
                      color: 'bg-cyan-500'
                    },
                    {
                      id: 'Step 2',
                      time: 'Day 3-6',
                      title: 'Test & Simulate',
                      description: 'Run the agent in "shadow mode" on live channels. It processes real data without sending messages, allowing you to verify behavior.',
                      color: 'bg-yellow-500'
                    },
                    {
                      id: 'Step 3',
                      time: 'Day 7',
                      title: 'Go Live',
                      description: 'Once validated, switch to autonomous mode. Your agent starts working immediately, handling the workload you assigned.',
                      color: 'bg-green-500'
                    }
                  ].map((item) => (
                    <div 
                      key={item.id} 
                      className={`cursor-pointer transition-all duration-300 group border-t border-zinc-800 p-6 -mt-px first:mt-0 ${activeGoLiveStep === item.id ? 'bg-zinc-900/50 relative z-10' : 'hover:bg-zinc-900/30'}`}
                      onClick={() => setActiveGoLiveStep(item.id)}
                      onMouseEnter={() => setActiveGoLiveStep(item.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeGoLiveStep === item.id ? item.color : 'bg-zinc-600'}`} />
                        <h4 className="text-xl font-medium">{item.title}</h4>
                        <span className={`text-[10px] ${activeGoLiveStep === item.id ? `${item.color}/20 text-${item.color.split('-')[1]}-400 border-${item.color.split('-')[1]}-500/20` : 'bg-zinc-800/50 text-zinc-400 border-zinc-700/50'} px-1.5 py-0.5 rounded`}>{item.time}</span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeGoLiveStep === item.id ? 'h-24 opacity-100' : 'h-0 opacity-0'}`}>
                        <p className="text-zinc-400 leading-relaxed pl-4.5 text-sm pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
