import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary, WrapperFlex } from "../common";
import { IconPenUnderline, IconTrash } from "../icon/IconProfilePage";
import { borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

const ButtonEdit = ({
  children,
  radius,
  className,
  hasIconPen,
  hasIconTrash,
  hasDisable,
  colorIcon,
  ...rest
}) => {
  let resultBorderRadius = borderRadius.find((item) => item.radius === radius);
  return (
    <button
      className={classNames(
        "rounded-full border border-c6 px-4 py-2 outline-none transition-all hover:bg-c6",
        className,
        radius && resultBorderRadius.radiusCss,
        hasDisable && "pointer-events-none select-none bg-gray-200 text-c4"
      )}
      {...rest}
    >
      <WrapperFlex items="center" spacing="4">
        {hasIconPen && (
          <span className={classNames(colorIcon)}>
            <IconPenUnderline />
          </span>
        )}
        {hasIconTrash && (
          <span className={classNames(colorIcon)}>
            <IconTrash />
          </span>
        )}
        <p> {children} </p>
      </WrapperFlex>
    </button>
  );
};
ButtonEdit.propTypes = {
  children: PropTypes.node,
};
export default withErrorBoundary(ButtonEdit, {
  FallbackComponent: ErrorBoundary,
});
