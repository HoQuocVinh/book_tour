import { Fragment, useState } from "react";
import { useController } from "react-hook-form";

import GroupAmount from "@/common/GroupAmount";
import { IconMinus, IconPlus } from "@/icon";
import Wrapper from "@/wrapper/Wrapper";
import { useEffect } from "react";

const Amount = ({ children, control, name, initializeValue, setValue }) => {
  const [number, setNumber] = useState(initializeValue);
  const { field } = useController({
    name,
    control,
    defaultValue: initializeValue,
  });
  const handleIncrement = () => {
    setNumber(number + 1);
    setValue(name, number + 1);
  };
  const handleDecrement = () => {
    if (number === 1) return;
    setNumber(number - 1);
    setValue(name, number - 1);
  };

  useEffect(() => {
    setValue(name, number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <GroupAmount>
        <span className="font-OpenSans text-lg font-medium" {...field}>
          {number}
        </span>
        <p className="text-c4">{children}</p>
      </GroupAmount>
      <GroupAmount spacing={"gap-1"}>
        <Wrapper onClick={handleDecrement}>
          <IconMinus />
        </Wrapper>
        <Wrapper onClick={handleIncrement}>
          <IconPlus />
        </Wrapper>
      </GroupAmount>
    </Fragment>
  );
};

export default Amount;
