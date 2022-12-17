import Tippy from "@tippyjs/react/headless";

import Amount from "@/amount/Amount";
import { WrapperAmount, WrapperFlex, WrapperFull } from "@/common";
import { IconPeopleGroup } from "@/icon";
import Number from "@/number/Number";

const RenderFormRooms = ({ setValue, control, className }) => {
  return (
    <div className={className}>
      <WrapperFull>
        <Tippy
          trigger="click"
          interactive
          placement="bottom-start"
          render={(attrs) => (
            <div
              className="relative w-[243px] select-none rounded-[4px] bg-[#EBEBEB] p-[10px] font-DMSans text-c3 before:absolute before:top-[1px] before:left-2/4 before:-translate-x-2/4 before:-translate-y-full before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#EBEBEB] before:content-['_']"
              {...attrs}
            >
              <WrapperAmount>
                <Amount
                  control={control}
                  setValue={setValue}
                  initializeValue={1}
                  name="room"
                >
                  Room
                </Amount>
              </WrapperAmount>
              <WrapperAmount className="mt-[1px]">
                <Amount
                  control={control}
                  setValue={setValue}
                  initializeValue={1}
                  name="adults"
                >
                  Adults
                </Amount>
              </WrapperAmount>
              <WrapperAmount className="mt-[1px]">
                <Amount
                  control={control}
                  setValue={setValue}
                  initializeValue={0}
                  name="children"
                >
                  Childrens
                </Amount>
              </WrapperAmount>
            </div>
          )}
        >
          <div className="flex h-full w-full flex-1 cursor-pointer select-none items-center gap-4 rounded-[4px] bg-white py-1 font-DMSans lg:py-0">
            <span className="ml-4 text-c4">
              <IconPeopleGroup />
            </span>
            <WrapperFlex flex1 col>
              <div className="inline">
                <Number control={control} name="room">
                  Rooms,{" "}
                </Number>
                <Number control={control} name="adults">
                  Adults,{" "}
                </Number>
              </div>
              <Number control={control} name="children">
                Children
              </Number>
            </WrapperFlex>
          </div>
        </Tippy>
      </WrapperFull>
    </div>
  );
};

export default RenderFormRooms;
