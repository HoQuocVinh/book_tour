import React from "react";
import classNames from "~/utils/classNames";

const ImgCardList = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        "object-over h-[60px] w-[60px] rounded-lg",
        className
      )}
    />
  );
};

export default ImgCardList;
