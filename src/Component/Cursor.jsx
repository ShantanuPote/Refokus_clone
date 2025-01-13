import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 10,
  //     y: mousePosition.y - 10,
  //   },
  // };

  return (
    <div>
      {/* <motion.div
        variants={variants}
        animate="default"
        // transition={{ease:}} 
        className="w-[20px] h-[20px] rounded-full bg-white fixed z-10"
        style={{ mixBlendMode: `difference`,
          // pointerEvents:"on"
         }}
      ></motion.div> */}
      <div
        className="w-[20px] h-[20px] rounded-full bg-white fixed z-10"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transition: `transform 1s cubic-bezier(0.32, 0, 0.67, 0)`,
          mixBlendMode: `difference`
        }}
      ></div>
    </div>
  );
}

export default Cursor;
