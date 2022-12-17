import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "../common";

const Number = ({ children, name, control, initialValue, ...rest }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <span className="font-Poppins text-sm text-c3" {...field} {...rest}>
      {field.value} {children}
    </span>
  );
};
Number.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  initialValue: PropTypes.any,
};
export default withErrorBoundary(Number, {
  FallbackComponent: ErrorBoundary,
});
