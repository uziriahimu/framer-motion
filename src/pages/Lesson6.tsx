import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Lesson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  //   const handleToggole = () => {
  //     setToggle(!toggle);
  //     if (toggle) {
  //       controls.start({ x: 200 });
  //     } else {
  //       controls.start({ x: -200 });
  //     }
  //   };

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);

  return (
    <div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: 200, transition: { delay: 1 } })}
      className="border border-red-500 flex flex-col  size-[500px]"
    >
      <button className="bg-green-500 p-3 rounded-md">Forward</button>
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        animate={controls}
        custom={1}
      ></motion.div>
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        animate={controls}
        custom={2}
      ></motion.div>
      <motion.div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        animate={controls}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
