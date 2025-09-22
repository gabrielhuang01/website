import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  distance = 50,
  delay = 0,
  duration = 0.6,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 };
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
        return { x: 0, opacity: 1 };
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getTransform()}
      whileInView={getAnimateTransform()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      style={{
        y: direction === 'up' || direction === 'down' ? y : undefined,
        x: direction === 'left' || direction === 'right' ? y : undefined,
        opacity: direction === 'up' || direction === 'down' ? opacity : undefined,
        scale: direction === 'up' || direction === 'down' ? scale : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxScroll({ 
  children, 
  speed = 0.5,
  className = ""
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
