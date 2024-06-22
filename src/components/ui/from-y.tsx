"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";
import { menuList } from "./variants";

interface FromLeftProps {
  title: string;
  slug: string;
  y: number;
}

const FromLeft: React.FC<FromLeftProps> = ({ title, slug, y }) => {
  return (
    <motion.div variants={menuList} initial={{ y: y }} animate={{ y: 0 }}>
      <li key={slug}>
        <Link
          href={`/${slug}`}
          className={
            buttonVariants({ variant: "ghost", size: "sm" }) + " capitalize"
          }
        >
          {title}
        </Link>
      </li>
    </motion.div>
  );
};

export default FromLeft;
