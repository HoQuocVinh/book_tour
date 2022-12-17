import TextTour from "@/text/TextTour";
import { useState } from "react";
import { useEffect } from "react";
import axios from "~/api/axios";
import {
  CardDomesticTour,
  CardExpeditionTour,
  CardLocalTour,
  CardNorthwestTour,
  CardResortTour,
} from "~/modules/card/";

const TourPage = () => {
  const [tour, setTour] = useState();
  console.log("TCL: TourPage -> tour", tour);
  useEffect(() => {
    const request = {
      type: "TOUR_BASIC",
    };
    axios.post("/tours/search?pageSize=12", request).then((response) => {
      console.log(response);
      const { data } = response.data;
      setTour(data);
    });
  }, []);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-between py-4 font-DMSans lg:mx-auto lg:max-w-7xl">
          <TextTour>Best tour price</TextTour>
          <TextTour>Best quality</TextTour>
          <TextTour>Heartfelt advice</TextTour>
          <TextTour>Flexible payment</TextTour>
        </div>
      </div>
      <div className="px-4 lg:mx-auto lg:max-w-7xl">
        <CardDomesticTour tour = {tour}/>
        {/* <CardNorthwestTour />
        <CardLocalTour />
        <CardResortTour />
        <CardExpeditionTour /> */}
      </div>
    </div>
  );
};

export default TourPage;
