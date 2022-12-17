import PropTypes from "prop-types";
import { Fragment } from "react";
import { withErrorBoundary } from "react-error-boundary";

import { ErrorBoundary } from "@/common";
import Input from "@/input/Input";
import Label from "@/label/Label";

const FieldSearchBox = ({ children, htmlFor, ...props }) => {
  return (
    <Fragment>
      <Label className="leading-none" htmlFor={props.id}>
        {children}
      </Label>
      <Input {...props} />
    </Fragment>
  );
};
FieldSearchBox.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.any,
};
export default withErrorBoundary(FieldSearchBox, {
  FallbackComponent: ErrorBoundary,
});
