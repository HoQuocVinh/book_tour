import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "../common/ErrorBoundary";
const IconText = ({
  hover,
  activeDefault,
  icon,
  icon1,
  icon2,
  children,
  margin,
  className,
  numberIcon,
  ...props
}) => {
  let render = "";
  switch (numberIcon) {
    case "1":
      render = <div className="text-center">{icon}</div>;
      break;
    case "2":
      render = (
        <div className="flex items-center justify-center gap-2 text-center">
          {icon1}
          {icon2}
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <div
      className={classNames(
        "inline-block first:ml-0 ml-8 cursor-pointer px-5 font-DMSans transition-all h-[78px] text-c4",
        className,
        activeDefault && "border-b-2 border-b-primary-blue text-c3",
        // hover && "hover:border-b-2 hover:border-b-primary-blue"
      )}
      {...props}
    >
      <div className="">
        {render}
        <div className="mt-2 font-bold text-sm">{children}</div>
      </div>
    </div>
  );
};
IconText.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.node,
};
export default withErrorBoundary(IconText, {
  FallbackComponent: ErrorBoundary,
});
