import React from 'react';

interface FooterProps {
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark = false }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Blog', 'Careers', 'Contact'],
    Programs: ['Strength', 'Cardio', 'Flexibility', 'Nutrition'],
    Resources: ['FAQ', 'Guides', 'Community', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { icon: '🐦', label: 'Twitter' },
    { icon: '📘', label: 'Facebook' },
    { icon: '📷', label: 'Instagram' },
    { icon: '🎬', label: 'YouTube' },
  ];

  return (
    <footer className={`${isDark ? 'bg-surface-dark border-t border-gray-700' : 'bg-surface-light border-t border-gray-200'} py-12`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RX</span>
              </div>
              <span className="font-display font-bold">Corporalis</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
              Transform your fitness journey with personalized coaching and scientifically-backed programs.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <button key={social.label} className={`w-10 h-10 rounded-lg ${isDark ? 'bg-surface-light/10 hover:bg-primary/10' : 'bg-gray-100 hover:bg-primary/10'} flex items-center justify-center transition`}>
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-body font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`text-sm ${isDark ? 'text-text-muted-dark hover:text-primary' : 'text-text-muted-light hover:text-primary'} transition`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} my-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${isDark ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
            © {currentYear} Corporalis. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className={`text-sm ${isDark ? 'text-text-muted-dark hover:text-primary' : 'text-text-muted-light hover:text-primary'} transition`}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" className={`text-sm ${isDark ? 'text-text-muted-dark hover:text-primary' : 'text-text-muted-light hover:text-primary'} transition`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
