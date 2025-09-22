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
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient 
        className="opacity-20"
        colors={["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"]}
        duration={15}
        direction="diagonal"
        size={300}
      />
      
      {/* Morphing Shapes */}
      <div className="absolute top-20 right-10 opacity-30">
        <MorphingShape 
          size={150}
          colors={["#3b82f6", "#06b6d4"]}
          speed={2}
        />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <MorphingShape 
          size={100}
          colors={["#10b981", "#f59e0b"]}
          speed={1.5}
        />
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
              className="text-2xl md:text-3xl font-bold mb-2"
              variants={childVariants}
            >
              <AnimatedGradientText className="text-2xl md:text-3xl font-bold">
                Hey, I'm Gabriel. Come look around!
              </AnimatedGradientText>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
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
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={personalInfo.profilePicture}
              alt="Profile"
              className="w-48 md:w-60 rounded-full relative ring-2 ring-primary/50 dark:ring-primary/70"
              style={{ objectFit: "cover" }}
            />
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
