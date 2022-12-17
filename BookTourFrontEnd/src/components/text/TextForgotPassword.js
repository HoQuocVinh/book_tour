import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "@/common/ErrorBoundary";
const TextForgotPassword = ({ to }) => {
  return (
    <div className="mb-5 w-full text-right ">
      <Link to={to}>
        <p className="inline-block text-sm font-medium text-primary-blue">
          Forgot password?
        </p>
      </Link>
    </div>
  );
};

TextForgotPassword.propTypes = {
  to: PropTypes.string.isRequired,
};
export default withErrorBoundary(TextForgotPassword, {
  FallbackComponent: ErrorBoundary,
});
