import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Licenses']
  };

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Discord', icon: FaDiscord, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">SaaS</span>Platform
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              The all-in-one platform to build, launch, and scale your SaaS business faster than ever.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="text-lg text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} SaaS Platform. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
