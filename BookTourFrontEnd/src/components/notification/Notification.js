import React from "react";
import { IconNotification } from "@/icon";

const Notification = ({ onClick }) => {
  return (
    <div className="px-4 cursor-pointer" onClick={onClick}>
      <div className="relative text-c4 dark:text-c6">
        <IconNotification />
        <div className="wrapper absolute top-0 right-0 flex h-[10px] w-[10px] translate-x-1/4 select-none items-center justify-center rounded-full bg-primary-red text-white">
          <span className="number text-[8px]">1</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
