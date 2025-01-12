import React, { useState } from "react";
import { useScroll } from "motion/react"
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "48%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "58%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "46%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "50%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "54%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll()
  scrollYProgress.on("change", (data) => {
    function imagesAnimation(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesAnimation([]);
        break;
      case 1:
        imagesAnimation([0]);
        break;
      case 2:
        imagesAnimation([0, 1]);
        break;
      case 4:
        imagesAnimation([0, 1, 2]);
        break;
      case 6:
        imagesAnimation([0, 1, 2, 3]);
        break;
      case 8:
        imagesAnimation([0, 1, 2, 3, 4]);
        break;
      case 10:
        imagesAnimation([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-5">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className=" text-medium text-[35vw] leading-none font-regular tracking-tight relative">
          work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ left: elem.left, top: elem.top }}
                  alt=""
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
