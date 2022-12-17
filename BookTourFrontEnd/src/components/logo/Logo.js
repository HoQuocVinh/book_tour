import { memo } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

import classNames from "~/utils/classNames";
import { ErrorBoundary } from "@/common";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" tabIndex={-1}>
      <div
        className={classNames(
          "header-left flex cursor-pointer select-none items-center gap-[10px]",
          className
        )}
      >
        <img
          srcSet="logo.png 2x"
          alt="logo"
          className="logo h-7 w-7 lg:h-[38px] lg:w-10"
        />
        <div className="name-page font-OpenSans text-sm font-bold text-c2 dark:text-white lg:text-xl">
          TripGuide
        </div>
      </div>
    </Link>
  );
};

export default memo(
  withErrorBoundary(Logo, {
    FallbackComponent: ErrorBoundary,
  })
);
