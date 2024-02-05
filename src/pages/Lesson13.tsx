import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Lesson13 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transaction: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transaction: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="border border-red-500 flex justify-center items-center size-[500px]">
      <button onClick={() => setVisible(!visible)}>Toggole</button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
            initial="hidden"
            animate="visible"
            variants={box}
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
