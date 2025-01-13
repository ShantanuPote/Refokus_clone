import React from "react";
import { motion } from "framer-motion";

function Marque({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex gap-20 py-8 pr-40 flex-shrink-0 "
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-20 py-8 pr-40 flex-shrink-0 "
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marque;
