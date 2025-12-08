import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight mb-6">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            WORKERS
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Autonomous Agents in Slack.
            <br />
            Kill Busy work. Enter Flow State.
          </p>
        </div>

        <div>
          
        </div>

        <div>
          <h3 className="font-semibold mb-6 text-white">Product</h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><Link href="/#mechanics" className="hover:text-white transition-colors">Mechanics</Link></li>
            <li><Link href="/#onboarding" className="hover:text-white transition-colors">Onboarding</Link></li>
            <li><Link href="/#testing" className="hover:text-white transition-colors">Testing</Link></li>
            <li><Link href="/#optimization" className="hover:text-white transition-colors">Optimization</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-6 text-white">Legal</h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            {/* <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li> */}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Workers Inc. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="https://x.com/slack_agents" target="_blank" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/company/slack-workers/?viewAsMember=true" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
