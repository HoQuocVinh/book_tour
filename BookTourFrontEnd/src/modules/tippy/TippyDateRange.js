import Tippy from "@tippyjs/react/headless";
import { createContext, useState } from "react";

import { WrapperGrid } from "@/common";
import Date from "@/date/Date";

import useClickOutSide from "~/hooks/useClickOutSide";
import { RenderFormDate as TippyRenderFormDate } from "~/modules/tippy/renders";

export const PlacementArrow = createContext();

const TippyDateRange = ({ control, setValue }) => {
  const { show, setShow, nodeRef, calendarRef } = useClickOutSide();
  const [focusRange, setFocusRange] = useState([0, 0]);
  const [placement, setPlacement] = useState(false);

  const value = {
    focusRange,
    placement,
  };
  const handleClickDepartDate = () => {
    setShow(true);
    setFocusRange([0, 0]);
    setPlacement(false);
  };
  const handleClickReturnDate = () => {
    setShow(true);
    setFocusRange([0, 1]);
    setPlacement(true);
  };
  return (
    <PlacementArrow.Provider value={value}>
      <WrapperGrid className="grid">
        <Tippy
          ref={nodeRef}
          visible={show}
          interactive
          placement="bottom-start"
          render={(attrs) => (
            <TippyRenderFormDate
              refs={calendarRef}
              nameDepartDate="depart-date"
              nameReturnDate="return-date"
              control={control}
              setValue={setValue}
              {...attrs}
            />
          )}
        >
          <div className="grid">
            <WrapperGrid cols="2" className="date bg-white" radius="4">
              <Date
                control={control}
                name="depart-date"
                id="depart-date"
                className="depart-date border-r border-r-c5 pl-4"
                onClick={handleClickDepartDate}
              >
                Depart date
              </Date>
              <Date
                control={control}
                name="return-date"
                id="return-date"
                className="return-date pl-4"
                onClick={handleClickReturnDate}
              >
                Return date
              </Date>
            </WrapperGrid>
          </div>
        </Tippy>
      </WrapperGrid>
    </PlacementArrow.Provider>
  );
};

export default TippyDateRange;
