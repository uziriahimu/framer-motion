import React from "react";
import { motion } from "framer-motion";

const parents = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const child = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        variants={parents}
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          staggerChildren: 1,
          delay: 0.5,
        }}
      >
        <motion.div
          className="bg-cyan-500 size-20 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-500 size-20 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-500 size-20 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="bg-cyan-500 size-20 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson1;
