import { format } from "date-fns";
import { Pagination } from "flowbite-react";
import { Fragment, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import DropdownList from "@/dropdown/DropdownList";
import Heading from "@/heading/Heading";
import { IconCalendar, IconLocationRegular } from "@/icon";
import Label from "@/label/Label";

import axios from "~/api/axios";
import CardTourPage from "~/modules/card/CardTourPage";
import { RenderPlaceHot } from "~/modules/tippy/renders";
import { pushParmURL } from "~/utils/pushParamURL";
import { configLocationToParam, configTourRequest } from "~/utils/requestData";
import { getParameterByName } from "~/utils/getQueryVariable";

const HOT_LIST = [
  { title: "Hạ Long" },
  { title: "Sapa" },
  { title: "Hà Nội" },
  { title: "Đà Nẵng" },
  { title: "Phú Quốc" },
  { title: "Nha Trang" },
  { title: "Quy Nhơn" },
  { title: "Yên Bái" },
  { title: "Phú Yên" },
  { title: "Phan Thiết" },
];

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listTour, setListTour] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const location = configLocationToParam();
  const tour = configTourRequest(location);
  let dateParts = getParameterByName("startDay").split("/");

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      startDay: new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]),
    },
  });
  useEffect(() => {
    ("/tours/search?pageSize=6", tour).then((response) => {
      setListTour(response.data);
    });
    axios.post("/tours/search?pageSize=6", tour).then((response) => {
      setTotalPages(response.data.totalPages);
    });
    setValue("beginningLocation", location.beginningLocation);
    setValue("destinationLocation", location.destinationLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.destinationLocation]);

  const onPageChange = (page) => {
    axios
      .post(`/tours/search?pageSize=6&pageNo=${page - 1}`, tour)
      .then((response) => {
        setListTour(response.data);
      });
    setCurrentPage(page);
  };

  const handleShowDetailTour = (id) => {
    console.log(id);
    navigate(
      `/detail-page?beginningLocation=${pushParmURL(
        location.beginningLocation
      )}&id=${id}`
    );
  };

  const handleBooking = (id) => {
    navigate(`/booking?id=${id}`);
  };

  const handleClickTourHot = (e) => {
    navigate(
      `?beginningLocation=${pushParmURL(
        location.beginningLocation
      )}&destinationLocation=${pushParmURL(e.target.textContent)}&startDay=${
        location.startDay
      }`
    );
    window.scrollTo(0, 0);
  };

  const onSubmit = async (value) => {
    const tour = {
      tourDetail: {
        beginningLocation: {
          locationName: value.beginningLocation,
          locationType: "BEGINNING",
        },
        destinationLocation: {
          locationName: value.destinationLocation,
          locationType: "DESTINATION",
        },
        startDay: format(value.startDay, "dd/MM/yyyy"),
      },
      type: "TOUR_BASIC",
    };
    axios.post("/tours/search?pageSize=6", tour).then((response) => {
      console.log(response);
      setListTour(response.data);
      navigate(
        `?beginningLocation=${pushParmURL(
          value.beginningLocation
        )}&destinationLocation=${pushParmURL(
          value.destinationLocation
        )}&startDay=${format(value.startDay, "dd/MM/yyyy")}`
      );
    });
  };

  return (
    <div className="px-5 lg:mx-auto lg:max-w-7xl">
      <form
        className="rounded-br-md rounded-bl-md bg-[#0000001a] p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <WrapperGrid cols="12" spacing="4">
          <WrapperGrid col="3">
            <DropdownList
              setValue={setValue}
              dropdownLabel={location.beginningLocation}
              bg="bg-white"
              icon={<IconLocationRegular />}
              control={control}
              radius="4"
              id="beginning-location"
              name="beginningLocation"
              list={[
                { type: "Hà Nội" },
                { type: "TP. Hồ Chí Minh" },
                { type: "Cao Lãnh" },
              ]}
            />
          </WrapperGrid>
          <WrapperGrid col="3">
            <WrapperFlex
              items="center"
              spacing="3"
              radius="4"
              className="bg-white"
            >
              <span className="pl-4 text-c4">
                <IconCalendar />
              </span>
              <span className="z-50 text-black">
                <Controller
                  control={control}
                  name="startDay"
                  render={({ field }) => (
                    <Fragment>
                      <Label htmlFor="start-date">Depart Date</Label>
                      <ReactDatePicker
                        id="start-date"
                        dateFormat="dd/MM/yyyy"
                        onChange={field.onChange}
                        selected={field.value}
                      />
                    </Fragment>
                  )}
                />
              </span>
            </WrapperFlex>
          </WrapperGrid>
          <WrapperGrid col="4">
            <RenderPlaceHot control={control} setValue={setValue} />
          </WrapperGrid>
          <WrapperGrid col="2">
            <ButtonSubmitDefault
              background="blue"
              radius="4"
              className="text-lg font-semibold text-white"
            >
              Search
            </ButtonSubmitDefault>
          </WrapperGrid>
        </WrapperGrid>
      </form>
      {/* <div className="breadcurmb my-4 py-2">breadcrumb</div> */}
      <WrapperFlex justify="start" spacing="10">
        <div>
          <div className="sticky top-0 z-10 mt-10 w-[260px] flex-shrink-0 border border-[#ddd]">
            <div className="w-full border-b border-b-[#ddd] bg-[#f5f5f5] px-4 py-3 text-center font-semibold">
              HOT places in the country
            </div>
            <ul className="py-4">
              {HOT_LIST.map((item) => (
                <li
                  key={item.title}
                  className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]"
                  onClick={handleClickTourHot}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Heading sx="xl-4" className="mt-10 text-center">
            List of tours from {location.beginningLocation} to{" "}
            {location.destinationLocation}
          </Heading>
          <div className="mt-6">
            <div className="my-3 text-c3">
              We found <b>{listTour?.totalElements}</b> tours
            </div>
            <WrapperGrid cols="3" spacing="5">
              {listTour?.data?.map((item, index) => (
                <CardTourPage
                  onClick={() => handleShowDetailTour(item.id)}
                  booking={() => handleBooking(item.id)}
                  tourDetail={item.tourDetail}
                  key={index}
                />
              ))}
            </WrapperGrid>
            <div className="my-5 text-center">
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              )}
            </div>
          </div>
        </div>
      </WrapperFlex>
    </div>
  );
};

export default SearchPage;
