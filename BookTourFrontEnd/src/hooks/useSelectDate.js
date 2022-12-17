import { useState } from "react";
import useClickOutSide from "./useClickOutSide";

export default function useSelectDate(
  initialFocusRange = [0, 1],
  initialPlacement
) {
  const { setShow } = useClickOutSide();
  const [focusRange, setFocusRange] = useState(initialFocusRange);
  const [placement, setPlacement] = useState(initialPlacement);
  const handleDate = () => {
    setShow(true);
    setFocusRange(focusRange);
    setPlacement(placement);
  };
  return {
    focusRange,
    placement,
    handleDate,
  };
}
