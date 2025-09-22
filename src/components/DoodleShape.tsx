import React from 'react';
import { motion } from 'framer-motion';

interface DoodleShapeProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

export default function DoodleShape({ 
  className = "",
  size = 40,
  color = "#3b82f6",
  delay = 0
}: DoodleShapeProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      animate={{ 
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 1
      }}
    />
  );
}

export function DoodleSquiggle({ 
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 2,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg width="100" height="20" viewBox="0 0 100 20">
        <motion.path
          d="M10,10 Q30,0 50,10 T90,10"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5,
            delay: delay + 0.5,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
}

export function DoodleStar({ 
  className = "",
  size = 30,
  color = "#f59e0b",
  delay = 0
}: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      whileInView={{ opacity: 0.4, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      animate={{ 
        rotate: [0, 15, -15, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.8
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </motion.div>
  );
}
