'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { AIFeaturesSection } from '@/components/sections/ai-features-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { PricingSection } from '@/components/sections/pricing-section';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="container">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <AIFeaturesSection />
          <AboutSection />

          <PricingSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}