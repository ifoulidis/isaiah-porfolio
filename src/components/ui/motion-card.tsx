"use client";
import { motion } from "framer-motion";

interface MotionCardProps {
  title: string;
  price: string;
  description: string;
}

const MotionCard: React.FC<MotionCardProps> = ({
  title,
  price,
  description,
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      className="border-b border-gray-300 pb-8 dark:border-gray-700 flex flex-col items-center"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {title}
      </h2>
      <div className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center rounded-lg shadow-sm mb-5 p-6 text-center w-full max-w-lg">
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">
          {price}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.section>
  );
};

export default MotionCard;
