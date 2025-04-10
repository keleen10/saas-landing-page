'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const aiFeatures = [
  {
    title: "Income Forecasting",
    description: "AI analyzes your past earnings to predict future income and suggest optimal savings.",
    benefits: ["Cash flow prediction", "Personalized savings goals", "Revenue trend analysis"]
  },
  {
    title: "Smart Financial Assistant",
    description: "Get personalized financial advice and expense optimization suggestions.",
    benefits: ["Expense reduction tips", "Investment opportunities", "Emergency fund planning"]
  },
  {
    title: "Document Scanner",
    description: "Snap photos of receipts and invoices for automatic data extraction and categorization.",
    benefits: ["Receipt digitization", "Auto-categorization", "Tax document organization"]
  }
];

export function AIFeaturesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">AI-Powered Financial Intelligence</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {aiFeatures.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 