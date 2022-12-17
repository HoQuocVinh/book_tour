import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
import WrapperFlex from "./WrapperFlex";

const WrapperAmount = ({ children, className }) => {
  return (
    <WrapperFlex
      justify="between"
      className={classNames("bg-white p-[10px]", className)}
    >
      {children}
    </WrapperFlex>
  );
};
WrapperAmount.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default withErrorBoundary(WrapperAmount, {
  FallbackComponent: ErrorBoundary,
});
