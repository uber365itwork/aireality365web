import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductTabs } from './components/ProductTabs';
import { MetricsRow } from './components/MetricsRow';
import { VideoReelSection } from './components/VideoReelSection';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { SecurityBar } from './components/SecurityBar';
import { CTABand } from './components/CTABand';
import { Footer } from './components/Footer';
import { DemoBookingModal } from './components/DemoBookingModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };
  
  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };
  
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };
  
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenDemo={openDemoModal}
        variant="dark"
      />
      
      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <Hero
            onBookDemo={openDemoModal}
            onWatchReel={openVideoModal}
          />
          
          {/* Product Suite */}
          <ProductTabs />
          
          {/* Metrics Row */}
          <MetricsRow />
          
          {/* Video Reel Section */}
          <VideoReelSection />
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* Pricing Preview */}
          <PricingSection />
          
          {/* Security & Compliance */}
          <SecurityBar />
          
          {/* CTA Band */}
          <CTABand onBookDemo={openDemoModal} />
        </>
      )}
      
      {/* Products Page - AI Video Studio */}
      {currentPage === 'ai-video-studio' && (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block glass-surface px-4 py-2 rounded-full mb-6 border border-white/10">
                <span className="text-sm text-[var(--ai365-primary)]">Product</span>
              </div>
              <h1 className="text-5xl sm:text-6xl mb-6">
                From Script to Screen — On Brand, In Minutes.
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Create professional video content with AI avatars, multilingual dubbing, and automatic branding. Ship content in hours, not weeks.
              </p>
            </div>
            
            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { title: 'AI Avatars', description: 'Choose from 100+ professional AI avatars or create custom ones from photos' },
                { title: 'Multilingual Dubbing', description: 'Auto-translate and dub content in 40+ languages with native accents' },
                { title: 'Brand Kits', description: 'Apply your colors, fonts, logos, and style guidelines automatically' },
                { title: 'Scene Templates', description: 'Pre-built templates for common video formats and platforms' },
                { title: 'Auto-captions', description: 'Generate accurate captions and subtitles with customizable styling' },
                { title: 'Export Presets', description: 'One-click export optimized for every platform and device' }
              ].map((feature, index) => (
                <div key={index} className="glass-surface rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-hero text-white hover:opacity-90 transition-opacity"
              >
                Try AI Video Studio
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Solutions Page */}
      {currentPage === 'solutions' && (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl mb-6">Solutions by Industry</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how teams in your industry are transforming content creation with AI Reality 365.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce',
                  description: 'Auto-generate localized product videos at scale',
                  stats: '−37% CPA, +4.3× ROAS'
                },
                {
                  title: 'Gaming',
                  description: 'Creator-mode trailers from gameplay footage',
                  stats: '+2.1× CTR'
                },
                {
                  title: 'Fintech',
                  description: 'Compliance-safe explainers & onboarding',
                  stats: '−28% drop-off'
                },
                {
                  title: 'Real Estate',
                  description: 'Auto-stitched property walk-throughs',
                  stats: '+58% lead conversion'
                },
                {
                  title: 'Education',
                  description: 'Transform lectures into micro-shorts',
                  stats: '3× content velocity'
                },
                {
                  title: 'Healthcare',
                  description: 'Patient education & multilingual resources',
                  stats: '+92% engagement'
                }
              ].map((solution, index) => (
                <div key={index} className="glass-surface rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
                  <h3 className="text-2xl mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-[var(--ai365-success)]/20 text-[var(--ai365-success)]">
                    {solution.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Pricing Page */}
      {currentPage === 'pricing' && (
        <div className="py-24">
          <PricingSection />
        </div>
      )}
      
      {/* Case Study Page */}
      {currentPage === 'case-study' && (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block glass-surface px-4 py-2 rounded-full mb-6 border border-white/10">
                <span className="text-sm text-[var(--ai365-primary)]">Case Study</span>
              </div>
              <h1 className="text-5xl mb-6">
                GlobalCommerce scaled to 15 markets in 90 days
              </h1>
              <div className="flex items-center justify-center gap-8 text-gray-400">
                <span>E-commerce</span>
                <span>•</span>
                <span>Enterprise</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
            
            {/* Hero Metric */}
            <div className="glass-surface rounded-3xl p-12 border border-white/10 text-center mb-12">
              <div className="text-6xl sm:text-7xl text-[var(--ai365-success)] mb-4">
                4.3×
              </div>
              <div className="text-xl text-gray-300">
                ROAS improvement in first quarter
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-3xl mb-4">Challenge</h2>
                <p>
                  GlobalCommerce needed to launch product videos in 15 new markets simultaneously. Traditional production would take 6+ months and cost over $2M. Their small creative team was already stretched thin managing existing markets.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl mb-4">Solution</h2>
                <p>
                  Using AI Reality 365's Video Studio and Marketing Cloud, they automated video creation with brand-specific templates, AI avatars speaking local languages, and automated A/B testing across all markets.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl mb-4">Results</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai365-primary)] mt-2 flex-shrink-0" />
                    <span>Launched all 15 markets in 90 days (vs. 6-month estimate)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai365-primary)] mt-2 flex-shrink-0" />
                    <span>Reduced production costs by 83%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai365-primary)] mt-2 flex-shrink-0" />
                    <span>4.3× ROAS improvement through localized content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai365-primary)] mt-2 flex-shrink-0" />
                    <span>Creative team now focuses on strategy, not execution</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-surface rounded-2xl p-6 border border-white/10 italic">
                "AI Reality 365 didn't just speed up our workflow — it completely transformed how we think about global marketing. We're now able to test and iterate in markets we couldn't even consider before."
                <div className="mt-4 not-italic font-medium">
                  — Sarah Chen, VP of Marketing at GlobalCommerce
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-hero text-white hover:opacity-90 transition-opacity"
              >
                Replicate This Workflow
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Careers Page */}
      {currentPage === 'careers' && (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl mb-6">Join Our Global Team</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're building the future of AI-powered marketing. Help us empower teams around the world to create at scale.
              </p>
            </div>
            
            {/* Open Roles */}
            <div>
              <h2 className="text-3xl mb-8">Open Positions</h2>
              <div className="space-y-4">
                {[
                  { title: 'Senior Product Designer', location: 'Shenzhen, China', department: 'Design' },
                  { title: 'Customer Success Manager', location: 'Hong Kong', department: 'Customer Success' }
                ].map((role, index) => (
                  <div key={index} className="glass-surface rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-xl mb-2">{role.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{role.location}</span>
                          <span>•</span>
                          <span>{role.department}</span>
                        </div>
                      </div>
                      <button className="px-6 py-3 rounded-xl bg-[var(--ai365-primary)] text-white hover:opacity-90 transition-opacity whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Contact Page */}
      {currentPage === 'contact' && (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions? Our team is here to help. Reach out and we'll respond within 24 hours.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-surface rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Subject *</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors">
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Message *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-xl bg-gradient-hero text-white hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-surface rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl mb-6">Office Locations</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="font-medium mb-1">New York (HQ)</div>
                      <div className="text-sm text-gray-400">123 Fifth Avenue, Suite 400</div>
                      <div className="text-sm text-gray-400">New York, NY 10011</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">London</div>
                      <div className="text-sm text-gray-400">10 Downing Street</div>
                      <div className="text-sm text-gray-400">London, SW1A 2AA</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Singapore</div>
                      <div className="text-sm text-gray-400">1 Marina Boulevard</div>
                      <div className="text-sm text-gray-400">Singapore 018989</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Dubai</div>
                      <div className="text-sm text-gray-400">Dubai International Financial Centre</div>
                      <div className="text-sm text-gray-400">Dubai, UAE</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-surface rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Sales</div>
                      <a href="mailto:sales@aireality365.com" className="text-[var(--ai365-primary)] hover:underline">
                        sales@aireality365.com
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Support</div>
                      <a href="mailto:support@aireality365.com" className="text-[var(--ai365-primary)] hover:underline">
                        support@aireality365.com
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Press</div>
                      <a href="mailto:press@aireality365.com" className="text-[var(--ai365-primary)] hover:underline">
                        press@aireality365.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-surface rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                  <h3 className="text-xl mb-4">Prefer to talk?</h3>
                  <p className="text-gray-400 mb-6">
                    Book a call with our team to discuss your needs in detail.
                  </p>
                  <button
                    onClick={openDemoModal}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-hero text-white hover:opacity-90 transition-opacity"
                  >
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <Footer />
      
      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
      />
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl="https://u44.uk/air365/web/ai365_main.mp4"
        title="AI Reality 365 - 60 Second Overview"
      />
    </div>
  );
}
