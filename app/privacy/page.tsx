'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-32 md:py-40">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8">Privacy Policy</h1>
        <p className="text-neutral-400 mb-12 font-serif">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <div className="relative w-full h-64 md:h-80 mb-12 rounded-md border border-zinc-800 overflow-hidden">
          <Image
            src="/images/privacy-1.png"
            alt="Privacy Policy"
            fill
            className="object-cover"
            priority
          />
        </div>


        <div className="space-y-12 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">1. Introduction</h2>
            <p>
              Workers ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Information You Provide</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and company details.
              </p>
              
              <h3 className="text-xl font-medium text-white">Usage Data</h3>
              <p>
                We automatically collect certain information about your device and how you interact with our Service, including IP address, browser type, and usage patterns.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Provide, maintain, and improve our Service.</li>
              <li>Communicate with you about updates, security alerts, and support.</li>
              <li>Analyze usage trends and preferences to enhance user experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our Service, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. To exercise these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@slackworkers.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
