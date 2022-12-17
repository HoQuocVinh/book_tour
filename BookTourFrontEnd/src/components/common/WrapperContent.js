import React from "react";
import classNames from "~/utils/classNames";

const WrapperContent = ({ children, className }) => {
  return (
    <div className={classNames("h-full w-full bg-white px-4", className)}>
      {children}
    </div>
  );
};

export default WrapperContent;
