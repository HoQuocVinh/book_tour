import { WrapperGrid } from "~/components/common";
import Describe from "~/components/describe/Describe";
import Heading from "~/components/heading/Heading";
import TagBenefit from "~/components/tag/TagBenefit";
import TagPriceFlight from "~/components/tag/TagPriceFlight";
import { v4 as uuidv4 } from "uuid";
const FlightPage = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="mx-auto p-4 font-DMSans lg:mx-auto lg:max-w-7xl">
          <WrapperGrid cols="3">
            <TagBenefit src="./plane.svg">
              <p className="text-c3">Choose the most suitable flight</p>
              <p className="text-sm text-c4">
                Easily compare prices between airlines
              </p>
            </TagBenefit>
            <TagBenefit src="./travel_ticket.svg" className="px-4">
              <p className="text-c3">Quick and easy ticket booking</p>
              <p className="text-sm text-c4">
                Buy airline tickets easily, issue tickets instantly
              </p>
            </TagBenefit>
            <TagBenefit src="./give_money.svg" className="px-4">
              <p className="text-c3">Safe Payment</p>
              <p className="text-sm text-c4">
                Multiple flexible payment modes configurable
              </p>
            </TagBenefit>
          </WrapperGrid>
        </div>
      </div>
      <div className="bg-c7">
        <div className="px-4 pt-5 lg:mx-auto lg:max-w-7xl">
          <Heading sx="xl-3" color="light">
            Best fares right now
          </Heading>
          <Describe color="light" className="mt-1">
            Good price today, don't leave it for tomorrow
          </Describe>
          <div className="my-5">
            <WrapperGrid cols="3" spacing="8">
              {Array(12)
                .fill(0)
                .map((item, index) => (
                  <TagPriceFlight
                    key={uuidv4()}
                    departure="Hồ Chí Minh"
                    dateDeparture="24.11"
                    destination="Nha Trang"
                    dataDestination="26.11"
                    price={1279200}
                  />
                ))}
            </WrapperGrid>
          </div>
          <Heading sx="xl-3" color="light">
            Promotions and offers
          </Heading>
          <Describe color="light" className="mt-1">
            Enjoy the offer - Comfortable experience
          </Describe>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
