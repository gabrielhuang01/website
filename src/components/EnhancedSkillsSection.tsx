import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import SkillProgressBar from "./SkillProgressBar";
import MotionWrapper from "./MotionWrapper";

const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "R", level: 75 },
      { name: "C", level: 70 },
      { name: "Java", level: 65 },
    ],
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "scikit-learn", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "Reinforcement Learning", level: 85 },
    ],
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 75 },
      { name: "RESTful APIs", level: 85 },
    ],
    color: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Looker", level: 80 },
      { name: "Data Visualization", level: 90 },
      { name: "Statistical Analysis", level: 85 },
      { name: "ETL Processes", level: 75 },
    ],
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

export default function EnhancedSkillsSection() {
  return (
    <section id="skills" className="py-6 bg-gradient-to-b from-muted/5 to-background">
      <div className="container max-w-6xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🛠️
            </motion.span>
            Technical Skills
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold mb-6 text-center md:text-left flex items-center">
                  <span className="mr-2 text-xl">
                    {categoryIndex === 0 && "💻"}
                    {categoryIndex === 1 && "🤖"}
                    {categoryIndex === 2 && "🌐"}
                    {categoryIndex === 3 && "📊"}
                  </span>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillProgressBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={skillIndex * 0.1}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
