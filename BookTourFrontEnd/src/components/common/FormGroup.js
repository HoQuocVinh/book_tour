import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="mb-4 flex flex-col gap-y-2 lg:mb-5 lg:gap-y-3">
      {children}
    </div>
  );
};

export default FormGroup;
