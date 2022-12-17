import React from "react";
import classNames from "~/utils/classNames";
import { WrapperFlex } from "../common";

const TagBenefit = ({ src, children, className }) => {
  return (
    <div className={classNames("inline-block", className)}>
      <WrapperFlex className="select-none" items="center" spacing="5">
        <div className="h-10 w-10">
          <img alt="" src={src} className="h-full w-full" />
        </div>
        <WrapperFlex col spacing="1">
          {children}
        </WrapperFlex>
      </WrapperFlex>
    </div>
  );
};

export default TagBenefit;
