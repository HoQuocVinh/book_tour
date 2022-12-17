import { Fragment, memo } from "react";
import ButtonSubmitDefault from "~/components/button/ButtonSubmitDefault";
import { WrapperFlex } from "~/components/common";
import { IconCart } from "~/components/icon";
import useLoading from "~/hooks/useLoading";

const CardTourPage = ({ tourDetail, onClick, booking }) => {
  const loading = useLoading();
  console.log(loading);
  return (
    <Fragment>
      {loading ? (
        <LoadingSkeletonCard tourDetail={tourDetail} />
      ) : (
        <div className="flex flex-col">
          <div className="w-[250px]- h-[250px] rounded-lg">
            {tourDetail?.images[0] ? (
              <img
                loading="lazy"
                src={tourDetail?.images[0]}
                alt="img-tour"
                className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover"
              />
            ) : (
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1657662075319-3ced8dee4c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img-tour"
                className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover"
              />
            )}
          </div>
          <div className="flex-1 bg-white shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
            <div className="flex h-full flex-col p-4">
              <div>
                <span className="text-sm text-c4">{tourDetail.startDay}</span>
                <p
                  onClick={onClick}
                  className="mt-1 cursor-pointer text-justify font-semibold text-[#2d4d71] hover:text-[#4d4aef]"
                >
                  {tourDetail.tourName}
                </p>
              </div>
              <div className="mt-auto flex flex-col">
                <p className="my-4">
                  Nơi khởi hành:{" "}
                  <b>{tourDetail.beginningLocation.locationName}</b>
                </p>
                <span className="text-primary-red">
                  <b>
                    {tourDetail.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </b>
                </span>
                <WrapperFlex
                  items="center"
                  justify="between"
                  className="mt-2 font-DMSans"
                >
                  <ButtonSubmitDefault
                    onClick={booking}
                    className="gap-1 rounded-[4px] bg-[#fd5056] px-4 py-1 text-sm text-white transition-all hover:bg-[#d74449]"
                    icon={<IconCart />}
                  >
                    Book
                  </ButtonSubmitDefault>
                  <button
                    type="button"
                    className="rounded-[4px] border border-primary-blue py-1 px-4 text-sm  text-primary-blue transition-all hover:bg-primary-blue hover:text-white"
                  >
                    View detail
                  </button>
                </WrapperFlex>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const LoadingSkeletonCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[250px]- skeleton h-[250px] rounded-tl-lg rounded-tr-lg"></div>
      <div className="flex-1 bg-white shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
        <div className="flex h-full flex-col p-4">
          <div>
            <div className="skeleton h-5 w-[70px]"></div>
            <div className="skeleton mt-2 h-[120px] w-full"></div>
          </div>
          <div className="mt-auto flex flex-col">
            <div className="skeleton my-4 h-5 w-[270px]"></div>
            <div className="skeleton my-4 h-5 w-[90px]"></div>
            <WrapperFlex
              items="center"
              justify="between"
              className="mt-2 font-DMSans"
            >
              <div className="skeleton h-7 w-28"></div>
              <div className="skeleton h-7 w-28"></div>
            </WrapperFlex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardTourPage);
