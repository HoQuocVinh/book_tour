import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "@/common/ErrorBoundary";

const ButtonGoggle = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="item-center mb-5 flex w-full 
      justify-center gap-x-3 rounded-[10px] border border-c6 py-3 font-semibold text-c4 dark:border-dark-stroke dark:text-white"
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      {children}
    </button>
  );
};

ButtonGoggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoggle, {
  FallbackComponent: ErrorBoundary,
});
