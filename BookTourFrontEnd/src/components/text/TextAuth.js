import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "@/common/ErrorBoundary";

const TextAuth = ({ pagraph, span, to }) => {
  return (
    <p className="mb-6 text-center text-xs font-normal text-c4 lg:mb-8 lg:text-sm">
      {pagraph}{" "}
      <Link to={to} className="font-medium text-primary-blue underline">
        {span}
      </Link>
    </p>
  );
};
TextAuth.propTypes = {
  pagraph: PropTypes.string,
  span: PropTypes.string,
  to: PropTypes.string,
};
export default withErrorBoundary(TextAuth, {
  FallbackComponent: ErrorBoundary,
});
