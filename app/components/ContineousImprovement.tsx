'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function ContineousImprovement() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id="optimization" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Optimization</span>
          </div>
          <div 
            className="bg-zinc-900/30 border border-zinc-800 rounded-md overflow-hidden"
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-8 relative min-h-[800px] lg:min-h-[600px] order-2 lg:order-1">
                <Image
                  src="/images/trillhouse_robot_repairing_itself_--ar_169_--raw_--profile_of_4d47df71-250a-4a87-828e-6b4572cf136c_1.png"
                  alt="Continuous Improvement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/50" />
                
                {/* Overlay UI Mockup */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-full max-w-md mx-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-xl p-6 shadow-2xl transition-all duration-500 ${activeStep ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    {activeStep === 'Reports' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                              <div className="w-4 h-4 text-cyan-400">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <div className="font-medium text-sm">Weekly Report</div>
                              <div className="text-[10px] text-zinc-400">Last 7 days</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400">Generated</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                            <span className="text-zinc-400 text-xs">Success Rate</span>
                            <span className="text-cyan-400 font-mono text-sm">94.2%</span>
                          </div>
                          <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-zinc-400">Top Failure</span>
                                <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">Critical</span>
                             </div>
                             <div className="text-sm font-medium mb-1">API Timeout</div>
                             <div className="text-[10px] text-zinc-500">12 incidents in checkout_flow</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 'Audit' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Session #8821</div>
                            <div className="text-[10px] text-zinc-400">Trace ID: tr_773829</div>
                          </div>
                        </div>
                        <div className="space-y-2 font-mono text-[10px]">
                           <div className="p-2 bg-zinc-950/50 rounded border border-zinc-800/50 text-zinc-500">
                              <span className="text-blue-400">USER:</span> "I need a refund for my last order."
                           </div>
                           <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                              <span className="text-yellow-400">THOUGHT:</span> Checking return policy for Order #1234...
                           </div>
                           <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                              <span className="text-yellow-400">DECISION:</span> Policy met (within 30 days). Proceeding with refund.
                           </div>
                           <div className="p-2 bg-zinc-800/30 rounded border border-zinc-700/50 text-zinc-300">
                              <span className="text-green-400">ACTION:</span> call_stripe_refund(amount=49.99)
                           </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 'Improvement' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Policy Recommendation</div>
                            <div className="text-[10px] text-zinc-400">Based on recent edge cases</div>
                          </div>
                        </div>
                        <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-800 mb-4">
                           <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-green-300">New Rule Suggestion</span>
                           </div>
                           <p className="text-xs text-zinc-300 mb-3">
                              "When user asks about 'Out of Stock' items, offer to notify them when available instead of just saying 'No'."
                           </p>
                           <div className="flex items-center gap-2">
                              <span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">+5% Conversion</span>
                              <span className="text-[10px] text-zinc-500">High Confidence</span>
                           </div>
                        </div>
                        <button className="w-full py-2 bg-white text-black text-xs font-medium rounded transition-colors">
                          Apply Update
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[700px] order-1 lg:order-2">
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-medium">Improve as you go</h3>
                  </div>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Get periodic reports on the agent’s performance. Use in-built monitoring platform to replay interactions, audit suboptimal trajectories, and refine existing policies.
                  </p>
                </div>
                
                <div className="flex flex-col">
                  {[
                    {
                      id: 'Reports',
                      title: 'Automated Insights',
                      description: 'Automatically identify edge cases, failure points, and policy gaps. Turn real-world events into structured test suites.',
                      color: 'bg-cyan-500',
                    },
                    {
                      id: 'Audit',
                      title: 'Complete Visibility',
                      description: 'Audit and replay agent\'s execution logs to understand its reasoning and decision process.',
                      color: 'bg-yellow-500',
                    },
                    {
                      id: 'Improvement',
                      title: 'Continuous Improvement',
                      description: 'Set performance targets and receive policy update recommendations to improve your agent.',
                      color: 'bg-emerald-500',
                    }
                  ].map((item) => (
                    <div 
                      key={item.id} 
                      className={`cursor-pointer transition-all duration-300 group border-t border-zinc-800 p-6 -mt-px first:mt-0 ${activeStep === item.id ? 'bg-zinc-900/50 relative z-10' : 'hover:bg-zinc-900/30'}`}
                      onClick={() => setActiveStep(item.id)}
                      onMouseEnter={() => setActiveStep(item.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeStep === item.id ? item.color : 'bg-zinc-600'}`} />
                        <h4 className="text-xl font-medium">{item.title}</h4>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStep === item.id ? 'h-24 opacity-100' : 'h-0 opacity-0'}`}>
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
