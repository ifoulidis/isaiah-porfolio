"use client";
import { motion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
}

export function MotionBlockquote({ children }: MotionProps) {
  console.log("reached");
  return (
    <motion.blockquote
      initial={{ opacity: 0.4, x: 30 }}
      transition={{ duration: 0.3 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      {children}
    </motion.blockquote>
  );
}

export const MotionParagraph = ({ children }: MotionProps) => (
  <motion.p
    initial={{ opacity: 0.4, x: 30 }}
    transition={{ duration: 0.3 }}
    whileInView={{ x: 0, opacity: 1 }}
  >
    {children}
  </motion.p>
);

export const MotionList = ({ children }: MotionProps) => {
  return (
    <motion.li
      initial={{ opacity: 0.4, x: 30 }}
      transition={{ duration: 0.3 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      {children}
    </motion.li>
  );
};
