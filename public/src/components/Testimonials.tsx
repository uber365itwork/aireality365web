import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "AI Reality 365 cut our video production time from weeks to hours. We're now shipping localized content to 15 markets simultaneously.",
      author: 'Sarah Chen',
      role: 'VP of Marketing',
      company: 'Sinoworld Trading Limited',
      rating: 5,
      avatar: 'SC'
    },
    {
      id: 2,
      quote: "The ROI was immediate. Our ad performance improved 3.2× in the first month, and our creative team can finally focus on strategy instead of execution.",
      author: 'Marcus Ho',
      role: 'General Manager',
      company: 'Shu Xiang Ge',
      rating: 5,
      avatar: 'MH'
    },
    {
      id: 3,
      quote: "Enterprise-grade security with startup-level speed. The SSO integration and RBAC controls gave our IT team confidence from day one.",
      author: 'Jennifer Park',
      role: 'CMO',
      company: 'TechServe Global',
      rating: 5,
      avatar: 'JP'
    }
  ];
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Trusted by Global Teams</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what marketing leaders are saying about AI Reality 365.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-surface rounded-3xl p-8 border border-white/10 relative hover:border-white/20 transition-colors"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <Avatar>
                  <AvatarFallback className="bg-gradient-hero text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
