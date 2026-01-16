'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'You get full access to all Pro features for 14 days, no credit card required. Cancel anytime during the trial period with no charges.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any billing adjustments.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes! We use bank-level 256-bit SSL encryption for all data transmission and storage. We are also SOC 2 Type II certified and GDPR compliant.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with our service, contact us within 30 days for a full refund, no questions asked.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. You will continue to have access until the end of your billing period.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our platform and billing.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact support */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
