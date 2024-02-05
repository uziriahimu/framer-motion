import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div className="border border-red-500 flex flex-col justify-center items-center size-[500px]">
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 0.7 } }
            : { opacity: 0, x: -500 }
        }
        ref={ref}
      ></motion.div>
    </div>
  );
};

export default Lesson8;
