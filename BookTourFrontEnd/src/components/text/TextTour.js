import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary, WrapperFlex } from "../common";
const TextTour = ({ children }) => {
  return (
    <WrapperFlex className="text-lg font-bold text-c3" center spacing="2">
      <img alt="icon-check" className="h-14 w-14" src="check.png" />
      {children}
    </WrapperFlex>
  );
};
TextTour.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};
export default withErrorBoundary(TextTour, {
  FallbackComponent: ErrorBoundary,
});
