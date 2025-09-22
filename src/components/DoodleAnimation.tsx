import React from 'react';
import { motion } from 'framer-motion';

interface DoodleAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function DoodleAnimation({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.6
}: DoodleAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        rotate: -5
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        rotate: 0
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}

export function DoodleBounce({ 
  children, 
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.5
      }}
    >
      {children}
    </motion.div>
  );
}

export function DoodleWiggle({ 
  children, 
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        delay,
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      animate={{ 
        rotate: [0, 1, -1, 0],
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.3
      }}
    >
      {children}
    </motion.div>
  );
}
