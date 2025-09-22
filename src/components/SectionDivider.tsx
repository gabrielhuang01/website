import { motion } from "framer-motion";
import MorphingShape from "./MorphingShape";
import AnimatedGradient from "./AnimatedGradient";

export default function SectionDivider() {
  return (
    <motion.div
      className="relative py-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated gradient background */}
      <AnimatedGradient 
        className="opacity-10"
        colors={["#3b82f6", "#06b6d4", "#10b981"]}
        duration={8}
        direction="horizontal"
        size={200}
      />
      
      {/* Morphing shapes */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 opacity-20">
        <MorphingShape 
          size={80}
          colors={["#3b82f6", "#06b6d4"]}
          speed={1}
        />
      </div>
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 opacity-15">
        <MorphingShape 
          size={60}
          colors={["#10b981", "#f59e0b"]}
          speed={1.5}
        />
      </div>
      
      {/* Main divider line */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full max-w-2xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        />
        
        {/* Central decorative element */}
        <motion.div
          className="absolute flex items-center justify-center w-16 h-16 bg-background border-2 border-primary/30 rounded-full"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-3 h-3 bg-primary rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Subtle text */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground/60 font-medium tracking-wider uppercase">
          Portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}
