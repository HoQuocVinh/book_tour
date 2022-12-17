import { format, parseISO } from "date-fns";
import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { WrapperFlex, WrapperGrid } from "~/components/common";

const ContentMangeTour = ({ tourBooking }) => {
  return (
    <div className="mt-10">
      <div>
        <div className="flex items-center rounded-md bg-white p-6 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
          <div className="inline-block h-[150px] w-[200px] rounded-md">
            {tourBooking?.tour.tourDetail?.images[0] ? (
              <img
                className="h-full w-full rounded-md object-cover"
                alt=""
                src={tourBooking.tour.tourDetail.images[0]}
              />
            ) : (
              <img
                className="h-full w-full rounded-md object-cover"
                alt=""
                src="https://images.unsplash.com/photo-1670450734728-c4d6f59134f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            )}
          </div>
          <div className="ml-5 max-w-[50%]">
            <div className="text-xl font-semibold text-c3">
              {tourBooking?.tour.tourDetail.tourName}
            </div>
            <div className="mt-3 text-base text-c4">
              {tourBooking?.tour.tourDetail.tourDes}
            </div>
          </div>
          {tourBooking?.createdAt && (
            <div className="flex-1 text-right text-c4">
              Booking on{" "}
              <span className="font-bold text-c2">
                {format(parseISO(tourBooking?.createdAt), "dd/MM/yyyy HH:mm")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 font-Roboto">
        <div className="rounded-md bg-white p-6 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
          <WrapperGrid cols="8">
            <div className="col-span-1 text-right">
              <WrapperFlex col>
                <span className="py-1 font-semibold text-c2">Booking ID</span>
                <span className="py-1 font-semibold text-c4">Start day</span>
                <span className="py-1 font-semibold text-c4">End day</span>
                <span className="py-1 font-semibold text-c2">Passenger</span>
              </WrapperFlex>
            </div>
            <div className="col-span-7 ml-10">
              <WrapperFlex justify={"between"}>
                <WrapperFlex flex1 col>
                  <span className="py-1 font-semibold text-c2">
                    {tourBooking?.id}
                  </span>
                  <span className="py-1 text-c4">
                    {tourBooking?.tour.tourDetail.startDay}
                  </span>
                  <span className="py-1 text-c4">
                    {tourBooking?.tour.tourDetail.endDay}
                  </span>
                  <span className="py-1 text-c2">{tourBooking?.passenger}</span>
                </WrapperFlex>
                <WrapperFlex col className={"text-right"} spacing="3">
                  {tourBooking?.totalPrice && (
                    <span className="text-2xl font-bold text-primary-red">
                      {tourBooking.totalPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  )}
                  <button
                    onClick={() => toast.warning("Feature under development")}
                    className="font-meidum rounded-md bg-[#F4F5F6] py-2 px-10 text-lg font-bold  text-[#353945]"
                  >
                    Cancel tour
                  </button>
                  <button
                    onClick={() => toast.warning("Feature under development")}
                    className="font-meidum rounded-md bg-[#3B71FE] px-10 py-2 text-lg font-bold   text-white"
                  >
                    Book Again
                  </button>
                </WrapperFlex>
              </WrapperFlex>
            </div>
          </WrapperGrid>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default ContentMangeTour;
