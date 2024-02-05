import React, { useRef } from "react";
import { motion } from "framer-motion";

const parents = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    x: [0, 200, -200, 0],
    y: [0, 200, -200, 0],
    rotate: [0, 200, -200, 0],
    opacity: 1,
    scale: 1,
    transition: {
      ease: "linear",
      duration: 2,
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
      rotate: {
        delay: 1,
        repeat: Infinity,
      },
    },
  },
};

const Lesson5 = () => {
  return (
    <div className="border border-red-500 flex justify-center items-center size-[500px]">
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        variants={parents}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
};

export default Lesson5;
