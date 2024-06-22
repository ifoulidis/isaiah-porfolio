"use client";
import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay: number;
}

const Reveal: React.FC<RevealProps> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
