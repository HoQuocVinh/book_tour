import { withErrorBoundary } from "react-error-boundary";

import { RenderPlaceHot as TippyRenderPlaceHot } from "~/modules/tippy/renders";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { ErrorBoundary, WrapperFlex, WrapperGrid } from "@/common";
import { useForm } from "react-hook-form";
import { RenderFormRooms as TippyRenderFormRooms } from "~/modules/tippy/renders";
import TippyDateRange from "~/modules/tippy/TippyDateRange";

const SearchBoxHotel = () => {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
  });

  const handleSearch = (value) => console.log(value);
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="mt-5"
    >
      <WrapperGrid rows="1" spacing="4" className="lg:grid-rows-2">
        <TippyRenderPlaceHot control={control} setValue={setValue} />
        <WrapperGrid cols="1" spacing="4" className="lg:grid-cols-2">
          <TippyDateRange control={control} setValue={setValue} />
          <WrapperFlex spacing="4">
            <TippyRenderFormRooms
              control={control}
              setValue={setValue}
              className="h-full flex-1"
            />
            <ButtonSubmitDefault
              radius="4"
              background="blue"
              className="p-4 font-Roboto text-lg font-bold"
            >
              Search
            </ButtonSubmitDefault>
          </WrapperFlex>
        </WrapperGrid>
      </WrapperGrid>
    </form>
  );
};
SearchBoxHotel.propTypes = {};
export default withErrorBoundary(SearchBoxHotel, {
  FallbackComponent: ErrorBoundary,
});
