import React from "react";
import { useController } from "react-hook-form";

import classNames from "~/utils/classNames";
import { IconCheck } from "@/icon";

const Checkbox = ({
  control,
  checked = false,
  onClick,
  name,
  children,
  id,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: false,
  });
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded border p-1 text-white",
          checked
            ? "border-primary-blue bg-primary-blue"
            : "border-c4 dark:border-c3"
        )}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          id={id}
          {...field}
          {...rest}
        />
        <IconCheck checked={checked} />
      </div>
      {children && (
        <label htmlFor={id} className="cursor-pointer">
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
