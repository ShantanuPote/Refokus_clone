import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover = "false" ,header,title }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-lg ${width} flex flex-col  justify-between min-h-[30rem]`}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>{title}</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-4xl mt-5">{header}</h1>
      </div>
      <div>
        {start === true && (
          <>
            <h1 className="text-6xl  tracking-tight leading-none ">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {para === true && (
          <>
            <p className="text-zinc-500">
            Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
