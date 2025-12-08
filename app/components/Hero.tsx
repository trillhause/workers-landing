import React from 'react';

export function Hero() {
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

          <form className="flex items-center gap-2 w-full max-w-md">
            <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full sm:flex-1 bg-white/10  border-white/20 px-6 py-3 text-sm text-white placeholder:text-zinc-300 focus:outline-none focus:border-white/40 transition-colors backdrop-blur-sm rounded-sm"
              />
            <button className="px-6 py-3 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 transition-colors whitespace-nowrap rounded-sm">
              Get Access
            </button>

          </form>
        </div>
      </section>
  );
}
