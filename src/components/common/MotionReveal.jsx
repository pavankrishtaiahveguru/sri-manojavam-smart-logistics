"use client";

import { MotionConfig, motion } from "framer-motion";

export default function MotionReveal({ children, className = "", delay = 0 }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.45, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
