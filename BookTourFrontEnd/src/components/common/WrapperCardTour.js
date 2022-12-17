import React from "react";
import Describe from "../describe/Describe";
import Heading from "../heading/Heading";

const WrapperCardTour = ({ children, heading, descibe }) => {
  return (
    <div>
      <div className="mt-5 mb-4">
        <Heading sx="xl-3" color="light">
          {heading}
        </Heading>
        <Describe color="light">{descibe}</Describe>
      </div>
      <div>
        {children}
        <div className="py-5 text-center font-Helvetica">
          <button
            type="button"
            className="rounded-sm border-2 border-[#26bed6] bg-white  px-4 py-1 text-lg font-semibold text-[#26bed6] transition-all hover:bg-[#26bed6] hover:text-white"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default WrapperCardTour;
