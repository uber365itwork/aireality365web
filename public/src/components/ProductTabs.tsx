import React from 'react';
import { motion } from 'motion/react';
import { Video } from 'lucide-react';

export function ProductTabs() {
  const tabData = {
    id: 'video',
    label: 'AI Avatar',
    icon: Video,
    title: 'Script-to-screen with avatars, multilingual dubbing, and auto-branding.',
    description: 'Ship content in hours, not weeks.',
    features: [
      'AI Avatars & Voice Synthesis',
      'Multilingual Dubbing (40+ languages)',
      'Auto-branding with Brand Kits',
      'Scene Templates & Presets',
      'Auto-captions & Subtitles',
      'Export in any format'
    ]
  };
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-4">AI Video Studio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, distribute, and optimize marketing content at enterprise scale.
          </p>
        </div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-surface rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass-surface px-4 py-2 rounded-full mb-6 border border-white/20">
                <Video className="w-4 h-4 text-[var(--ai365-primary)]" />
                <span className="text-sm">{tabData.label}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl mb-4">
                {tabData.title}
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {tabData.description}
              </p>
              
              <div className="space-y-3">
                {tabData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai365-primary)]" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Video Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="https://u44.uk/air365/web/ai365_main2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-surface px-4 py-2 rounded-xl border border-white/20 glow-primary"
              >
                <div className="text-sm">
                  <div className="text-[var(--ai365-success)]">+127%</div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-surface px-4 py-2 rounded-xl border border-white/20 glow-secondary"
              >
                <div className="text-sm">
                  <div className="text-[var(--ai365-secondary)]">10k+</div>
                  <div className="text-xs text-gray-400">Assets/mo</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
