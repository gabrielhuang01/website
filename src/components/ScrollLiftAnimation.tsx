import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollLiftAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollLiftAnimation({ children, className = "" }: ScrollLiftAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform values for the lift effect
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [100, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1.02]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
