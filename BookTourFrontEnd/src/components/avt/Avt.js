import React from "react";
import classNames from "~/utils/classNames";

const Avt = ({ src, sx, className }) => {
  switch (sx) {
    case "default":
      sx = "w-8 h-8";
      break;
    default:
      break;
  }

  return (
    <div
      className={classNames(
        "flex cursor-pointer items-center justify-center rounded-full",
        sx,
        className
      )}
    >
      <img
        src={src}
        alt="avt"
        loading="lazy"
        className={classNames("h-full w-full rounded-full object-cover")}
      />
    </div>
  );
};

export default Avt;
