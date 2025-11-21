import React from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface AIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export function AIButton({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  className = '',
  children,
  disabled,
  ...props 
}: AIButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-[var(--ai365-primary)] text-white hover:shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-[var(--ai365-secondary)] text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'bg-transparent border border-[var(--border)] text-foreground hover:bg-[var(--muted)] hover:-translate-y-0.5 active:translate-y-0',
    icon: 'bg-transparent text-foreground hover:bg-[var(--muted)] rounded-full'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 rounded-lg h-9',
    md: 'px-6 py-3 rounded-xl h-11',
    lg: 'px-8 py-4 rounded-2xl h-14'
  };
  
  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
}
