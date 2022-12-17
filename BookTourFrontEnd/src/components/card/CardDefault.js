import PropTypes from "prop-types";
import { Fragment } from "react";
import { withErrorBoundary } from "react-error-boundary";

import classNames from "~/utils/classNames";

import { ErrorBoundary } from "@/common";
import Describe from "@/describe/Describe";
import Heading from "@/heading/Heading";
import Overlay from "@/overlay/Overlay";
import { borderRadius } from "~/utils/arrCss";

const CardVertical = ({
  radius,
  src,
  alt,
  className,
  width,
  height,
  overlay,
  blur,
  heading,
  describe,
  hotelNumber,
  children,
  ...props
}) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);
  return (
    <div
      className={classNames(
        "relative select-none",
        radius && resultRadius.radiusCss,
        width ? width : "w-full",
        height ? height : "h-full"
      )}
    >
      {overlay && <Overlay radius="4" blur={blur} />}
      <img
        className={classNames(
          "h-full w-full object-cover",
          className,
          radius && resultRadius.radiusCss
        )}
        src={src}
        alt={alt}
        loading="lazy"
      />
      <Overlay blur="0" radius="4" zIndex="z-20" {...props} />
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full px-4 pb-3 text-white">
        <Heading sx="lg" color="dark">
          {heading}
        </Heading>
        <Describe color="white" mt="mt-1">
          {describe}
          {hotelNumber && (
            <Fragment>
              <span> - </span>
              <span className="inline-block text-white underline">
                {hotelNumber} {"hotels"}
              </span>
            </Fragment>
          )}
          {children}
        </Describe>
      </div>
    </div>
  );
};
CardVertical.propTypes = {
  radius: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  heading: PropTypes.string,
  describe: PropTypes.string,
  blur: PropTypes.string,
  hotelNumber: PropTypes.number,
  overlay: PropTypes.bool,
  props: PropTypes.any,
};
export default withErrorBoundary(CardVertical, {
  FallbackComponent: ErrorBoundary,
});
