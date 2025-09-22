import React from "react";
import { motion } from "framer-motion";

interface SkillProgressBarProps {
  skill: string;
  level: number;
  color?: string;
  delay?: number;
}

export default function SkillProgressBar({
  skill,
  level,
  color = "bg-primary",
  delay = 0,
}: SkillProgressBarProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
