import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-6 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              💼
            </motion.span>{" "}
            Work Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position}`}
              subtitle={`${job.company} • ${job.location}`}
              date={`📅 ${job.period}`}
              logo={job.logo}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main achievements content */}
                <div className="flex-1">
                  <motion.div
                    className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-primary/20 dark:bg-card/10 dark:border-primary/20 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 mr-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-medium">Key Achievements</h4>
                    </div>
                    <ul className="list-none ml-4 space-y-3 text-sm">
                      {job.achievements.map((achievement, i) => (
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
                </div>
                
                {/* Skills sub-box aligned with job title */}
                <div className="lg:w-64 w-full flex">
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
                      <Code className="h-4 w-4 text-primary mr-2" />
                      <h4 className="text-lg font-bold text-foreground">Technologies</h4>
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                      {job.skills?.slice(0, 4).map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="w-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-2 py-1 rounded-lg font-medium border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-200 w-full inline-block"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
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
