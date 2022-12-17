import React from "react";
import classNames from "~/utils/classNames";
import { IconFireSale } from "../icon";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary, WrapperFlex } from "../common";
import { textColor, textSize } from "~/utils/arrCss";
const Heading = ({ children, sx, color, deal, total, font, className }) => {
  let resultTextSize = textSize.find((item) => item.text === sx);
  let resultTextColor = textColor.find((item) => item.color === color);

  return (
    <div className={classNames(deal && "block items-center gap-3 lg:flex")}>
      {deal && (
        <WrapperFlex
          spacing="1"
          items="center"
          className="mb-3 rounded bg-red-100 py-2 px-4 text-sm text-red-500 lg:hidden"
        >
          <span className="inline-block">
            <IconFireSale />
          </span>
          <span>{total} guests have booked in the last 24 hours</span>
        </WrapperFlex>
      )}
      <h2
        className={classNames(
          // "font-Poppins",
          font ? font : "font-semibold",
          sx && resultTextSize.textCss,
          color && resultTextColor.colorCss,
          className
        )}
      >
        {children}
      </h2>
      {deal && (
        <WrapperFlex
          items="center"
          spacing="1"
          className="hidden rounded-full bg-red-100 py-2 px-4 text-red-500 lg:flex"
        >
          <span className="inline-block">
            <IconFireSale />
          </span>
          <span>{total} guests have booked in the last 24 hours</span>
        </WrapperFlex>
      )}
    </div>
  );
};
Heading.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.string,
  color: PropTypes.string,
  deal: PropTypes.bool,
  total: PropTypes.number,
};
export default withErrorBoundary(Heading, {
  FallbackComponent: ErrorBoundary,
});
