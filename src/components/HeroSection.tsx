import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Undergrad at Cornell University",
    "AI/ML Engineer",
    "Software Engineer", 
    "Discretionary & Systematic Trader"
  ];

  useEffect(() => {
    const currentFullTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentTitle(currentFullTitle.substring(0, currentTitle.length - 1));
        if (currentTitle === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCurrentTitle(currentFullTitle.substring(0, currentTitle.length + 1));
        if (currentTitle === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentTitle, isDeleting, currentIndex, titles]);

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
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Professional background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-slate-300/20 dark:from-slate-700/30 dark:to-slate-600/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-slate-300/20 to-slate-400/10 dark:from-slate-600/20 dark:to-slate-500/10 rounded-full blur-lg" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-bl from-slate-200/25 to-slate-300/15 dark:from-slate-700/25 dark:to-slate-600/15 rounded-full blur-md" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }} 
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              welcome to my website.
            </h1>

            <div className="text-xl text-slate-600 dark:text-slate-300 mb-8 min-h-[1.5rem]">
              <span className="text-xl">
                {currentTitle}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-slate-500 dark:text-slate-400"
                >
                  |
                </motion.span>
              </span>
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

          <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Professional square border with gradient */}
              <div className="absolute -inset-1 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 rounded-2xl shadow-xl" />
              <div className="absolute -inset-0.5 bg-white dark:bg-slate-900 rounded-2xl" />
              
              {/* Profile image with square, professional styling */}
              <img
                src={personalInfo.profilePicture}
                alt="Profile"
                className="w-48 md:w-56 h-48 md:h-56 rounded-2xl relative ring-1 ring-slate-200 dark:ring-slate-700 shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                style={{ objectFit: "cover" }}
              />
              
              {/* Subtle inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
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