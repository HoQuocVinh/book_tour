import React from "react";
import { borderRadius, opacity } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

const Overlay = ({ blur, cursor, zIndex, radius, ...props }) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);
  let resultOpacity = opacity.find((item) => item.blur === blur);
  return (
    <div
      className={classNames(
        "absolute inset-0 bg-black",
        blur && resultOpacity.blurCss,
        radius && resultRadius.radiusCss,
        cursor && "cursor-pointer",
        zIndex && zIndex
      )}
      {...props}
    />
  );
};

export default Overlay;
