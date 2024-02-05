import { useAnimate } from "framer-motion";
import React from "react";

const Lesson9 = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
    ]);
  };
  return (
    <div className="border border-red-500 flex flex-col justify-center items-center size-[500px]">
      <div
        className="bg-indigo-600 rounded-lg size-64 flex flex-wrap gap-5 justify-center items-center "
        onClick={handleClick}
        ref={scope}
      ></div>
    </div>
  );
};

export default Lesson9;
