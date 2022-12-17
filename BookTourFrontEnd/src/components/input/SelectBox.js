import React from "react";
import { useController } from "react-hook-form";
import classNames from "~/utils/classNames";

const SelectBox = (
  control,
  children,
  type,
  id,
  name,
  placeholder,
  className,
  ...rest
) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      control={control}
      type="selectbox"
      id={id}
      placeholder={placeholder}
      className={classNames("font-medim text-c3 text-sm", className)}
      {...rest}
      {...field}
    />
  );
};

export default SelectBox;
