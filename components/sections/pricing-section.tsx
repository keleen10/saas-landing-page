'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for freelancers just starting out",
    features: [
      "Basic invoice templates",
      "Income & expense tracking",
      "Basic tax calculator",
      "Mobile receipt scanning (5/mo)",
      "Email support"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "29",
    description: "Everything you need to grow your business",
    features: [
      "Custom invoice branding",
      "Automated payment reminders",
      "Real-time tax estimates",
      "Unlimited receipt scanning",
      "AI expense categorization",
      "Basic financial forecasting",
      "Priority support",
      "Connect multiple bank accounts"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Premium",
    price: "49",
    description: "Advanced features for established freelancers",
    features: [
      "Everything in Pro",
      "Advanced AI financial insights",
      "Custom financial goals",
      "Investment tracking",
      "Advanced tax planning",
      "Quarterly tax automation",
      "1-on-1 financial review",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-12" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground">
          Start free, upgrade when you need to. No hidden fees.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative rounded-lg bg-card p-8 shadow-lg ${
              tier.popular ? 'border-2 border-emerald-500' : 'border border-border'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white text-center">
                Most Popular
              </div>
            )}
            
            <div className="text-center">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            </div>

            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-medium ${
                tier.popular
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {tier.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 