import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.webm";
import ttr from "../assets/ttr.webm";
import yahoo from "../assets/yahoo.webm";
import yir from "../assets/yir.webm";

function Products() {
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 20);
  };

  var data = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
    },
  ];

  return (
    <div className="mt-32 relative">
      {data.map((item, index) => (
        <Product
          item={item}
          key={index}
          mover={mover}
          count={index}
          direction={index === 0 ? "right" : "left"}
        />
      ))}
      <div className="w-full h-full top-0 absolute  pointer-events-none ">
        <motion.div
          className="window h-[20rem] w-[30rem] absolute  bg-white left-[44%]  overflow-hidden "
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop src={arqitel} type="video/webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            {" "}
            <video autoPlay muted loop src={ttr} type="video/webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            {" "}
            <video autoPlay muted loop src={yahoo} type="video/webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            {" "}
            <video autoPlay muted loop src={yir} type="video/webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
