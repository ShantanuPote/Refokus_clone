import React from "react";
import { motion } from "framer-motion";

function Marque({ imagesurl, direction }) {
  const duplicatedImages = [...imagesurl, ...imagesurl];  
  return (
    <div className="flex w-full overflow-hidden">
       <motion.div
        className="flex gap-20 py-8 pr-40 flex-shrink-0 "
        initial={{ x: direction === "left" ? "0":"-100%"}}
        animate={{ x: direction === "left" ? "-100%":"0" }}
        transition={{ ease: "linear", duration: 10, repeat : Infinity }}
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div>
      {/* {duplicatedImages.map((url, index) => (
          <img src={url} key={index} className="w-[8vw]" alt={`Image ${index + 1}`} />
        ))} */}
      {/* <motion.div
        className="flex gap-20 py-8 pr-40 flex-shrink-0 "
        initial={{ x: direction === "left" ? "0":"-100%"}}
        animate={{ x: direction === "left" ? "-100%":"0" }}
        transition={{ ease: "linear", duration: 10, repeat : Infinity }}
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div> */}
    </div>
  );
}

export default Marque;
