import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import { AIButton } from './AIButton';
import { Badge } from './ui/badge';

export function PricingSection() {
  const plans = [
    {
      name: 'Free Trial',
      description: 'Test the waters with limited exports',
      price: 0,
      features: [
        '10 video exports/month',
        '1 brand kit',
        '5 team members',
        'Standard avatars',
        'Community support',
        'Watermarked exports'
      ],
      cta: 'Start Free Trial',
      variant: 'ghost' as const,
      popular: false
    },
    {
      name: 'Custom Quote',
      description: 'SSO/SAML, RBAC, custom SLA',
      price: null,
      features: [
        'Everything in Free Trial',
        'SSO/SAML authentication',
        'Role-based access control',
        'Custom SLA & uptime',
        'Dedicated success manager',
        'Custom integrations',
        'On-premise options',
        'Advanced security & compliance',
        'Volume discounts'
      ],
      cta: 'Contact Sales',
      variant: 'secondary' as const,
      popular: true
    }
  ];
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Free Trial & Tailored Solution</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-surface rounded-3xl p-8 border relative ${
                plan.popular 
                  ? 'border-[var(--ai365-primary)] elevation-2' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-hero border-0 px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl">${plan.price}</span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                ) : (
                  <div className="text-3xl">Custom</div>
                )}
              </div>
              
              <AIButton 
                variant={plan.variant} 
                className="w-full mb-8"
              >
                {plan.cta}
              </AIButton>
              
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular 
                        ? 'bg-[var(--ai365-primary)]/20' 
                        : 'bg-white/10'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.popular 
                          ? 'text-[var(--ai365-primary)]' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
