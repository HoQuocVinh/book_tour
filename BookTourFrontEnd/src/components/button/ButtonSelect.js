import React from "react";
import classNames from "~/utils/classNames";

const ButtonSelect = ({ children, className }) => {
  return (
    <div>
      <button className={classNames(className)}>{children}</button>
    </div>
  );
};

export default ButtonSelect;
