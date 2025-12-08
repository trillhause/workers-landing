'use client';

import React from 'react';
import Image from 'next/image';
import type { WaitlistResponse } from '@/app/types/waitlist';
import { DangerTriangle, LetterUnread } from '@solar-icons/react';

export function FinalCTA() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState<'success' | 'error' | 'warning'>('success');

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
    <section className="py-24 bg-black" id="get-access">
      <div className="container mx-auto px-6">
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-md border border-zinc-800">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/final-cta.png"
              alt="Field of flowers with Macintosh"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
            <div className="mb-8 text-white">
              <h2 className="text-2xl font-sans ">Get your time back. Let agents handle distractions.</h2>
              <br/>
              <h2 className="text-5xl font-serif font-medium md:text-6xl">Enter Flow State.</h2>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
              <div className="flex flex-col sm:flex-row items-center gap-2">
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
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-200 transition-colors whitespace-nowrap rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </div>
    </section>
  );
}
