import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import AnimatedGradient from "./AnimatedGradient";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-6 relative overflow-hidden">
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
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
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