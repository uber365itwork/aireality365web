import React from 'react';
import { Shield, Lock, Key, Database, CheckCircle } from 'lucide-react';

export function SecurityBar() {
  const securityFeatures = [
    { icon: Shield, label: 'GDPR Compliant' },
    { icon: Lock, label: 'SOC 2 (in progress)' },
    { icon: Key, label: 'SSO/SAML' },
    { icon: CheckCircle, label: 'RBAC' },
    { icon: Database, label: 'Data Residency' }
  ];
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-gradient-to-r from-indigo-950/20 via-purple-950/20 to-cyan-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl mb-2">Enterprise-Grade Security & Compliance</h3>
          <p className="text-sm text-gray-400">Built for the most demanding security requirements</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="flex items-center gap-2 text-gray-300">
                <Icon className="w-5 h-5 text-[var(--ai365-primary)]" />
                <span className="text-sm">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
