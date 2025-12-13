'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-32 md:py-40">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8">Terms of Service</h1>
        <p className="text-neutral-400 mb-12 font-serif">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="relative w-full h-64 md:h-80 mb-12 rounded-md border border-zinc-800 overflow-hidden">
          <Image
            src="/images/terms.png"
            alt="Terms of Service"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-12 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Workers ("we", "our", or "us") website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">2. Description of Service</h2>
            <p>
              Workers provides autonomous AI agents designed to integrate with Slack and other platforms to automate workflows and tasks ("Service"). We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">3. User Accounts</h2>
            <p>
              To access certain features, you may be required to register alone or with your organization. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Violate any applicable laws or regulations.</li>
              <li>Infringe upon the intellectual property rights of others.</li>
              <li>Transmit any malicious code, viruses, or harmful data.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">5. Intellectual Property</h2>
            <p>
              All rights, title, and interest in and to the Service, including all intellectual property rights, differ purely to Workers and its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Workers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Workers operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-medium text-white">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@tagworkers.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
