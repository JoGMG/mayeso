import React from "react";
import { ReactTyped } from "react-typed";

function Hero({ img, headText, subText }) {
  return (
    <div className="px-4 mx-auto max-w-[1240px] flex flex-col lg:flex-row items-center justify-center gap-6">
      <div className="text-center mt-8 lg:mt-6 lg:text-left flex flex-col gap-3 w-[50%]">
        <h1 className="text-5xl lg:text-4xl font-bold">{headText}</h1>
        <p className="text-xl ">{subText}</p>
        <div className="font-semibold capitalize text-lg">
          <span>solve questions about </span>
          <ReactTyped
            className="text-secondary"
            strings={[
              "Sports",
              "Geography",
              "Mathematics",
              "History",
              "Entertainment",
              "Science",
            ]}
            loop
          />
        </div>
      </div>
      <div>
        <img src={img} alt={img} />
      </div>
    </div>
  );
}

export default Hero;
