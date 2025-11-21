import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, CheckCircle, Calendar, Clock, User, Mail, Building, Briefcase } from 'lucide-react';
import { AIButton } from './AIButton';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    useCase: '',
    timeline: '',
    preferredDate: '',
    preferredTime: ''
  });
  
  const totalSteps = 3;
  
  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleSubmit = () => {
    setCurrentStep(4); // Success screen
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="glass-surface rounded-3xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-hidden elevation-2"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl">Book Your Studio Demo</h2>
                  {currentStep <= totalSteps && (
                    <p className="text-sm text-gray-400 mt-1">
                      Step {currentStep} of {totalSteps}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full glass-surface border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Progress Bar */}
              {currentStep <= totalSteps && (
                <div className="px-6 pt-4">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-hero"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl mb-4">Tell us about yourself</h3>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Company *
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                          placeholder="Acme Corporation"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Role *
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => updateField('role', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select your role</option>
                          <option value="marketing">Marketing</option>
                          <option value="growth">Growth/Performance</option>
                          <option value="creative">Creative/Content</option>
                          <option value="product">Product</option>
                          <option value="executive">Executive</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl mb-4">About your project</h3>
                      
                      <div>
                        <label className="block text-sm mb-2">
                          Team Size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => updateField('teamSize', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select team size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201+">201+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2">
                          Primary Use Case
                        </label>
                        <select
                          value={formData.useCase}
                          onChange={(e) => updateField('useCase', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select use case</option>
                          <option value="video">AI Video Production</option>
                          <option value="ads">Ad Campaign Management</option>
                          <option value="localization">Content Localization</option>
                          <option value="automation">Marketing Automation</option>
                          <option value="all">All of the above</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2">
                          Timeline to Launch
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => updateField('timeline', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (this month)</option>
                          <option value="1-3">1-3 months</option>
                          <option value="3-6">3-6 months</option>
                          <option value="exploring">Just exploring</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl mb-4">Schedule your demo</h3>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Preferred Time
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => updateField('preferredTime', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select time slot</option>
                          <option value="9am">9:00 AM - 10:00 AM</option>
                          <option value="10am">10:00 AM - 11:00 AM</option>
                          <option value="11am">11:00 AM - 12:00 PM</option>
                          <option value="1pm">1:00 PM - 2:00 PM</option>
                          <option value="2pm">2:00 PM - 3:00 PM</option>
                          <option value="3pm">3:00 PM - 4:00 PM</option>
                          <option value="4pm">4:00 PM - 5:00 PM</option>
                        </select>
                      </div>
                      
                      <div className="glass-surface rounded-xl p-4 border border-white/10 mt-6">
                        <p className="text-sm text-gray-400">
                          Our team will send you a calendar invite with a video link. The demo typically lasts 30-45 minutes.
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentStep === 4 && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                      >
                        <CheckCircle className="w-20 h-20 mx-auto mb-6 text-[var(--ai365-success)]" />
                      </motion.div>
                      <h3 className="text-3xl mb-4">Demo Booked!</h3>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        We've sent a confirmation email to <strong>{formData.email}</strong>. 
                        Our team will reach out shortly with next steps.
                      </p>
                      <AIButton onClick={onClose}>
                        Done
                      </AIButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Footer */}
              {currentStep <= totalSteps && (
                <div className="p-6 border-t border-white/10 flex items-center justify-between">
                  <AIButton
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </AIButton>
                  
                  {currentStep < totalSteps ? (
                    <AIButton onClick={nextStep}>
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </AIButton>
                  ) : (
                    <AIButton onClick={handleSubmit}>
                      Submit
                    </AIButton>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
