import React from "react";

const Rating = ({ point, children, numberRate, className }) => {
  return (
    <div className={className}>
      <span className="rounded-md bg-[#9fc43a] p-1 font-semibold text-white">
        {point}
      </span>
      <p className="inline-block px-2 font-semibold  text-[#9fc43a]">
        {children}
      </p>
      <p className="inline-block border-l border-l-c3 pl-2 leading-none">
        <span>{numberRate}</span> rates
      </p>
    </div>
  );
};

export default Rating;
