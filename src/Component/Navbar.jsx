import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-7 flex items-center justify-between border-b-[2px] border-zinc-800">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className=" flex  gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? ( 
              <span className="w-[2px] h-7 bg-zinc-800" key={index} ></span>
            ) : (
              <a className="text-md flex items-center gap-1" key={index}>
                {index === 1 && (
                  <span
                  key={index}
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="bg-green-500  w-1.5 h-1.5   inline-block rounded "
                  ></span>
                )}
                {elem}
              </a>
            ),
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
