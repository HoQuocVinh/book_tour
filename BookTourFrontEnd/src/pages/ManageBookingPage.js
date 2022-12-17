import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Heading from "~/components/heading/Heading";
import { IconArrowRight } from "~/components/icon/IconProfilePage";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import ContentMangeTour from "~/modules/booking/ContentMangeTour";

const ManageBookingPage = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useSelector((state) => state.auth);
  const [tourBooking, setTourBooking] = useState([]);
  console.log("TCL: ManageBookingPage -> tourBooking", tourBooking);
  useEffect(() => {
    axiosPrivate.get(`bookings/user/${user.email}`).then((response) => {
      const { data } = response;
      data.map(
        (item, index) =>
          item.enable && setTourBooking((prev) => [...prev, item])
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
      <div className="mt-5 flex items-center gap-2">
        <span className="inline-block rotate-180">
          <IconArrowRight />
        </span>
        <Link to="../" className="text-c3">
          Home
        </Link>
        <div className="h-4 w-[1px] bg-slate-400"></div>
        <span className="text-c5">Booking</span>
      </div>
      <Heading sx="xl-5" className="mt-10 text-c2">
        Bookings
      </Heading>
      {!tourBooking.length && (
        <div className="mt-5">You don't have any tours at the moment</div>
      )}
      {tourBooking.map((item, index) => (
        <ContentMangeTour key={item.id} tourBooking={item} />
      ))}
    </div>
  );
};

export default ManageBookingPage;
