import { memo } from "react";
import { useState } from "react";
import classNames from "~/utils/classNames";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);
  return (
    <div className="flex items-center gap-10">
      <div className="relative h-4 w-full rounded-full bg-[rgba(59,_113,_254,_0.1)]">
        <span
          className={classNames(
            "progress-done font-Roboto text-base font-medium",
            done === 100 ? "bg-green-400" : "bg-blue-500"
          )}
          style={style}
        ></span>
      </div>
      <span
        className={classNames(
          "transition-all",
          done === 0 ? "text-red-500" : "text-black"
        )}
      >
        {done}%
      </span>
    </div>
  );
};

export default memo(ProgressBar);
