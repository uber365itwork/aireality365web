import React from 'react';
import { motion } from 'motion/react';
import { Video, Globe, Zap, TrendingUp } from 'lucide-react';

export function MetricsRow() {
  const metrics = [
    {
      icon: Video,
      value: '200+',
      label: 'videos/month',
      color: 'text-indigo-400'
    },
    {
      icon: Globe,
      value: '8+',
      label: 'countries',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      value: '99.95%',
      label: 'uptime',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: '4.3×',
      label: 'avg ROAS lift',
      color: 'text-green-400'
    }
  ];
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-surface rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-2xl glass-surface border border-white/20 flex items-center justify-center ${metric.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
