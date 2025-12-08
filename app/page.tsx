'use client';

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgentMechanics } from './components/AgentMechanics';
import { Onboarding } from './components/Onboarding';
import { ContineousImprovement } from './components/ContineousImprovement';
import { RiskFree } from './components/RiskFree';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Idea7() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AgentMechanics />
      <Onboarding />
      <RiskFree />
      <ContineousImprovement />
      <FinalCTA />
      <Footer />
    </div>
  );
}
