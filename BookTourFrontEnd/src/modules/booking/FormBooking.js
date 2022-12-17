import { useState } from "react";
import ButtonSubmitDefault from "~/components/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "~/components/common";
import { IconCalendar, IconMinus, IconPlus } from "~/components/icon";
import Service from "~/components/text/Service";
const FormBooking = ({ tourDetail, className, onClick }) => {
  const [passenger, setPassenger] = useState(1);
  const handleIncrement = () => {
    setPassenger((passenger) => passenger + 1);
  };
  const handleDecrement = () => {
    if (passenger === 1) return;
    setPassenger((passenger) => passenger - 1);
  };
  return (
    <div>
      <div className={className}>
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
                    <span className="cursor-pointer" onClick={handleDecrement}>
                      <IconMinus />
                    </span>
                    <span className="w-5 select-none text-center text-base">
                      {passenger}
                    </span>
                    <span className="cursor-pointer" onClick={handleIncrement}>
                      <IconPlus />
                    </span>
                  </WrapperFlex>
                </div>
              </div>
              <WrapperFlex items="center" justify="between" className="mt-5">
                <p>Total</p>
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
                  onClick={onClick}
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
  );
};

export default FormBooking;
