import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import DoodleAnimation, { DoodleBounce } from "./DoodleAnimation";
import DoodleShape, { DoodleSquiggle, DoodleStar } from "./DoodleShape";
import TypingTitle from "./TypingTitle";

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
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Light, doodle-themed background elements */}
      <DoodleShape 
        className="top-20 right-16"
        size={60}
        color="#e0e7ff"
        delay={0.2}
      />
      <DoodleShape 
        className="bottom-20 left-16"
        size={40}
        color="#fef3c7"
        delay={0.4}
      />
      <DoodleStar 
        className="top-1/3 left-1/4"
        size={25}
        color="#fde68a"
        delay={0.6}
      />
      <DoodleSquiggle 
        className="bottom-1/3 right-1/4"
        delay={0.8}
      />
      
      {/* Simple floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
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
      
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <DoodleAnimation delay={0.2}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                Hey, I'm Gabriel. Come look around!
              </h1>
            </DoodleAnimation>

            <div className="text-xl text-slate-600 dark:text-slate-300 mb-8 min-h-[1.5rem]">
              <TypingTitle
                titles={[
                  "Undergrad at Cornell University",
                  "AI/ML Engineer",
                  "Software Engineer", 
                  "Quantitative Trader"
                ]}
                className="text-xl"
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2500}
                delay={1000}
              />
            </div>

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

          <div className="mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              {/* Simple static border */}
              <div className="absolute -inset-2 bg-slate-200 dark:bg-slate-600 rounded-full opacity-50" />
              
              {/* Profile image */}
              <img
                src={personalInfo.profilePicture}
                alt="Profile"
                className="w-48 md:w-56 rounded-full relative ring-2 ring-slate-300 dark:ring-slate-600 shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-600 shadow-lg">
          <p className="text-slate-700 dark:text-slate-300 pl-4 py-2 relative">
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
            {personalInfo.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
