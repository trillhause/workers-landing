'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function AgentMechanics() {
  const [activeAccordion, setActiveAccordion] = useState<string>('Monitor');

  return (
    <section id="mechanics" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Agent Mechanics</span>
              </div>
          <div 
            className="bg-zinc-900/30 border border-zinc-800 rounded-md overflow-hidden"
            // onMouseLeave={() => setActiveAccordion(null)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[700px]">
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-medium">Make Slack AI Native</h3>
                  </div>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Your agents live where your team lives, handling high-volume tasks autonomously and knowing exactly when to tap a human on the shoulder.
                  </p>
                </div>
                
                <div className="flex flex-col">
                  {[
                    {
                      id: 'Monitor',
                      title: 'Monitor Channels',
                      description: 'The agent actively monitors your channels, observing conversations and listening for triggers defined by your scope.',
                      color: 'bg-cyan-500',
                    },
                    {
                      id: 'Act',
                      title: 'Take Actions',
                      description: 'Following strict policy guardrails, agents execute tasks, call APIs, and resolve routine requests without intervention.',
                      color: 'bg-green-500',
                    },
                    {
                      id: 'Escalate',
                      title: 'Escalate to Human',
                      description: 'When confidence is low or a request falls outside of policy, the agent instantly loops in the right human teammate to handle the edge case.',
                      color: 'bg-yellow-500',
                    }
                  ].map((item) => (
                    <div 
                      key={item.id} 
                      className={`cursor-pointer transition-all duration-300 group border-t border-zinc-800 p-6 -mt-px first:mt-0 ${activeAccordion === item.id ? 'bg-zinc-900/50 relative z-10' : 'hover:bg-zinc-900/30'}`}
                      onClick={() => setActiveAccordion(item.id)}
                      onMouseEnter={() => setActiveAccordion(item.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeAccordion === item.id ? item.color : 'bg-zinc-600'}`} />
                        <h4 className="text-xl font-medium">{item.title}</h4>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === item.id ? 'h-24 opacity-100' : 'h-0 opacity-0'}`}>
                        <p className="text-zinc-400 leading-relaxed pl-4.5 text-sm pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                  
                <div className="lg:col-span-8 relative min-h-[800px] lg:min-h-[600px]">
                <Image
                  src="/images/mechanics.png"
                  alt="Smart Insights"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/50" />
                
                {/* Overlay UI Mockup */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-full max-w-md mx-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-xl p-6 shadow-2xl transition-all duration-500 ${activeAccordion ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    {activeAccordion === 'Monitor' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="relative w-4 h-4 flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping duration-2000" />
                              <div className="w-2 h-2 rounded-full bg-cyan-500 relative" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Active Monitoring</div>
                              <div className="text-[10px] text-zinc-400">Scanning 4 channels</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400">Live</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                            <span className="text-zinc-500 text-lg">#</span>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-0.5">
                                <span className="text-xs font-medium">support-tier-1</span>
                                <span className="text-[10px] text-zinc-500">Just now</span>
                              </div>
                              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-zinc-600 rounded-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-800 opacity-60">
                            <span className="text-zinc-500 text-lg">#</span>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-0.5">
                                <span className="text-xs font-medium">enterprise-bugs</span>
                                <span className="text-[10px] text-zinc-500">2m ago</span>
                              </div>
                              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-1/3 bg-zinc-600 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAccordion === 'Act' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Auto-Resolution</div>
                            <div className="text-[10px] text-zinc-400">Executing policy #42</div>
                          </div>
                        </div>
                        <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-800 mb-3">
                          <div className="flex gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1" />
                            <p className="text-xs text-zinc-300">"I've processed the refund for Order #8821. You should see it in 3-5 business days."</p>
                          </div>
                          <div className="flex gap-2 pl-4">
                            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded border border-green-500/20">Action: Stripe Refund</span>
                            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded border border-green-500/20">Email Sent</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-1">
                          <span className="text-[10px] text-zinc-500">Confidence Score</span>
                          <span className="text-[10px] font-mono text-green-400">98.5%</span>
                        </div>
                      </div>
                    )}

                    {activeAccordion === 'Escalate' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Human Loop Required</div>
                            <div className="text-[10px] text-zinc-400">Low confidence detected</div>
                          </div>
                        </div>
                        <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-800 mb-4">
                           <div className="flex items-start gap-2 mb-2">
                              <span className="text-xs text-zinc-500 min-w-[40px]">User:</span>
                              <p className="text-xs text-zinc-300 italic">"Can I get a custom enterprise contract with specific SLAs?"</p>
                           </div>
                           <div className="h-px bg-zinc-700/50 my-2" />
                           <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                              <span className="text-[10px] text-yellow-400">Out of policy scope</span>
                           </div>
                        </div>
                        <button className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-zinc-200 transition-colors">
                          Assign to Sales Team
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
