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
    
    <>
      <Navbar hideActions={true} />
      
      <section className="relative h-screen max-h-[1000px] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
         <div 
            data-us-project="XRAZIAJFVsYmUeEn8fYK" 
            className="absolute inset-0 z-0 opacity-80"
          />
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center">

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 text-center md:text-left">
            You&apos;re on the list
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 tracking-wide max-w-2xl leading-relaxed text-center md:text-left">
            Thank you for confirming your email. We&apos;ll reach out within the next few days with early access details and next steps.
          </p>
          
           <div className="flex flex-col sm:flex-row gap-4">
            <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 transition-colors whitespace-nowrap rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Return to Homepage
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
