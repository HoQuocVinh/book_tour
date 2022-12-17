import { useForm } from "react-hook-form";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperGrid } from "@/common";
import { IconPlaneEnd, IconPlaneStart } from "@/icon";
import TippyDateRange from "~/modules/tippy/TippyDateRange";
import { RenderFormRooms as TippyRenderFormRooms } from "~/modules/tippy/renders";
import RenderAirport from "../tippy/renders/RenderAirport";
import { createBrowserHistory } from "history";
const SearchBoxFlight = () => {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
  });

  const handleSearch = (values) => {
    console.log(values);
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="mt-5"
    >
      <WrapperGrid cols="12" spacing="4">
        <WrapperGrid
          col="7"
          rows="2"
          spacing="4"
          className="choose-left-search-box"
        >
          <WrapperGrid cols="2" radius="4" className="arrive bg-white">
            <RenderAirport
              setValue={setValue}
              control={control}
              id="departure"
              name="departure"
              placement="bottom-start"
              placeholder="Departure"
              icon={<IconPlaneStart />}
            >
              Departure
            </RenderAirport>
            <RenderAirport
              setValue={setValue}
              control={control}
              id="destination"
              name="destination"
              placement="bottom-end"
              placeholder="Destination"
              icon={<IconPlaneEnd />}
            >
              Destination
            </RenderAirport>
          </WrapperGrid>
          <TippyDateRange control={control} setValue={setValue} />
        </WrapperGrid>
        <WrapperGrid
          col="5"
          rows="2"
          spacing="4"
          className="choose-right-search-box"
        >
          <TippyRenderFormRooms control={control} setValue={setValue} />
          <ButtonSubmitDefault
            radius="4"
            background="blue"
            className="py-4 font-Roboto text-lg font-bold"
          >
            Search
          </ButtonSubmitDefault>
        </WrapperGrid>
      </WrapperGrid>
    </form>
  );
};

export default SearchBoxFlight;
