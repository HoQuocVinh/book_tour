import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonSubmitDefault from "~/components/button/ButtonSubmitDefault";
import { WrapperGrid } from "~/components/common";
import WrapperTour from "~/components/common/WrapperTour";
import Heading from "~/components/heading/Heading";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import { useGetTourById } from "~/hooks/useGetTour";
import ContentBookingTour from "~/modules/booking/ContentBookingTour";

const TourDetailPage = ({ price }) => {
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const { tourDetail } = useGetTourById(searchParam.get("id"));
  console.log("TCL: TourDetailPage -> tourDetail", tourDetail);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // const handleBooking = (id) => {
  //   const request = {
  //     email: user.email,
  //     tourId: id,
  //   };
  //   axiosPrivate.post(`/booking/create`, request);
  //   toast.success("Please check your email to active booking!", {
  //     autoClose: 2000,
  //   });
  //   navigate("../");
  // };

  return (
    <WrapperTour>
      <div>
        <nav></nav>
        <div className="breadcrum"></div>
        <WrapperGrid cols="2">
          <div>
            <Heading className="text-[#003c71]" sx="xl-2">
              {tourDetail.tourName}
            </Heading>
          </div>
          <div className="flex justify-end">
            <div>
              <span className="text-2xl font-bold text-red-500">
                {tourDetail?.price?.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span className="text-c3">/ khách</span>
            </div>
            <div className="flex flex-col gap-2 px-4">
              <ButtonSubmitDefault
                onClick={() => navigate(`/booking?id=${searchParam.get("id")}`)}
                className="bg-[#f79321] px-14 py-3 font-semibold text-white transition-all hover:bg-[#f9ab52]"
                radius="4"
              >
                Booking
              </ButtonSubmitDefault>
              <ButtonSubmitDefault
                radius="4"
                className="border-2 border-[#f79321] bg-transparent px-4 py-2 font-semibold text-[#f79321] transition-all hover:border-transparent hover:bg-[#f9ab52] hover:text-white"
              >
                Contact
              </ButtonSubmitDefault>
            </div>
          </div>
        </WrapperGrid>
        {loading ? (
          <LoadingSkeletonImg />
        ) : (
          <LoadingImg tourDetail={tourDetail} />
        )}
        <div className="mt-7">
          <Heading className="text-center text-[#003c71]" sx="xl-2">
            Schedule
          </Heading>
          {tourDetail.tourDetailDes && (
            <ContentBookingTour tourDetailDes={tourDetail.tourDetailDes} />
          )}
        </div>
      </div>
    </WrapperTour>
  );
};

const LoadingImg = ({ tourDetail }) => {
  return (
    <div className="mt-7">
      <WrapperGrid cols="12" spacing="3">
        <div className="col-span-7">
          {tourDetail?.images && (
            <img
              src={tourDetail.images[0]}
              alt=""
              className="h-full w-full rounded-md object-cover transition-all"
            />
          )}
        </div>
        <div className="col-span-5">
          <WrapperGrid rows="5" spacing="3">
            <WrapperGrid cols="2" className="row-span-2" spacing="3">
              {tourDetail?.images && (
                <>
                  <img
                    src={tourDetail.images[1]}
                    alt=""
                    className="h-full w-full rounded-md object-cover transition-all"
                  />
                  <img
                    src={tourDetail.images[2]}
                    alt=""
                    className="h-full w-full rounded-md object-cover transition-all"
                  />
                </>
              )}
            </WrapperGrid>
            <div className="col-span-1 row-span-3">
              {tourDetail?.images && (
                <img
                  src={tourDetail.images[3]}
                  alt=""
                  className="h-full w-full rounded-md object-cover transition-all"
                />
              )}
            </div>
          </WrapperGrid>
        </div>
      </WrapperGrid>
      <p className="mt-4 text-justify text-c3">{tourDetail.tourDes}</p>
    </div>
  );
};

const LoadingSkeletonImg = () => {
  return (
    <div className="mt-7">
      <WrapperGrid cols="12" spacing="3">
        <div className="col-span-7">
          <div className="skeleton h-[470px] w-full rounded-md"></div>
        </div>
        <div className="col-span-5">
          <WrapperGrid rows="5" spacing="3">
            <WrapperGrid cols="2" className="row-span-2" spacing="3">
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <div
                    key={index}
                    className="skeleton h-[180px] w-full rounded-md"
                  ></div>
                ))}
            </WrapperGrid>
            <div className="col-span-1 row-span-3">
              <div className="skeleton h-[277px] w-full rounded-md"></div>
            </div>
          </WrapperGrid>
        </div>
      </WrapperGrid>
      <div className="skeleton mt-4 h-5 w-full"></div>
    </div>
  );
};

export default TourDetailPage;
