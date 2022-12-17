import { useNavigate } from "react-router-dom";
import { WrapperFlex, WrapperGrid } from "../common";

const CardTourItem = ({ tour }) => {
  const navigate = useNavigate();
  const handleSelectTour = (begin, id) => {
    navigate(`/detail-page?beginningLocation=${begin}&id=${id}`);
  };
  return (
    <div
      className="h-full cursor-pointer bg-white font-Helvetica shadow-md transition-all hover:bg-[rgba(64,166,242,0.1)]"
      onClick={() =>
        handleSelectTour(
          tour.tourDetail.beginningLocation.locationName,
          tour.id
        )
      }
    >
      <WrapperFlex col className="relative h-full">
        <img
          alt=""
          src={tour.tourDetail.images[0]}
          className="thumbnail h-[250px] w-full object-cover"
        />
        <WrapperFlex flex1>
          <WrapperGrid rows="2" className="p-4">
            <WrapperGrid row="1">
              <p className="cursor-pointer text-justify font-Roboto text-lg font-bold text-c3 transition-all hover:text-[#4d4aef]">
                {tour.tourDetail.tourName}
              </p>
            </WrapperGrid>
            <WrapperGrid row="1">
              <WrapperFlex col>
                <div className="mt-3 text-c4">
                  Tour ID: <span className="font-bold text-c3">{tour.id}</span>
                </div>
                <div className="mt-3 text-c4">
                  Beginning location:{" "}
                  <span className="font-bold text-c3">
                    {tour.tourDetail.beginningLocation.locationName}
                  </span>
                </div>
                <WrapperFlex flex1 col className="mt-5">
                  <span className="price mt-auto text-right text-2xl font-bold text-[#f79321]">
                    {tour.tourDetail.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </WrapperFlex>
              </WrapperFlex>
            </WrapperGrid>
          </WrapperGrid>
        </WrapperFlex>
      </WrapperFlex>
    </div>
  );
};

export default CardTourItem;
