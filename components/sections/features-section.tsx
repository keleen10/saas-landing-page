'use client';

import { motion } from 'framer-motion';
import { Zap, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    title: "Smart Invoicing",
    description: "AI-powered invoice creation with automatic payment reminders and late fee calculations.",
    icon: Zap,
    color: "text-emerald-500"
  },
  {
    title: "Tax Companion",
    description: "Real-time tax estimates and quarterly payment suggestions based on your income patterns.",
    icon: BarChart3,
    color: "text-blue-500"
  },
  {
    title: "Expense Detective",
    description: "Auto-categorize expenses with AI and get smart deduction recommendations.",
    icon: Shield,
    color: "text-purple-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
        >
          <feature.icon className={`h-8 w-8 mb-4 ${feature.color}`} />
          <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  );
} 