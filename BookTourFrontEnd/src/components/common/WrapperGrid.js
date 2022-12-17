import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
import {
  arrSpacing,
  borderRadius,
  columnStartEnd,
  rowStartEnd,
  templateColumns,
  templateRows,
} from "~/utils/arrCss";
const Grid = ({
  onClick,
  children,
  cols,
  col,
  row,
  rows,
  spacing,
  className,
  radius,
  ...rest
}) => {
  let resultBorderRadius = borderRadius.find((item) => item.radius === radius);
  return (
    <div
      className={classNames(
        "grid",
        templateColumns[cols],
        columnStartEnd[col],
        templateRows[rows],
        rowStartEnd[row],
        arrSpacing[spacing - 1],
        radius && resultBorderRadius.radiusCss,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};
Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.string,
  col: PropTypes.string,
  rows: PropTypes.string,
  row: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(Grid, {
  FallbackComponent: ErrorBoundary,
});
