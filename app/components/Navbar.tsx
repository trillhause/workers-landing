import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-8 bg-black/40 backdrop-blur-md  px-4 py-2 rounded-md">
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            WORKERS
          </div>
        </div>

        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-2 py-2 rounded-lg">
        <button className="px-4 py-2 text-sm font-medium">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 transition-colors rounded-sm">
            Get Access
          </button>
        </div>
      </nav>
  );
}
