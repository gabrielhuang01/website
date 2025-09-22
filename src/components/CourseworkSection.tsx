import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

const coursework = [
  {
    category: "Computer Science",
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Computer Vision",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Distributed Systems"
    ]
  },
  {
    category: "Operations Research & Information Engineering",
    courses: [
      "Optimization Methods",
      "Stochastic Processes",
      "Reinforcement Learning",
      "Statistical Learning",
      "Discrete Event Simulation",
      "Queueing Theory",
      "Financial Engineering",
      "Risk Management"
    ]
  },
  {
    category: "Mathematics & Statistics",
    courses: [
      "Linear Algebra",
      "Probability Theory",
      "Statistical Inference",
      "Multivariable Calculus",
      "Differential Equations",
      "Real Analysis",
      "Numerical Methods",
      "Time Series Analysis"
    ]
  }
];

function CourseTag({ course, index }: { course: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        rotate: 1,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="px-3 py-2 bg-muted/80 backdrop-blur-sm rounded-lg text-sm border border-primary/20 shadow-sm font-medium group cursor-pointer hover:bg-primary/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
    >
      <span className="group-hover:text-primary transition-colors duration-200">
        {course}
      </span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CourseworkSection() {
  return (
    <section
      id="coursework"
      className="py-6 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📚 Coursework
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coursework.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={categoryVariants}>
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold mb-4 text-center md:text-left flex items-center">
                  <span className="mr-2 text-xl">
                    {categoryIndex === 0 && "💻"}
                    {categoryIndex === 1 && "⚙️"}
                    {categoryIndex === 2 && "📊"}
                  </span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {category.courses.map((course, index) => (
                    <CourseTag key={course} course={course} index={index} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
