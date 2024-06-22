"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

interface FromLeftProps {
  title: string;
  value: number;
}

const FromLeft: React.FC<FromLeftProps> = ({ title, value }) => {
  return (
    <motion.div
      initial={{ x: value, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <Link
        href="/"
        className="hover:text-slate-900 hover:dark:text-blue-200 px-5 underline-offset-2 font-semibold transition-all hover:scale-105"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default FromLeft;
