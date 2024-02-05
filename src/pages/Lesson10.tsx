import { useDragControls, motion } from "framer-motion";
import React from "react";

const Lesson10 = () => {
  const controls = useDragControls();
  return (
    <div className="border border-red-500 flex flex-col justify-center items-center size-[500px]">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="bg-green-600 rounded-lg size-[100px] flex flex-wrap gap-5 justify-center items-center "
      ></div>
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        drag="x"
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson10;
