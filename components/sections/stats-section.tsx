'use client';

import { motion } from 'framer-motion';

export function StatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
        <div className="text-4xl font-bold text-emerald-500 mb-2">93%</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Time saved on bookkeeping</div>
      </div>
      <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <div className="text-4xl font-bold text-blue-500 mb-2">45%</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Average tax savings found</div>
      </div>
      <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <div className="text-4xl font-bold text-purple-500 mb-2">10k+</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Freelancers growing wealth</div>
      </div>
    </motion.section>
  );
} 