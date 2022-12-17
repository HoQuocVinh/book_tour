import React from "react";
import { borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

const Img = ({ width, radius, height, src, alt, className }) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);

  return (
    <div
      className={classNames(
        width ? width : "w-full",
        height ? height : "h-full",
        radius && resultRadius.radiusCss,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={classNames(
          "h-full w-full object-cover",
          radius && resultRadius.radiusCss
        )}
      />
    </div>
  );
};

export default Img;
