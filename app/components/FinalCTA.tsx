import React from 'react';
import Image from 'next/image';

export function FinalCTA() {
  return (
    <section className="py-24 bg-black">
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

            <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full sm:flex-1 bg-white/10  border-white/20 px-6 py-3 text-sm text-white placeholder:text-zinc-300 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-sm rounded-sm"
              />
              <button className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-200 transition-colors whitespace-nowrap rounded-sm">
                Get Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
