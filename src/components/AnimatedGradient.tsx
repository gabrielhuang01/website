import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
  duration?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal' | 'radial';
  size?: number;
}

export default function AnimatedGradient({
  className = "",
  colors = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"],
  duration = 8,
  direction = 'diagonal',
  size = 200
}: AnimatedGradientProps) {
  const getGradientDirection = () => {
    switch (direction) {
      case 'horizontal':
        return 'to right';
      case 'vertical':
        return 'to bottom';
      case 'diagonal':
        return 'to bottom right';
      case 'radial':
        return 'circle';
      default:
        return 'to bottom right';
    }
  };

  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background: `linear-gradient(${getGradientDirection()}, ${colors.join(', ')})`,
        backgroundSize: `${size}% ${size}%`,
      }}
      animate={{
        backgroundPosition: [
          '0% 0%',
          '100% 100%',
          '0% 100%',
          '100% 0%',
          '0% 0%'
        ]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

export function AnimatedGradientText({ 
  children, 
  className = "",
  colors = ["#3b82f6", "#06b6d4", "#10b981"]
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
}) {
  return (
    <motion.span
      className={className}
      style={{
        background: `linear-gradient(45deg, ${colors.join(', ')})`,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
}
