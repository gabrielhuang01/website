import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative py-8">
      {/* Gradient fade from hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200/50 to-transparent dark:from-slate-700 dark:via-slate-800/50 dark:to-transparent" />
      
      {/* Simple divider line */}
      <div className="relative flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent w-full max-w-2xl" />
        
        {/* Simple decorative element */}
        <div className="absolute flex items-center justify-center w-12 h-12 bg-background border border-muted-foreground/20 rounded-full">
          <div className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
        </div>
      </div>
      
      {/* Simple text */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground/60 font-medium tracking-wider uppercase">
          Portfolio
        </p>
      </div>
    </div>
  );
}
