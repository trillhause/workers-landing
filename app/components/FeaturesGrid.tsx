import React from 'react';
import Image from 'next/image';

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
          
          {/* Card 1: Build the perfect tools (Large) */}
          <div className="md:col-span-2 relative bg-black p-12 min-h-[500px] flex flex-col justify-between group overflow-hidden">
            <div className="relative z-10 max-w-md">
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
                Build the <br />
                perfect <br />
                tools.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mb-8">
                Our extension API is designed to allow anyone with web development skills to unleash the power of Raycast.
              </p>
              <a href="#" className="inline-flex items-center text-white font-mono text-sm hover:text-orange-500 transition-colors">
                Read the docs <span className="ml-2">↗</span>
              </a>
            </div>
            
            {/* Layered illustration */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/4 w-[800px] h-[600px] opacity-80 pointer-events-none">
               <Image 
                src="/images/idea7/feature-layers.png" 
                alt="Layers" 
                fill 
                className="object-contain"
              />
            </div>
             {/* Grid background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
          </div>

          {/* Card 2: React to macOS */}
          <div className="bg-black p-10 flex flex-col justify-between group min-h-[500px] relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/idea7/feature-retro-mac.png" 
                    alt="Retro Mac" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
             </div>
             <div className="relative z-10 mt-auto">
                <div className="absolute top-4 right-4 text-zinc-600">↗</div>
                <h3 className="text-2xl font-medium text-white mb-2">React to macOS</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Build rich, native extensions with the technologies you already know: React, TypeScript and Node.
                </p>
             </div>
          </div>

          {/* Card 3: Built-in UI */}
          <div className="bg-black p-10 flex flex-col justify-between group min-h-[500px] relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/idea7/feature-ui-elements.png" 
                    alt="UI Elements" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
             </div>
             <div className="relative z-10 mt-auto">
                <div className="absolute top-4 right-4 text-zinc-600">↗</div>
                <h3 className="text-2xl font-medium text-white mb-2">Built-in UI</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our UI component library allows you to concentrate on the logic while we push the pixels.
                </p>
             </div>
          </div>

          {/* Card 4: Batteries included */}
          <div className="md:col-span-2 bg-black p-10 flex flex-row items-center justify-between group min-h-[400px] relative overflow-hidden">
             <div className="relative z-10 max-w-sm">
                <h3 className="text-2xl font-medium text-white mb-2">Batteries included</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  A strongly typed API, hot-reloading and modern tooling that make it a blast to work with.
                </p>
             </div>
             <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full">
                 <div className="relative w-full h-full">
                  <Image 
                    src="/images/idea7/feature-batteries.png" 
                    alt="Batteries" 
                    fill 
                    className="object-contain scale-125 translate-x-10 group-hover:scale-135 transition-transform duration-500"
                  />
                </div>
             </div>
             <div className="absolute top-4 right-4 text-zinc-600">↗</div>
          </div>

          {/* Card 5: Publish to the Store */}
          <div className="bg-black p-10 flex flex-col justify-between group min-h-[400px] relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/idea7/feature-floppy.png" 
                    alt="Floppy Disk" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
             </div>
             <div className="relative z-10 mt-auto">
                <div className="absolute top-4 right-4 text-zinc-600">↗</div>
                <h3 className="text-2xl font-medium text-white mb-2">Publish to the Store</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Submit your extension to the Raycast Store and share it with thousands of users.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
