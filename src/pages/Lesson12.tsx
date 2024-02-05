import React from "react";
import { motion, useScroll } from "framer-motion";

const Lesson12 = () => {
  const { scrollXProgress } = useScroll();
  return (
    <motion.div
      className=" h-10 w-full fixed top-0 bg-green-500 "
      style={{ scaleX: scrollXProgress }}
    ></motion.div>
  );
};

export default Lesson12;
