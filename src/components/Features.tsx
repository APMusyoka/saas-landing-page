'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, BarChart3, Puzzle, Headset } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Built with cutting-edge technology for blazing fast load times and smooth user experience.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to keep your data safe and compliant.'
  },
  {
    icon: Rocket,
    title: 'Instant Deployment',
    description: 'Deploy your SaaS in minutes with one-click setup and automatic scaling infrastructure.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and detailed analytics to track performance and user behavior.'
  },
  {
    icon: Puzzle,
    title: 'Easy Integration',
    description: 'Seamlessly connect with 100+ popular tools and services via our powerful API.'
  },
  {
    icon: Headset,
    title: 'Premium Support',
    description: '24/7 expert support team ready to help you succeed with priority assistance.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Everything you need to{' '}
            <span className="gradient-text">scale your SaaS</span>
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you build, launch, and grow your business faster than ever.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
