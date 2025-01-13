import React, { useState } from "react";
import Button from "./Button";
function Product({ item, mover, count }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="h-[23rem] w-full py-14">
      <div
        style={{
          backgroundImage: hover ? `url(${item.bgimage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat:"no-repeat",
          padding: hover && '10px',
          transition: "background-image 0.3s ease-in, padding 0.3s ease-in, transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)"
        }}
      >
        <div
          onMouseEnter={() => {
            mover(count);
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
          className="max-w-screen-xl mx-auto  flex items-center justify-between py-12 "
        >
          <h1 className="text-6xl capitalize font-semibold">{item.title}</h1>
          <div className="dets w-1/3">
            <p className="mb-10">{item.description}</p>
            <div className="flex items-center gap-5">
              {item.live && <Button />}
              {item.case && <Button title="Case study" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
