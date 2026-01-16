'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="gradient-text">SaaS</span>
            <span className={isScrolled ? 'text-gray-900' : 'text-white'}>Platform</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={`px-4 py-2 font-medium transition-colors ${isScrolled
                ? 'text-gray-700 hover:text-primary-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Sign In
            </button>
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden ml-auto mr-1 -mt-3 p-4 bg-gray-50 rounded-lg shadow-sm w-[300px]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {/* Divider line (except for the last item) */}
                  <div className="h-px bg-gray-200 w-[95%] mx-auto"></div>
                </div>
              ))}
              <button className="text-gray-700 hover:text-primary-600 font-medium text-left">
                Sign In
              </button>
              {/* Divider for Sign In */}
              {/* <div className="h-px bg-gray-200 w-[95%] mx-auto"></div> */}
              <button className="btn btn-primary">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
