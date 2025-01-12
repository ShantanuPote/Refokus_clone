import React from "react";

function Footer() {
  return (
    <div className="w-full mt-20">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11rem] tracking-tight leading-none">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-20">
          <div>
            <h4 className="mb-10 capitalize text-zinc-500">socials</h4>
            {["instagram", "twitter(x?)", "linkedin"].map((item,index) => (
              <a className="block capitalize text-zinc-500 mt-2" key={index}>{item}</a>
            ))}
          </div>
          <div>
            <h4 className="mb-10 capitalize text-zinc-500">Sitemaps</h4>
            {["Home", "Work", "Careers", "contact"].map((item,index) => (
              <a className="block capitalize  mt-2" key={index}>{item}</a>
            ))}
          </div>
          <div className="flex flex-col items-end justify-between">
            <p className="text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
              className="bg-blue-700 w-24 px-2 py-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
