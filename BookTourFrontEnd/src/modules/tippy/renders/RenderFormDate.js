import { addDays, format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useWatch } from "react-hook-form";
import { useResize } from "~/hooks/useResize";

import { PlacementArrow } from "~/modules/tippy/TippyDateRange";

const RenderFormDate = ({
  onChange,
  ranges,
  nameDepartDate,
  nameReturnDate,
  control,
  setValue,
  refs,
  ...props
}) => {
  const contextArrow = useContext(PlacementArrow);

  const { windowSize } = useResize();

  const dateValue = useWatch({
    control,
    nameDepartDate,
    nameReturnDate,
    defaultValue: "",
  });

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setValue(nameDepartDate, format(range[0].startDate, "dd/MM/yyyy"));
  }, [nameDepartDate, range, setValue]);

  useEffect(() => {
    setValue(nameReturnDate, format(range[0].endDate, "dd/MM/yyyy"));
  }, [nameReturnDate, range, setValue]);

  return (
    <div
      ref={refs}
      className={`relative transition-all before:absolute before:left-12 before:top-[1px] before:-translate-y-full before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-white before:transition-all before:content-['_'] 
      ${contextArrow?.placement ? "before:translate-x-[200px]" : ""}
      `}
    >
      <DateRangePicker
        minDate={new Date()}
        onChange={(item) => setRange([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        retainEndDateOnFirstSelection={true}
        focusedRange={contextArrow?.focusRange}
        months={windowSize.innerWidth < 640 ? 1 : 2}
        showMonthArrow
        ranges={range}
        direction="horizontal"
        {...props}
      />
    </div>
  );
};

export default RenderFormDate;
