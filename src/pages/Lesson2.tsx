import React, { useRef } from "react";
import { motion } from "framer-motion";

const parents = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      staggerChildren: 1,
      delay: 0.5,
    },
  },
  hover: {
    // scale: 2,
    // transition: {
    //   duration: 0.5,
    // },
  },
  tap: { scale: 1.1, boxShadow: "0px 10px 10px #000" },
};

const Lesson2 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="border border-red-500 flex justify-center items-center size-[500px]"
    >
      <motion.div
        variants={parents}
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragElastic={0.7}
        dragConstraints={parentRef}
        whileTap="tap"
        // onHoverStart={() => console.log("Hover")}
        // onHoverEnd={() => console.log("Hover end")}
      ></motion.div>
    </div>
  );
};

export default Lesson2;
