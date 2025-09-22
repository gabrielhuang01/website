import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative py-12">
      {/* Professional gradient fade from hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100/60 to-transparent dark:from-slate-800 dark:via-slate-700/60 dark:to-transparent" />
      
      {/* Elegant divider line */}
      <div className="relative flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent dark:via-slate-600/40 w-full max-w-3xl" />
        
        {/* Professional decorative element */}
        <div className="absolute flex items-center justify-center w-16 h-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 rounded-full shadow-sm">
          <div className="w-3 h-3 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-full" />
        </div>
      </div>
      
      {/* Professional text */}
      <div className="text-center mt-8">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase">
          Portfolio
        </p>
      </div>
    </div>
  );
}
