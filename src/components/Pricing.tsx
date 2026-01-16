'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    description: 'Perfect for side projects and small teams',
    features: [
      '5 Team members',
      '10 GB Storage',
      'Basic analytics',
      'Email support',
      'API access',
      'SSL certificate'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: { monthly: 79, yearly: 790 },
    description: 'For growing businesses and startups',
    features: [
      'Unlimited team members',
      '100 GB Storage',
      'Advanced analytics',
      'Priority support',
      'Advanced API access',
      'Custom domain',
      'Integrations',
      'White-label option'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 199, yearly: 1990 },
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Custom analytics',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Training & onboarding'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business. No hidden fees, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-sm font-medium transition-all ${!isYearly
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-sm font-medium transition-all flex flex-wrap items-center justify-center gap-x-2 ${isYearly
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              <span>Yearly</span>
              <span className="text-xs text-primary-600 font-bold whitespace-nowrap">Save 17%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.highlighted
                ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-2xl scale-105'
                : 'bg-white border-2 border-gray-200'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-400 text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className={`text-sm mt-1 ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                    ${(plan.price.yearly / 12).toFixed(0)}/month billed annually
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${plan.highlighted
                  ? 'bg-white text-primary-600 hover:bg-gray-50'
                  : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
              >
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}
                  >
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-primary-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
