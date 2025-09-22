import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTitleProps {
  titles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  delay?: number;
}

export default function TypingTitle({
  titles,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  delay = 0
}: TypingTitleProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      const fullText = titles[currentTitleIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed, deletingSpeed, pauseTime, isPaused]);

  // Start the animation after the delay
  useEffect(() => {
    if (delay > 0) {
      const startTimeout = setTimeout(() => {
        setCurrentText(titles[0].substring(0, 1));
      }, delay);
      return () => clearTimeout(startTimeout);
    } else {
      setCurrentText(titles[0].substring(0, 1));
    }
  }, [delay, titles]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-slate-500 dark:text-slate-400"
      >
        |
      </motion.span>
    </motion.span>
  );
}
