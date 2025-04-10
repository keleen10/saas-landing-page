'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 text-center"
    >
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
        Your money, managed like a pro
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Finally, financial software that speaks freelancer. Ditch the bloated corporate tools 
        and embrace GigFin – where AI meets hustle. Track expenses, send professional invoices, 
        and master your taxes without the accounting headaches.
      </p>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        While others are stuck with clunky spreadsheets or overpaying for features they'll never use, 
        you'll be saving time and money with smart automation that actually understands the gig economy.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium inline-flex items-center group"
        >
          Start Free Trial
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-full font-medium inline-flex items-center group"
        >
          Watch Demo
          <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      <p className="text-sm text-muted-foreground">
        Join 10,000+ freelancers who've already simplified their finances
      </p>
    </motion.section>
  );
} 