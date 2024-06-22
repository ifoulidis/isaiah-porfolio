"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggableSlider: React.FC = () => {
  const x = useMotionValue(0);
  const color = useTransform(
    x,
    [-100, 0, 100],
    ["bg-green-500", "bg-blue-500", "bg-red-500"]
  );

  return (
    <div className="w-300 h-20 flex items-center justify-center">
      {/* Correctly close the motion.div */}
      <motion.div
        className={`w-300 h-4 ${color} rounded-full cursor-pointer`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      ></motion.div>
    </div>
  );
};

export default DraggableSlider;
