import React from "react";
import classNames from "~/utils/classNames";
const FormField = ({ className, children }) => {
  return (
    <div className={classNames("flex flex-col", className)}>{children}</div>
  );
};

export default FormField;
