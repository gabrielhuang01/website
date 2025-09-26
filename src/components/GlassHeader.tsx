import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X, GraduationCap, Briefcase, BookOpen, Rocket, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl backdrop-blur-lg backdrop-filter bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-bold text-slate-800 dark:text-slate-100"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["education", "experience", "coursework", "projects", "awards"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="flex items-center space-x-1.5 transition-colors hover:text-slate-800 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item === "education" && <GraduationCap size={16} />}
                {item === "experience" && <Briefcase size={16} />}
                {item === "coursework" && <BookOpen size={16} />}
                {item === "projects" && <Rocket size={16} />}
                {item === "awards" && <Trophy size={16} />}
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-slate-600 dark:text-slate-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-slate-200/20 dark:border-slate-700/20 backdrop-blur-md backdrop-filter bg-white/90 dark:bg-slate-900/90 rounded-b-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["education", "experience", "coursework", "projects", "awards"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="flex items-center space-x-2 transition-colors hover:text-slate-800 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400 py-2"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item === "education" && <GraduationCap size={16} />}
                    {item === "experience" && <Briefcase size={16} />}
                    {item === "coursework" && <BookOpen size={16} />}
                    {item === "projects" && <Rocket size={16} />}
                    {item === "awards" && <Trophy size={16} />}
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
