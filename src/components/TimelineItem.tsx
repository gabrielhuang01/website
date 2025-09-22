import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  logo?: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  logo,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="flex h-[18px] w-[18px] rounded-full border border-primary/60 bg-background dark:bg-muted z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.2 + 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
        />
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-primary/60 via-cyan-500/40 to-teal-500/30 dark:from-primary/50 dark:via-cyan-500/30 dark:to-teal-500/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>
      <div className={cn("pb-8", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt="Company/Institution logo"
                className="w-8 h-8 rounded object-contain bg-background border border-border/20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
              <p className="text-xs text-muted-foreground/70 mb-2">{date}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
