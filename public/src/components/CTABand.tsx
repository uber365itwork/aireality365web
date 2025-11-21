import React from 'react';
import { motion } from 'motion/react';
import { AIButton } from './AIButton';
import { Sparkles } from 'lucide-react';

interface CTABandProps {
  onBookDemo?: () => void;
}

export function CTABand({ onBookDemo }: CTABandProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 opacity-10" />
      <div className="absolute inset-0 gradient-orbit opacity-10 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass-surface px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-[var(--ai365-primary)]" />
            <span className="text-sm">Start shipping content faster</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            See your brand in AI — this week.
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of teams creating on-brand content at scale. Book a personalized demo and get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AIButton size="lg" onClick={onBookDemo}>
              Book Studio Demo
            </AIButton>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
