import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
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
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
