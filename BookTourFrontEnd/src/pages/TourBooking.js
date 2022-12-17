import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import WrapperTour from "@/common/WrapperTour";
import Heading from "@/heading/Heading";
import { IconCalendar, IconMinus, IconPlus } from "@/icon";
import InputDefault from "@/input/InputDefault";
import Label from "@/label/Label";
import DetailTourInner from "@/text/DetailTourInner";
import Service from "@/text/Service";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetTourById } from "~/hooks/useGetTour";
import getQueryVariable from "~/utils/getQueryVariable";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";

const schame = Yup.object({
  fullName: Yup.string().required("Please enter your full name."),
  email: Yup.string()
    .required("Please enter your email.")
    .matches(
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      { message: "Please enter valid email address" }
    ),
  phoneNumber: Yup.string()
    .required("Please enter your phone number.")
    .matches(
      // eslint-disable-next-line no-control-regex
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
      { message: "Please enter valid phone number" }
    ),
  address: Yup.string().required("Please enter your address"),
});

const TourBooking = () => {
  const id = getQueryVariable("id");
  const { user } = useSelector((state) => state.auth);
  const { tourDetail, loading } = useGetTourById(id);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schame),
    mode: "onSubmit",
  });
  const [passenger, setPassenger] = useState(1);

  const handleIncrement = () => {
    setPassenger((passenger) => passenger + 1);
  };
  const handleDecrement = () => {
    if (passenger === 1) return;
    setPassenger((passenger) => passenger - 1);
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        autoClose: 1000,
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);

  useEffect(() => {
    tourDetail?.price && setValue("totalPrice", tourDetail.price * passenger);
  }, [passenger, setValue, tourDetail.price]);

  const onSubmit = (values) => {
    if (!user || !user.email) {
      toast.warning("Please login before booking!", { autoClose: 1000 });
      navigate("/sign-in");
    } else {
      const request = {
        tour: {
          id,
        },
        user: {
          email: user.email,
        },
        ...values,
        passenger,
      };
      console.log("TCL: onSubmit -> request", request);
      axiosPrivate.post(`/booking/create`, request).then((response) => {
        console.log(response);
      });
      toast.success("Please check your email to active booking!", {
        autoClose: 2000,
      });
      navigate("../");
    }
  };
  return (
    <WrapperTour>
      <div className="mb-5 grid grid-cols-3 rounded-md">
        <div className="col-span-1 rounded-tl-md rounded-bl-md">
          {tourDetail?.images && !loading ? (
            <img
              className="h-full rounded-tl-md rounded-bl-md object-cover"
              alt="img-tour"
              src={tourDetail.images[0]}
            />
          ) : (
            <div className="skeleton h-[270px] w-full rounded-tl-md rounded-bl-md"></div>
          )}
        </div>
        {loading ? (
          <div className="col-span-2 bg-[#f8f8f8] p-8">
            <div className="skeleton mb-5 h-[96px] w-full"></div>
            <div className="flex flex-col gap-1 font-Roboto">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <div key={index} className="skeleton h-5 w-full"></div>
                ))}
            </div>
          </div>
        ) : (
          <div className="col-span-2 bg-[#f8f8f8] p-8">
            <Heading className="mb-5 text-dark-blue" sx="xl-2">
              {tourDetail.tourName}
            </Heading>
            <div className="flex flex-col gap-1 font-Roboto">
              <DetailTourInner text="Start day">
                {tourDetail.startDay}
              </DetailTourInner>
              <DetailTourInner text="End day">
                {tourDetail.endDay}
              </DetailTourInner>
              <DetailTourInner text="Beginning location">
                {tourDetail?.beginningLocation?.locationName}
              </DetailTourInner>
              <DetailTourInner text="Destination location">
                {tourDetail?.destinationLocation?.locationName}
              </DetailTourInner>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
        <div className="flex-1">
          <Heading className="mb-8 text-dark-blue" sx="xl-2">
            Tour Info
          </Heading>
          <Heading className="mb-2 text-dark-blue" sx="lg">
            Communications
          </Heading>
          <div className="mr-10 bg-[#f6f6f6] p-6">
            <WrapperGrid cols="2" rows="2" className="gap-x-8 gap-y-5">
              <WrapperFlex col spacing="2">
                <Label htmlFor="fullName">
                  Full Name <strong className="text-red-500">*</strong>
                </Label>
                <InputDefault
                  control={control}
                  className="rounded-sm py-2 px-4"
                  name="fullName"
                  id="fullName"
                  bg="bg-white"
                />
              </WrapperFlex>
              <WrapperFlex col spacing="2">
                <Label htmlFor="Email">
                  Email <strong className="text-red-500">*</strong>
                </Label>
                <InputDefault
                  control={control}
                  className="rounded-sm py-2 px-4"
                  name="email"
                  id="email"
                  bg="bg-white"
                />
              </WrapperFlex>
              <WrapperFlex col spacing="2">
                <Label htmlFor="phoneNumber">
                  Phone Number <strong className="text-red-500">*</strong>
                </Label>
                <InputDefault
                  control={control}
                  className="rounded-sm py-2 px-4"
                  name="phoneNumber"
                  id="fullName"
                  bg="bg-white"
                />
              </WrapperFlex>
              <WrapperFlex col spacing="2">
                <Label htmlFor="fullName">
                  Address <strong className="text-red-500">*</strong>
                </Label>
                <InputDefault
                  control={control}
                  className="rounded-sm py-2 px-4"
                  name="address"
                  id="fullName"
                  bg="bg-white"
                />
              </WrapperFlex>
            </WrapperGrid>
          </div>
        </div>
        <div className="inline-block">
          <div>
            <div className="flex flex-col gap-5">
              <div className="w-[350px] bg-white px-4 py-5 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
                <h2 className="text-xl font-bold text-dark-blue">
                  Lịch khởi hành & giá
                </h2>
                <WrapperGrid rows="2" cols="1">
                  <div className="mt-3 flex items-center justify-between rounded-md border border-c6 p-4 text-sm">
                    <p>Departure date:</p>
                    <div className="flex items-center justify-center gap-2">
                      <IconCalendar />
                      <span>{tourDetail.startDay}</span>
                    </div>
                  </div>
                  <div className="relative mt-2 rounded-md border border-c6 p-4 text-sm">
                    <span className="absolute top-2/4 left-4 -translate-y-2/4">
                      Passenger
                    </span>
                    <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-[60%] text-base text-[#ffbd00]">
                      x{" "}
                      {tourDetail?.price?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                    <div className="absolute  right-4 top-2/4 inline-block -translate-y-2/4 items-center gap-4">
                      <WrapperFlex items="center" justify="center" spacing="4">
                        <span
                          className="cursor-pointer"
                          onClick={handleDecrement}
                        >
                          <IconMinus />
                        </span>
                        <span className="w-5 select-none text-center text-base">
                          {passenger}
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={handleIncrement}
                        >
                          <IconPlus />
                        </span>
                      </WrapperFlex>
                    </div>
                  </div>
                  <WrapperFlex
                    items="center"
                    justify="between"
                    className="mt-5"
                  >
                    <p>Total</p>
                    <input
                      className="hidden text-xl font-bold text-[#ffbd00]"
                      {...register("totalPrice")}
                    />
                    <span className="text-xl font-bold text-[#ffbd00]">
                      {(tourDetail.price * passenger).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </WrapperFlex>
                  <WrapperFlex
                    className="mt-4 text-sm text-[#26bed6]"
                    items="center"
                    spacing="2"
                  >
                    <img src="/info.svg" alt="" />
                    <p>Contact us to make a reservation</p>
                  </WrapperFlex>
                  <WrapperGrid spacing="4" cols="2" className="mt-5">
                    <ButtonSubmitDefault
                      radius="4"
                      className="border-2 border-[#f79321] bg-transparent px-4 py-2 font-semibold text-[#f79321] transition-all hover:border-transparent hover:bg-[#f9ab52] hover:text-white"
                    >
                      Contact
                    </ButtonSubmitDefault>
                    <ButtonSubmitDefault
                      className="bg-[#f79321] px-4 py-2 font-semibold text-white transition-all hover:bg-[#f9ab52]"
                      radius="4"
                    >
                      Booking
                    </ButtonSubmitDefault>
                  </WrapperGrid>
                </WrapperGrid>
              </div>
              <div className="w-full max-w-[350px] bg-white px-4 py-5 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
                <WrapperGrid cols="2" rows="4" className="gap-y-3">
                  <Service>Insurance</Service>
                  <Service>Meal</Service>
                  <Service>Tour guide</Service>
                  <Service>Hotel 3-4*</Service>
                  <Service>Plane ticket</Service>
                  <Service>Entrance ticket</Service>
                  <Service>Shuttle bus</Service>
                </WrapperGrid>
              </div>
            </div>
          </div>
        </div>
      </form>
    </WrapperTour>
  );
};

export default TourBooking;
