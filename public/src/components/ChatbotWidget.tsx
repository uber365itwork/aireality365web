import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import { AIButton } from './AIButton';
import { Avatar, AvatarFallback } from './ui/avatar';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: string[];
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm the AI Reality 365 Assistant. How can I help you today?",
      timestamp: new Date(),
      options: [
        'Book a demo',
        'Learn about pricing',
        'Explore use cases',
        'Technical questions'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      handleBotResponse(content.toLowerCase());
      setIsTyping(false);
    }, 1000);
  };
  
  const handleBotResponse = (userInput: string) => {
    let response: Message;
    
    if (userInput.includes('demo') || userInput.includes('book')) {
      response = {
        id: messages.length + 2,
        type: 'bot',
        content: "Great! I can help you book a demo. Our team typically offers 30-45 minute sessions where we'll walk you through the platform and answer your questions. Would you like to schedule one now?",
        timestamp: new Date(),
        options: ['Yes, book demo', 'Tell me more first']
      };
    } else if (userInput.includes('pricing') || userInput.includes('cost')) {
      response = {
        id: messages.length + 2,
        type: 'bot',
        content: "We offer three plans:\n\n• Free Trial - $0/month (limited exports)\n• Pro - $299/month (unlimited exports, 10 brand kits)\n• Enterprise - Custom pricing (SSO/SAML, RBAC, SLA)\n\nAll plans include a 14-day free trial. Which would you like to learn more about?",
        timestamp: new Date(),
        options: ['Pro plan', 'Enterprise plan', 'Start free trial']
      };
    } else if (userInput.includes('use case') || userInput.includes('industry')) {
      response = {
        id: messages.length + 2,
        type: 'bot',
        content: "We serve teams across multiple industries:\n\n• E-commerce - Product videos & localization\n• Gaming - Trailers & tournament promos\n• Fintech - Compliance-safe explainers\n• Real Estate - Property walk-throughs\n• Education - Lecture shorts & micro-content\n\nWhich industry are you in?",
        timestamp: new Date(),
        options: ['E-commerce', 'Gaming', 'Other']
      };
    } else if (userInput.includes('technical') || userInput.includes('api')) {
      response = {
        id: messages.length + 2,
        type: 'bot',
        content: "For technical questions, I can help with:\n\n• API documentation & integration\n• SSO/SAML setup\n• Security & compliance\n• Data residency options\n\nWhat would you like to know more about?",
        timestamp: new Date(),
        options: ['API docs', 'Security info', 'Talk to support']
      };
    } else {
      response = {
        id: messages.length + 2,
        type: 'bot',
        content: "I can help you with:\n\n• Booking a demo\n• Pricing information\n• Use cases by industry\n• Technical questions\n\nWhat interests you most?",
        timestamp: new Date(),
        options: [
          'Book a demo',
          'Pricing',
          'Use cases',
          'Technical'
        ]
      };
    }
    
    setMessages(prev => [...prev, response]);
  };
  
  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-hero shadow-lg glow-primary flex items-center justify-center z-50"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] glass-surface rounded-3xl border border-white/20 elevation-2 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-hero">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-white/20 text-white">
                    <Bot className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-white">AI Reality 365</div>
                  <div className="text-xs text-white/80 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback className={message.type === 'bot' ? 'bg-gradient-hero text-white' : 'bg-white/10'}>
                      {message.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block px-4 py-2 rounded-2xl max-w-[80%] ${
                        message.type === 'bot'
                          ? 'bg-white/10 text-white'
                          : 'bg-gradient-hero text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                    
                    {/* Quick Reply Options */}
                    {message.options && message.type === 'bot' && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSendMessage(option)}
                            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs border border-white/20"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-hero text-white">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white/10 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--ai365-primary)] focus:outline-none transition-colors text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-hero hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI Reality 365
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
