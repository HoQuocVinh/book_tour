import React from "react";
import { useController } from "react-hook-form";
import classNames from "~/utils/classNames";
import { WrapperFlex } from "../common";

const InputProfile = ({
  control,
  name,
  placeholder,
  id,
  hasIcon,
  icon,
  tabIndex,
  hasDisable,
  type,
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <WrapperFlex
      className={classNames(
        "rounded-lg border border-[#DEDFE1] px-5 py-3 transition-all focus-within:border-c5",
        hasDisable && "pointer-events-none select-none bg-gray-100"
      )}
      items="center"
      spacing="4"
    >
      {hasIcon && <span className="text-c4">{icon}</span>}
      <input
        type={type ? type : "text"}
        className="w-full bg-transparent text-c3 outline-none placeholder:text-c4"
        {...field}
        placeholder={placeholder}
        name={name}
        id={id}
        tabIndex={tabIndex}
      />
    </WrapperFlex>
  );
};

export default InputProfile;
