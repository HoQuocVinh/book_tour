import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "@/common";
const Wrapper = ({ onClick, children }) => {
  return (
    <span
      className="cursor-pointer border border-c5 select-none"
      onClick={onClick}
    >
      {children}
    </span>
  );
};
Wrapper.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default withErrorBoundary(Wrapper, {
  FallbackComponent: ErrorBoundary,
});
