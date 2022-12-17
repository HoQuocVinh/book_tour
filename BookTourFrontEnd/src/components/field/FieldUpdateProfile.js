import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
import { ErrorBoundary, WrapperFlex } from "../common";
import InputProfile from "../input/InputProfile";
import Label from "../label/Label";

const FieldUpdateProfile = ({ children, icon, hasDisable, ...rest }) => {
  return (
    <WrapperFlex col spacing="3">
      <Label
        htmlFor={rest.id}
        className={classNames(
          "font-DMSans !font-bold leading-none !text-c4",
          hasDisable && "pointer-events-none select-none bg-gray-100"
        )}
      >
        {children}
      </Label>
      <InputProfile hasIcon icon={icon} hasDisable={hasDisable} {...rest} />
    </WrapperFlex>
  );
};
FieldUpdateProfile.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  hasDisable: PropTypes.bool,
};
export default withErrorBoundary(FieldUpdateProfile, {
  FallbackComponent: ErrorBoundary,
});
