"use client";
import { motion } from "framer-motion";
import React from "react";
import { menuList } from "./variants";

interface SequentialTabsProps {
  children: React.ReactNode;
}

const SequentialTabs: React.FC<SequentialTabsProps> = ({ children }) => {
  return (
    <motion.ul
      variants={menuList}
      className="hidden md:flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base"
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};

export default SequentialTabs;
