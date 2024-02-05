import React from "react";
import { motion } from "framer-motion";
import { useCycle } from "framer-motion";
const Lesson7 = () => {
  const boxAnimate = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: 100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
  ];
  const [animate, cycle] = useCycle(...boxAnimate);
  //   const [x, cycle] = useCycle(0, 100, -100, 200, -200);
  return (
    <div className="border border-red-500 flex justify-center items-center size-[500px]">
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        animate={animate}
        onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
