import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "education", label: "Education", icon: "🎓" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "skills", label: "Skills", icon: "🛠️" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "awards", label: "Awards", icon: "🏆" },
];

export default function InteractiveSidebar() {
  const [activeSection, setActiveSection] = useState("education");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div className="bg-background/80 backdrop-blur-lg border border-primary/20 rounded-xl p-3 shadow-lg">
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="whitespace-nowrap">{section.label}</span>
                  {activeSection === section.id && (
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
