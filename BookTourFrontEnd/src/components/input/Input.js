import React from "react";
import { useController, useWatch } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import ErrorBoundary from "@/common/ErrorBoundary";
import classNames from "~/utils/classNames";

const Input = ({
  pointer,
  variant,
  children,
  control,
  name,
  type,
  error = "",
  placeholder = "",
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  let defaultClasses =
    "text-sm font-medium font-Poppins transition-all w-full dark:border-dark-stroke dark:text-white ";
  switch (variant) {
    case "outlined":
      defaultClasses += "rounded-xl border bg-transparent px-6 py-4 text-c3";
      break;
    case "text":
      // eslint-disable-next-line no-self-assign
      defaultClasses = defaultClasses;
      break;
    default:
      break;
  }
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={classNames(
          defaultClasses,
          error.length > 0
            ? "border-primary-red text-primary-red"
            : "border-c6 text-c3",
          children ? "pr-16" : "",
          pointer && "cursor-pointer"
        )}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...rest}
      />
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(["outlined", "text"]),
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorBoundary,
});
