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
          hoverEffect &&
            "hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out hover:bg-background/80 dark:hover:bg-card/30",
          className
        )}
        whileHover={
          hoverEffect
            ? {
                y: -5,
                transition: { duration: 0.2 },
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
