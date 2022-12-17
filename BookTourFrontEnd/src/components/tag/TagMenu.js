import React from "react";

const TagMenu = ({ children, icon, ...props }) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-5 px-5 py-4 text-[#23262F] transition-all hover:bg-[#16182308] dark:text-c7"
      {...props}
    >
      <span className="text-[#777E90] dark:text-c5">{icon}</span>
      {children}
    </div>
  );
};

export default TagMenu;
