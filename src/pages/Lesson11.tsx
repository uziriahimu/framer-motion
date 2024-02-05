import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson11 = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);
  return (
    <div className="border border-red-500 flex flex-col justify-center items-center size-[500px]">
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        drag="x"
        style={{ x, scale, rotate }}
        dragConstraints={{ left: 0, right: 0 }}
        dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default Lesson11;
