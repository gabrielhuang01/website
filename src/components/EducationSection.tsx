import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award, Book } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const relevantCoursework = [
  {
    course: "Data Structures & Algorithms",
    description: "Core algorithms and data structures. Covers time complexity analysis, trees, graphs, dynamic programming, and advanced algorithmic paradigms."
  },
  {
    course: "Machine Learning",
    description: "Supervised and unsupervised learning algorithms. Hands-on experience with neural networks, optimization, and model evaluation techniques."
  },
  {
    course: "Reinforcement Learning",
    description: "Advanced RL algorithms including Q-learning, policy gradients, actor-critic methods. Applications in stochastic optimization and game theory."
  },
  {
    course: "Discrete Event Simulation",
    description: "Modeling and simulation of complex systems. Queueing theory applications with real-world performance analysis and optimization."
  },
  {
    course: "Financial Engineering",
    description: "Mathematical finance, option pricing, portfolio theory, and risk management. Derivation of Black-Scholes and advanced quantitative methods."
  },
  {
    course: "Linear Algebra",
    description: "Vector spaces, matrices, eigenvalues, singular value decomposition. Applications in machine learning and computational methods."
  },
  {
    course: "Statistical Learning",
    description: "Regression, classification, and clustering methods. Statistical inference, cross-validation, and modern machine learning techniques."
  },
  {
    course: "Database Systems",
    description: "Relational and non-relational databases. Query optimization, indexing strategies, and distributed database architecture."
  }
];

export default function EducationSection() {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  return (
    <section
      id="education"
      className="py-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🎓
            </motion.span>{" "}
            Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`${edu.degree}`}
              subtitle={`${edu.institution} • ${edu.location}`}
              date={`📅 ${edu.period}`}
              logo={edu.logo}
              isLast={index === education.length - 1}
              index={index}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main education details */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">
                    📍 {edu.location}
                  </p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <motion.div
                      className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-primary/20 dark:bg-card/10 dark:border-primary/20 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 mr-2">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium">
                          ✨ Achievements & Activities
                        </h4>
                      </div>
                      <ul className="list-none ml-4 space-y-3 text-sm">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-muted-foreground relative pl-6 group"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            whileHover={{ x: 4 }}
                          >
                            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></div>
                            <div className="absolute left-2 top-2 w-0.5 h-0.5 rounded-full bg-primary/40 group-hover:bg-primary/60 transition-all duration-200"></div>
                            <span className="group-hover:text-foreground/90 transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
                
                {/* Coursework sub-section */}
                <div className="lg:w-80 w-full">
                  <motion.div
                    className="bg-background/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-primary/10 p-4 flex flex-col mt-3 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    style={{ minHeight: '100%' }}
                  >
                    <div className="flex items-center mb-3">
                      <Book className="h-4 w-4 text-primary mr-2" />
                      <h4 className="text-lg font-bold text-foreground">Relevant Coursework</h4>
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                      {relevantCoursework.slice(0, 6).map((courseData, courseIndex) => (
                        <motion.div
                          key={courseData.course}
                          className="relative w-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + courseIndex * 0.1 }}
                          viewport={{ once: true }}
                          onMouseEnter={() => setHoveredCourse(courseData.course)}
                          onMouseLeave={() => setHoveredCourse(null)}
                        >
                          <motion.div
                            className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-2 py-1 rounded-lg font-medium border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-200 w-full text-center cursor-pointer relative"
                            whileHover={{ scale: 1.02 }}
                          >
                            {courseData.course}
                          </motion.div>
                          
                          {/* Course description popup */}
                          {hoveredCourse === courseData.course && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute z-20 top-full left-0 right-0 mt-1 p-3 bg-background/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg border border-primary/20 shadow-lg"
                            >
                              <p className="text-xs text-foreground leading-relaxed">
                                {courseData.description}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
