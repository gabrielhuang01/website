import { motion } from "framer-motion";
import MorphingShape from "./MorphingShape";
import AnimatedGradient from "./AnimatedGradient";

export default function SectionDivider() {
  return (
    <motion.div
      className="relative py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Dynamic animated gradient background */}
      <AnimatedGradient 
        className="opacity-15"
        colors={["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"]}
        duration={12}
        direction="diagonal"
        size={300}
      />
      
      {/* Multiple morphing shapes with different animations */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 opacity-25">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={100}
            colors={["#3b82f6", "#06b6d4"]}
            speed={2}
          />
        </motion.div>
      </div>
      
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 opacity-20">
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={80}
            colors={["#10b981", "#f59e0b"]}
            speed={1.5}
          />
        </motion.div>
      </div>
      
      {/* Additional floating shapes */}
      <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 opacity-15">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={60}
            colors={["#ef4444", "#f59e0b"]}
            speed={3}
          />
        </motion.div>
      </div>
      
      {/* Main divider line with wave animation */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-full max-w-3xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        {/* Central decorative element with complex animation */}
        <motion.div
          className="absolute flex items-center justify-center w-20 h-20 bg-background border-2 border-primary/40 rounded-full shadow-lg"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 12
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            rotate: 180,
            transition: { duration: 0.5 }
          }}
        >
          {/* Inner rotating ring */}
          <motion.div
            className="absolute w-16 h-16 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Pulsing center dot */}
          <motion.div
            className="w-4 h-4 bg-gradient-to-r from-primary to-cyan-500 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {/* Enhanced floating particles with trails */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: `linear-gradient(45deg, #3b82f6, #06b6d4)`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Animated text with typewriter effect */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-lg text-muted-foreground/80 font-medium tracking-widest uppercase"
          animate={{ 
            letterSpacing: ["0.2em", "0.4em", "0.2em"],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Portfolio
        </motion.p>
        
        {/* Decorative lines */}
        <motion.div
          className="flex items-center justify-center mt-4 space-x-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
