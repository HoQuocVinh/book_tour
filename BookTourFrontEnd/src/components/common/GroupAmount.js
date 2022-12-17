import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
const GroupAmount = ({ children, spacing, className, onClick }) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-3",
        spacing ? spacing : "gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};
GroupAmount.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.string,
  className: PropTypes.string,
};
export default withErrorBoundary(GroupAmount, {
  FallbackComponent: ErrorBoundary,
});
