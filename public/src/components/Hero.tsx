import React from 'react';
import { motion } from 'motion/react';
import { AIButton } from './AIButton';
import { Play, Globe, TrendingUp, Users } from 'lucide-react';
import { Badge } from './ui/badge';

interface HeroProps {
  onBookDemo?: () => void;
  onWatchReel?: () => void;
}

export function Hero({ onBookDemo, onWatchReel }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-orbit opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 rounded-full border border-[var(--ai365-primary)]/20" />
            <div className="absolute inset-8 rounded-full border border-[var(--ai365-secondary)]/20" />
            <div className="absolute inset-16 rounded-full border border-[var(--ai365-accent-violet)]/20" />
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          {/* Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="glass-surface px-4 py-2">
              <Globe className="w-3 h-3 mr-2" />
              Used by teams in 40+ countries
            </Badge>
            <Badge variant="secondary" className="glass-surface px-4 py-2">
              <TrendingUp className="w-3 h-3 mr-2" />
              SOC2-ready
            </Badge>
            <Badge variant="secondary" className="glass-surface px-4 py-2">
              <Users className="w-3 h-3 mr-2" />
              SSO/SAML
            </Badge>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-tight mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
          >
            Make Everything Marketable — With AI, Every Day.
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            AI Reality 365 is the enterprise studio + SaaS that turns ideas into on-brand videos, campaigns, and growth — at global scale.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <AIButton size="lg" onClick={onBookDemo}>
              Book Studio Demo
            </AIButton>
            <AIButton variant="ghost" size="lg" onClick={onWatchReel}>
              <Play className="w-5 h-5" />
              Watch 60-sec Reel
            </AIButton>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-surface rounded-3xl p-8 elevation-2 border border-white/10">
              <div className="aspect-video rounded-2xl relative overflow-hidden">
                {/* Video */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="https://u44.uk/air365/web/ai365_main.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Floating Metric Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 left-8 glass-surface px-4 py-2 rounded-xl border border-white/20 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white">10k+ videos/month</span>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-8 right-8 glass-surface px-4 py-2 rounded-xl border border-white/20 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-white">4.3× ROAS lift</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
