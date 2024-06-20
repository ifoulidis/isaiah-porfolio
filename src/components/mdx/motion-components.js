import { motion } from "framer-motion";

export function MotionBlockquote({ children }) {
  console.log("reached");
  return (
    <motion.blockquote
      initial={{ opacity: 0.4, scale: 0.7 }}
      transition={{ duration: 0.3 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      {children}
    </motion.blockquote>
  );
}

export const MotionParagraph = ({ children }) => (
  <motion.p
    initial={{ opacity: 0.4, scale: 0.7 }}
    transition={{ duration: 0.3 }}
    whileInView={{ scale: 1, opacity: 1 }}
  >
    {children}
  </motion.p>
);

export const MotionList = ({ children }) => {
  return (
    <motion.li
      initial={{ opacity: 0.4, scale: 0.7 }}
      transition={{ duration: 0.3 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      {children}
    </motion.li>
  );
};
