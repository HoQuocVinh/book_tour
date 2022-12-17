import React from "react";
import { Link } from "react-router-dom";
import { WrapperFlex } from "../common";
import { TwoWayArrow } from "../icon";

const TagPriceFlight = ({
  departure,
  destination,
  dateDeparture,
  dataDestination,
  price,
}) => {
  return (
    <div className="relative rounded-md bg-white p-4 shadow-lg hover:shadow-[0_20px_40px_-14px_rgb(0_0_0_/_25%)]">
      <Link to="/">
        <WrapperFlex spacing="4">
          <div className="flex-col">
            <p>{departure}</p>
            <span>{dateDeparture}</span>
          </div>
          <span className="mt-[6px]">
            <TwoWayArrow />
          </span>
          <div className="flex-col">
            <p>{destination}</p>
            <span>{dataDestination}</span>
          </div>
        </WrapperFlex>
        <div className="absolute top-4 right-4 h-[22px] w-[80px]">
          <img
            alt="ariline-name"
            src="https://www.ivivu.com/ve-may-bay/images/compact/VietnamAirlines.png"
          />
        </div>
        <WrapperFlex className="mt-3" justify="between">
          <span className="price mt-auto text-right text-xl font-bold text-[#26bed6]">
            {price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          <button className="rounded-md bg-orange-500 py-1 px-3 font-semibold text-white transition-all hover:bg-[#FFBD00]">
            View
          </button>
        </WrapperFlex>
      </Link>
    </div>
  );
};

export default TagPriceFlight;
