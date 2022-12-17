import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import ErrorBoundary from "@/common/ErrorBoundary";
const Label = ({ htmlFor, className = "", children }) => {
  return (
    <div className="inline-block">
      <label
        htmlFor={htmlFor}
        className={classNames(
          "inline-block cursor-pointer text-sm font-medium text-c3 dark:text-c4",
          className
        )}
      >
        {children}
      </label>
    </div>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorBoundary,
});
