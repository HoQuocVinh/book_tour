import React from "react";
import { useWatch } from "react-hook-form";
import $ from "jquery";

const TagAirport = ({
  name,
  control,
  setValue,
  city,
  airport,
  id,
  ...rest
}) => {
  const locationValue = useWatch({
    control,
    name,
    defaultValue: "",
  });

  const handleClickTag = () => {
    setValue(name, $(`#${id}`).text());
  };

  return (
    <div
      className="cursor-pointer py-2 px-4 font-Epilogue hover:bg-blue-50"
      onClick={handleClickTag}
      {...rest}
    >
      <div className="pl-8">
        <p id={id} className="font-medium text-c2">
          {city}
        </p>
        <p className="text-sm text-c4">{airport}</p>
      </div>
    </div>
  );
};

export default TagAirport;
