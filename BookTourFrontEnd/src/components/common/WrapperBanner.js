import React from "react";
import Describe from "../describe/Describe";
import Heading from "../heading/Heading";
import Img from "../img/Img";

const WrapperBanner = ({ src, heading, describe, children }) => {
  return (
    <div className="relative h-[578px]">
      <Img alt="compo-car-hotel" src={src} />
      <div className="absolute inset-0 z-[20]">
        <div className="mx-auto w-full max-w-7xl px-5 pt-16 text-white lg:px-10">
          <div className="inline-block w-full max-w-[760px]">
            <Heading font="font-bold" sx="xl-4">
              {heading}
            </Heading>
            <Describe className="mt-4" sx="xl">
              {describe}
            </Describe>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperBanner;
