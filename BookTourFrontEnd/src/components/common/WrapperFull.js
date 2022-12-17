import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
const WrapperFull = ({ children, className }) => {
  return (
    <div className={classNames("h-full w-full", className)}>{children}</div>
  );
};
WrapperFull.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default withErrorBoundary(WrapperFull, {
  FallbackComponent: ErrorBoundary,
});
