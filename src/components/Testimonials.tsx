'use client';

import { motion } from 'framer-motion';
import { SiStripe, SiShopify, SiNotion, SiFigma, SiVercel, SiLinear } from 'react-icons/si';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    avatar: 'SJ',
    content: 'This platform completely transformed how we build and deploy our SaaS products. We launched 3x faster than expected!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder of AppFlow',
    avatar: 'MC',
    content: 'The best investment we made for our startup. The analytics and integrations alone are worth 10x the price.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO at DataSync',
    avatar: 'ER',
    content: 'Incredibly powerful yet so easy to use. Our team was up and running in less than an hour. Highly recommended!',
    rating: 5
  }
];

const companies = [
  { name: 'Stripe', icon: SiStripe },
  { name: 'Shopify', icon: SiShopify },
  { name: 'Notion', icon: SiNotion },
  { name: 'Figma', icon: SiFigma },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Linear', icon: SiLinear }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
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
            Loved by{' '}
            <span className="gradient-text">thousands</span>
            {' '}of users
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Companies Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-semibold">
            Trusted by teams at
          </p>

          {/* Infinite scroll container */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling track - animate the entire container */}
            <motion.div
              className="flex gap-16"
              animate={{
                x: [0, -100 * companies.length]
              }}
              transition={{
                x: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {/* Render companies 4 times for seamless loop */}
              {[...Array(4)].map((_, setIndex) => (
                companies.map((company) => {
                  const Icon = company.icon;
                  return (
                    <div
                      key={`${company.name}-${setIndex}`}
                      className="flex-shrink-0 flex items-center justify-center gap-3 min-w-[200px]"
                    >
                      <Icon className="w-12 h-12 text-gray-400" />
                      <span className="text-2xl font-bold text-gray-400 whitespace-nowrap">
                        {company.name}
                      </span>
                    </div>
                  );
                })
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
