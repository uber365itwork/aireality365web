import React, { useState } from 'react';
import { motion } from 'motion/react';

export function VideoReelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-4">See It In Action</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how leading brands are using AI to transform their content workflow.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* YouTube Video Embed */}
          <div className="aspect-video rounded-3xl overflow-hidden glass-surface border border-white/10 relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/QqCMSUyjcis?rel=0&modestbranding=1"
              title="AI Reality 365 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Stats Below Video */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-1">127%</div>
              <div className="text-sm text-gray-400">Faster Production</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-1">10k+</div>
              <div className="text-sm text-gray-400">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-1">40+</div>
              <div className="text-sm text-gray-400">Languages Supported</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
