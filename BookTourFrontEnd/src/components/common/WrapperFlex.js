import {
  alignItem,
  arrSpacing,
  borderRadius,
  justifyContent,
} from "~/utils/arrCss";
import classNames from "~/utils/classNames";

const WrapperFlex = ({
  onClick,
  center,
  children,
  spacing,
  col,
  items,
  justify,
  flex1,
  className,
  radius,
}) => {
  let resultJustify = justifyContent.find((item) => item.justify === justify);
  let resultAlignItem = alignItem.find((item) => item.align === items);
  let resultBorderRadius = borderRadius.find((item) => item.radius === radius);
  return (
    <div
      className={classNames(
        "flex",
        flex1 && "flex-1",
        col && "flex-col",
        arrSpacing[spacing - 1],
        justify && resultJustify.justifyCss,
        items && resultAlignItem.alignCss,
        radius && resultBorderRadius.radiusCss,
        center && "items-center justify-center",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
