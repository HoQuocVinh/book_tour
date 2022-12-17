import Tippy from "@tippyjs/react/headless";
import { WrapperFlex } from "~/components/common";
import { FieldSearchBox } from "~/components/field";
import { IconPlaneStart } from "~/components/icon";
import ListAirport from "~/components/list/ListAirport";

const RenderAirport = ({
  name,
  id,
  children,
  control,
  setValue,
  placement,
  icon,
  ...rest
}) => {
  return (
    <WrapperFlex>
      <Tippy
        trigger="click"
        interactive
        zIndex={9999}
        placement={placement}
        render={(attrs) => (
          <ListAirport
            setValue={setValue}
            control={control}
            name={name}
            {...attrs}
          />
        )}
      >
        <div className="flex items-center gap-4 border-r border-c5 pl-4">
          <span className="text-c3">{icon}</span>
          <WrapperFlex col>
            <FieldSearchBox control={control} name={name} id={id} {...rest}>
              {children}
            </FieldSearchBox>
          </WrapperFlex>
        </div>
      </Tippy>
    </WrapperFlex>
  );
};

export default RenderAirport;
