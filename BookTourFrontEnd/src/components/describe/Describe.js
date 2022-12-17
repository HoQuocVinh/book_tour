import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import { arrSpacingTop, textSize } from "~/utils/arrCss";
import classNames from "~/utils/classNames";
import { ErrorBoundary } from "../common";

const Describe = ({ children, className, spacingTop, sx, color }) => {
  let resultTextSize = textSize.find((item) => item.text === sx);

  switch (color) {
    case "dark":
      color = "text-c3";
      break;
    case "light":
      color = "text-c4";
      break;
    case "white":
      color = "text-white";
      break;
    default:
      break;
  }
  return (
    <p
      className={classNames(
        "font-Poppins",
        className,
        arrSpacingTop[spacingTop - 1],
        color,
        sx && resultTextSize.textCss
      )}
    >
      {children}
    </p>
  );
};
Describe.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacingTop: PropTypes.string,
  sx: PropTypes.string,
  color: PropTypes.string,
};
export default withErrorBoundary(Describe, {
  FallbackComponent: ErrorBoundary,
});
