'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-6">Why GigFin?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg mb-4">
            Built by freelancers, for freelancers. We understand that your business 
            doesn't fit the traditional mold. That's why GigFin combines powerful 
            financial tools with the simplicity you need to focus on what matters – your work.
          </p>
          <p className="text-lg">
            Our AI-powered platform learns your business patterns, automates the boring stuff, 
            and gives you actionable insights to grow your income.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">The GigFin Difference</h3>
          <ul className="space-y-3">
            {[
              "Smart invoicing that learns your pricing patterns",
              "Real-time tax estimates and planning",
              "AI-powered expense tracking",
              "Personalized financial insights"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
} 