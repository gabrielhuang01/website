import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MorphingShapeProps {
  className?: string;
  colors?: string[];
  size?: number;
  speed?: number;
}

export default function MorphingShape({ 
  className = "", 
  colors = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"],
  size = 200,
  speed = 3
}: MorphingShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = size;
      canvas.height = size;
    };

    const drawMorphingShape = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const time = timeRef.current * 0.01;
      
      // Create morphing shape with multiple points
      const points = 8;
      const radius = size * 0.3;
      const morphRadius = size * 0.1;
      
      ctx.beginPath();
      
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const morphAngle = angle + time * speed;
        const morphOffset = Math.sin(morphAngle * 2) * morphRadius;
        const currentRadius = radius + morphOffset;
        
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      const colorIndex = Math.floor(time) % colors.length;
      const nextColorIndex = (colorIndex + 1) % colors.length;
      const t = (time % 1);
      
      gradient.addColorStop(0, colors[colorIndex]);
      gradient.addColorStop(1, colors[nextColorIndex]);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add glow effect
      ctx.shadowColor = colors[colorIndex];
      ctx.shadowBlur = 20;
      ctx.fill();
      
      timeRef.current++;
      animationRef.current = requestAnimationFrame(drawMorphingShape);
    };

    resizeCanvas();
    drawMorphingShape();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, size, speed]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  );
}
