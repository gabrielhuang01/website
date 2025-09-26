import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Code } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import AnimatedGradient from "./AnimatedGradient";
import { Rocket } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-12 pb-6 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient 
        className="opacity-5"
        colors={["#3b82f6", "#06b6d4", "#10b981"]}
        duration={20}
        direction="radial"
        size={400}
      />
      
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <ScrollReveal direction="up" distance={30}>
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <Rocket size={24} className="mr-2 text-primary" />
            Projects
          </h2>
        </ScrollReveal>

        <StaggerReveal staggerDelay={0.2}>
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title} 
              direction="up" 
              distance={50}
              delay={index * 0.1}
            >
              <GlassCard className="group overflow-hidden dark:border-primary/20 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-primary/5 via-cyan-500/5 to-teal-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main description content */}
                    <div className="flex-1">
                      <ul className="list-none ml-0 space-y-3 text-sm">
                        {project.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            className="text-muted-foreground relative pl-6 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 4 }}
                          >
                            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-200"></div>
                            <div className="absolute left-2 top-2 w-0.5 h-0.5 rounded-full bg-primary/40 group-hover/item:bg-primary/60 transition-all duration-200"></div>
                            <span className="group-hover/item:text-foreground/90 transition-colors duration-200">
                              {desc}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills sub-box */}
                    <div className="lg:w-64 w-full">
                      <motion.div
                        className="bg-background/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-primary/10 p-4 h-fit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center mb-3">
                          <Code className="h-4 w-4 text-primary mr-2" />
                          <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-2 py-1 rounded-lg font-medium border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-200"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-primary/5 via-cyan-500/5 to-teal-500/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group/link pt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                    View on GitHub 🔗
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </ScrollReveal>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}