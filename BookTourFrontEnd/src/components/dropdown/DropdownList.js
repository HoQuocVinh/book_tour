import { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSideDropdown from "~/hooks/useClickOutSideDropdown";
import { borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

// const GENDER = [{ type: "MALE" }, { type: "FEMALE" }, { type: "ANOTHER" }];

const DropdownList = ({
  bg,
  control,
  setValue,
  name,
  disable,
  dropdownLabel = "Select your gender",
  list = [],
  icon,
  radius,
}) => {
  let resultBorderRadius = borderRadius.find((item) => item.radius === radius);
  const { show, setShow, nodeRef } = useClickOutSideDropdown();
  const dropdownValue = useWatch({
    control,
    name,
    defaultValue: "", // default value before the render
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);

  return (
    <div
      className={classNames(
        "relative",
        disable && "pointer-events-none select-none bg-gray-100"
      )}
      ref={nodeRef}
    >
      <div
        className={classNames(
          "border-gray100 flex h-full cursor-pointer items-center  gap-4 border p-3 text-c4",
          bg ? bg : "bg-transparent",
          radius ? resultBorderRadius.radiusCss : "rounded-lg"
        )}
        onClick={() => setShow(!show)}
      >
        {icon && <span>{icon}</span>}
        <span className="text-c3">{label}</span>
      </div>
      <div
        className={classNames(
          "absolute top-full left-0 z-20 w-full rounded-lg bg-white shadow-md",
          show ? "" : "invisible opacity-0"
        )}
        // className={`absolute top-full left-0 w-full rounded-lg bg-white ${
        //   show ? "" : "invisible opacity-0"
        // }`}
      >
        {list.map((item, index) => (
          <div
            className="cursor-pointer p-5 text-c3 hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.type}
            key={index}
          >
            {item.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownList;
