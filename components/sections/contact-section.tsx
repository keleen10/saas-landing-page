'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-emerald-500" />
            <a href="mailto:hello@gigfin.com" className="text-lg hover:text-emerald-500 transition-colors">
              hello@gigfin.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-emerald-500" />
            <a href="tel:+1234567890" className="text-lg hover:text-emerald-500 transition-colors">
              (123) 456-7890
            </a>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
} 