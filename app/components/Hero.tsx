'use client';

import React from 'react';
import type { WaitlistResponse } from '@/app/types/waitlist';
import { LetterUnread, DangerTriangle } from '@solar-icons/react';

export function Hero() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState<'success' | 'error' | 'warning'>('success');

  React.useEffect(() => {
    const loadUnicornScript = () => {
      if (!(window as any).UnicornStudio) {
        (window as any).UnicornStudio = { isInitialized: false };
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
        script.onload = function() {
          if (!(window as any).UnicornStudio.isInitialized) {
            (window as any).UnicornStudio.init();
            (window as any).UnicornStudio.isInitialized = true;
          }
        };
        document.body.appendChild(script);
      } else {
        // If script is already loaded, try to init again for this component
        (window as any).UnicornStudio.init();
      }
    };

    loadUnicornScript();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Basic frontend validation
    if (!email) {
      setMessageType('warning');
      setMessage('Please enter your email address.');
      setLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setMessageType('error');
      setMessage(`Please enter a valid email address.`);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: WaitlistResponse = await response.json();

      if (data.success) {
        if (data.requiresWorkEmail) {
          setMessageType('warning');
          setMessage(data.message || 'Please use your work email address.');
        } else if (data.alreadyExists) {
          setMessageType('success');
          setMessage(data.message || "You're already on our waitlist!");
        } else {
          setMessageType('success');
          setMessage(data.message || 'Check your email for a confirmation link!');
          setEmail(''); // Clear input on success
        }
      } else {
        setMessageType('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative h-screen max-h-[1000px] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <div 
          data-us-project="1UHol0qux6eRRFfBMDIi" 
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">Agents Online </span>
          </div> */}

          <h1 className="text-6xl text-center md:text-left md:text-7xl lg:text-7xl font-serif font-medium mb-6 text-left">
            Autonomous <br />Agents in Slack
          </h1>

          <p className="text-lg text-center md:text-left md:text-2xl text-gray-300 mb-10 tracking-wide max-w-xl text-left">
            AI that monitors high volume slack channels and takes actions. Built for growing teams.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                className="w-full sm:flex-1 bg-white/10 border-white/20 px-6 py-3 text-sm text-white placeholder:text-zinc-300 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-sm rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 transition-colors whitespace-nowrap rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Get Access'}
              </button>
            </div>

            {message && (
              <div
                className={`mt-3 px-4 py-2 rounded-sm text-sm flex items-center gap-2 ${
                  messageType === 'success'
                    ? 'bg-green-500/10 text-green-400 py-3 border-green-500/20 backdrop-blur-sm'
                    : messageType === 'warning'
                    ? 'bg-yellow-500/10 text-yellow-400 py-3 border-yellow-500/20 backdrop-blur-sm'
                    : 'bg-red-500/10 text-red-400 py-3 border-red-500/20 border backdrop-blur-sm'
                }`}
              >
                {messageType === 'success' && <LetterUnread className="w-4 h-4" weight="Bold"/>}
                {messageType !== 'success' && <DangerTriangle className="w-4 h-4" weight="Bold"/>}
                {message}
              </div>
            )}
          </form>
        </div>
      </section>
  );
}
