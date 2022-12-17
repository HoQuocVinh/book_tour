import React from "react";

const WrapperTour = ({ children }) => {
  return (
    <div className="px-5 py-[30px] dark:bg-c2 lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-5">
      {children}
    </div>
  );
};

export default WrapperTour;
