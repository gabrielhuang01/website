import { motion } from "framer-motion";

export default function SimpleDivider() {
  return (
    <motion.div
      className="relative py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
