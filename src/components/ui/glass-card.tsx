import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl border border-primary/20 bg-background/70 backdrop-blur-lg backdrop-filter shadow-lg dark:bg-card/20 dark:backdrop-blur-lg dark:border-primary/30",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/5 before:via-cyan-500/5 before:to-teal-500/5 before:opacity-0 before:transition-opacity before:duration-300",
          "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-primary/10 after:via-cyan-500/10 after:to-teal-500/10 after:opacity-0 after:transition-opacity after:duration-300",
          hoverEffect &&
            "hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 ease-in-out hover:bg-background/80 dark:hover:bg-card/30 hover:before:opacity-100 hover:after:opacity-100",
          className
        )}
        whileHover={
          hoverEffect
            ? {
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 },
              }
            : undefined
        }
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
