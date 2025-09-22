import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import AnimatedGradient, { AnimatedGradientText } from "./AnimatedGradient";
import MorphingShape from "./MorphingShape";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic multi-layer animated background */}
      <AnimatedGradient 
        className="opacity-25"
        colors={["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
        duration={20}
        direction="diagonal"
        size={400}
      />
      
      {/* Secondary gradient layer */}
      <AnimatedGradient 
        className="opacity-15"
        colors={["#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]}
        duration={25}
        direction="radial"
        size={600}
      />
      
      {/* Multiple morphing shapes with complex animations */}
      <div className="absolute top-16 right-8 opacity-35">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={180}
            colors={["#3b82f6", "#06b6d4", "#8b5cf6"]}
            speed={2.5}
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-16 left-8 opacity-25">
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.7, 1],
            x: [-15, 15, -15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={120}
            colors={["#10b981", "#f59e0b", "#ef4444"]}
            speed={1.8}
          />
        </motion.div>
      </div>
      
      {/* Additional floating shapes */}
      <div className="absolute top-1/3 left-1/4 opacity-20">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={80}
            colors={["#ec4899", "#8b5cf6"]}
            speed={3}
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 opacity-15">
        <motion.div
          animate={{ 
            x: [-25, 25, -25],
            rotate: [0, -180, -360],
            scale: [1, 0.6, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MorphingShape 
            size={60}
            colors={["#f59e0b", "#ef4444"]}
            speed={2.2}
          />
        </motion.div>
      </div>
      
      {/* Floating particles with complex paths */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `linear-gradient(45deg, #3b82f6, #06b6d4, #10b981)`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.3, 1.5, 0.3],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={childVariants}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AnimatedGradientText className="text-3xl md:text-4xl font-bold">
                  Hey, I'm Gabriel. Come look around!
                </AnimatedGradientText>
              </motion.div>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8"
              variants={childVariants}
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Undergrad at Cornell University.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground group"
                variants={childVariants}
                whileHover={{ scale: 1.05, x: 4 }}
              >
                <MapPin className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">📍 {personalInfo.location}</span>
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
                variants={childVariants}
                whileHover={{ scale: 1.05, x: 4 }}
              >
                <Mail className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">✉️ {personalInfo.email}</span>
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
                variants={childVariants}
                whileHover={{ scale: 1.05, x: 4 }}
              >
                <Github className="h-4 w-4 mr-2 group-hover:text-primary group-hover:rotate-12 transition-all duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">🌟 GitHub</span>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
                variants={childVariants}
                whileHover={{ scale: 1.05, x: 4 }}
              >
                <Linkedin className="h-4 w-4 mr-2 group-hover:text-primary group-hover:rotate-12 transition-all duration-200" />
                <span className="group-hover:text-foreground transition-colors duration-200">🔗 LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ 
              scale: 1.08,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
          <div className="relative group">
            {/* Multiple animated rings */}
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full blur-sm opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-md opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Profile image with enhanced effects */}
            <motion.img
              src={personalInfo.profilePicture}
              alt="Profile"
              className="w-52 md:w-64 rounded-full relative ring-4 ring-primary/30 dark:ring-primary/50 shadow-2xl"
              style={{ objectFit: "cover" }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.6)",
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Floating elements around profile */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full"
                style={{
                  left: `${30 + (i % 3) * 20}%`,
                  top: `${20 + (i % 2) * 60}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5],
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
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-xl border border-primary/20 dark:border-primary/30 shadow-lg">
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 rounded-full"></span>
              {personalInfo.heroDescription}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
