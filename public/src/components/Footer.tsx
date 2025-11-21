import React from 'react';
import { Mail } from 'lucide-react';
import { AIButton } from './AIButton';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'AI Video Studio', href: '#' },
        { label: 'Pricing', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'E-commerce', href: '#' },
        { label: 'Hospitality', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' }
      ]
    }
  ];
  
  return (
    <footer className="border-t border-white/10 mt-24">
      {/* Newsletter Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="glass-surface rounded-3xl p-12 border border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-[var(--ai365-primary)]" />
              <h3 className="text-3xl mb-4">Stay in the Loop</h3>
              <p className="text-gray-400 mb-8">
                Get the latest product updates, case studies, and AI marketing insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                />
                <AIButton>Subscribe</AIButton>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-hero" />
                <span className="font-semibold">AI Reality 365</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-xs">
                Make Everything Marketable.
              </p>
              <p className="text-xs text-gray-500">
                AI Reality 365 Limited
              </p>
            </div>
            
            {/* Links Columns */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-medium mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span>© 2025 AI Reality 365 Limited</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
