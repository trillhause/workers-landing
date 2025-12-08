'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ConfirmedPage() {
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

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      <Navbar hideActions={true} />
      
      <main className="flex-grow relative flex flex-col items-center justify-center overflow-hidden min-h-[100vh]">
         <div 
            data-us-project="1UHol0qux6eRRFfBMDIi" 
            className="absolute inset-0 z-0 opacity-80"
          />
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center max-w-4xl text-center">

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6">
            You&apos;re on the list
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 tracking-wide max-w-2xl leading-relaxed">
            Thank you for confirming your email. We&apos;ll reach out within the next few days with early access details and next steps.
          </p>
          
           <div className="flex flex-col sm:flex-row gap-4">
            <Link
                href="/"
                className="px-8 py-4 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 transition-colors rounded-sm tracking-wide"
              >
                Return to Homepage
              </Link>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
