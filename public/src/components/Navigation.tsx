import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AIButton } from './AIButton';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onOpenDemo?: () => void;
  variant?: 'light' | 'dark';
}

export function Navigation({ currentPage = 'home', onNavigate, onOpenDemo, variant = 'dark' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  
  const menuItems = [
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'pricing', label: 'Pricing' },
    { id: 'careers', label: 'Careers' }
  ];
  
  const productDropdownItems = [
    { id: 'ai-video-studio', label: 'AI Video Studio', description: 'Script-to-screen with avatars' }
  ];
  
  const bgClass = variant === 'dark' 
    ? 'glass-surface border-white/10' 
    : 'bg-white/80 backdrop-blur-xl border-black/10';
  
  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-hero text-white py-2 px-4 text-center">
        <p className="text-sm">
          🎉 Now SOC2 ready with SSO/SAML • <span className="underline cursor-pointer">Learn more →</span>
        </p>
      </div>
      
      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 ${bgClass} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <button 
                onClick={() => onNavigate?.('home')}
                className={`flex items-center gap-3 ${textClass} hover:opacity-80 transition-opacity`}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-hero" />
                <span className="font-semibold">AI Reality 365</span>
              </button>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                {menuItems.map((item) => (
                  <div key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <button
                        className={`${textClass} hover:text-[var(--ai365-primary)] transition-colors flex items-center gap-1`}
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                        onClick={() => setProductsOpen(!productsOpen)}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        className={`${textClass} hover:text-[var(--ai365-primary)] transition-colors`}
                        onClick={() => onNavigate?.(item.id)}
                      >
                        {item.label}
                      </button>
                    )}
                    
                    {/* Products Dropdown */}
                    {item.hasDropdown && productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-80 glass-surface rounded-2xl border border-white/10 p-2 elevation-2"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        {productDropdownItems.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => {
                              onNavigate?.(product.id);
                              setProductsOpen(false);
                            }}
                            className="w-full text-left p-4 rounded-xl hover:bg-white/10 transition-colors"
                          >
                            <div className={`font-medium ${textClass}`}>{product.label}</div>
                            <div className="text-sm text-gray-400 mt-1">{product.description}</div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button className={`${textClass} hover:text-[var(--ai365-primary)] transition-colors`}>
                Sign In
              </button>
              <AIButton onClick={onOpenDemo} size="sm">
                Book Studio Demo
              </AIButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${textClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${bgClass}`}
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate?.(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left ${textClass} hover:text-[var(--ai365-primary)] transition-colors py-2`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 space-y-2">
                  <button className={`block w-full text-left ${textClass} py-2`}>
                    Sign In
                  </button>
                  <AIButton onClick={onOpenDemo} className="w-full">
                    Book Studio Demo
                  </AIButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
