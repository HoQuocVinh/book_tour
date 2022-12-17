import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import { backgroundButton, borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

import { ErrorBoundary } from "../common";
const ButtonSubmitDefault = ({
  radius,
  background,
  children,
  className,
  disable,
  onClick,
  icon,
}) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);
  let resultBackgroundButton = backgroundButton.find(
    (item) => item.backgroundColor === background
  );
  return (
    <button
      onClick={onClick}
      type="submit"
      className={classNames(
        "outline-none",
        radius && resultRadius.radiusCss,
        className,
        background && resultBackgroundButton.backgroundCss,
        disable && "pointer-events-none select-none bg-opacity-50",
        icon && "flex items-center"
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
ButtonSubmitDefault.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  radius: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonSubmitDefault, {
  FallbackComponent: ErrorBoundary,
});
