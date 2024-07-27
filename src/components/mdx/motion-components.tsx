"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Message } from "../ui/message";

interface MotionProps {
  children: React.ReactNode;
}

export const MotionHeading = ({ children }: MotionProps) => {
  const [copied, setCopied] = useState(false);

  let customId = "";

  if (Array.isArray(children) && typeof children[0] !== "string") {
    const text = String(children[1]);
    customId = text
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[_.,#?"']/g, "");
  } else {
    customId = String(children)
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[_.,#?"']/g, "");
  }
  console.log(children);

  function copyToClipboard(id: string) {
    let url = window.location.href.split("#")[0];
    url = `${url}#${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch(function (err) {
        console.error("Failed to copy: ", err);
      });
  }

  return (
    <>
      <motion.h1
        id={customId}
        initial={{ opacity: 0.4, scale: 0.7 }}
        whileInView={{ scale: 1, opacity: 1 }}
        style={{ position: "relative" }}
        className="anchored"
        onClick={() => {
          window.scrollLock;
          copyToClipboard(customId);
        }}
      >
        {children}
      </motion.h1>
      {/* Show message if copied == true */}
      {copied && <Message variant="info">Copied to Clipboard</Message>}
    </>
  );
};

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
