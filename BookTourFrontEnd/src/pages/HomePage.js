import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CardDefault from "@/card/CardDefault";
import { WrapperGrid } from "@/common";
import Describe from "@/describe/Describe";
import Heading from "@/heading/Heading";
import Img from "@/img/Img";
import { useEffect } from "react";

const SAFE_TRAVLES = [
  {
    heading: "Romantic",
    describe: "Go around the world, full of love",
    src: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    hotelNumber: 16,
    to: "sign-in",
  },
  {
    heading: "Vacation",
    describe: "Traveling on foot",
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    hotelNumber: 59,
    to: "/",
  },
  {
    heading: "Palpitating",
    describe: "Classy box space in the middle of nature",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    hotelNumber: 17,
    to: "/",
  },
  {
    heading: "Gift Vourcher",
    describe: "Save the moment of journey experience",
    src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    to: "/",
  },
];
const HomePage = () => {
  useEffect(() => {
    document.title = "TripGuide";
  }, []);
  const navigate = useNavigate();
  return (
    <div className="px-5 py-10 font-DMSans lg:mx-auto lg:max-w-7xl">
      <div className="safe-travel">
        <Heading sx="xl-3">Safe Travel</Heading>
        <Describe spacingTop="1" color="light">
          Improve health balance life
        </Describe>
        {/* Use for screen bigger than width mobile */}
        <WrapperGrid className="mt-3 hidden lg:grid" cols="4" spacing="4">
          {SAFE_TRAVLES.map((item, index) => (
            <CardDefault
              key={index}
              overlay
              blur="20"
              height="h-[360px]"
              radius="2"
              cursor
              heading={item.heading}
              src={item.src}
              describe={item.describe}
              hotelNumber={item.hotelNumber}
              onClick={() => navigate(item.to)}
            />
          ))}
        </WrapperGrid>
        {/* Use for screen mobile */}
        <Swiper
          pagination={true}
          modules={[Pagination]}
          loop
          grabCursor
          spaceBetween={20}
          slidesPerView={1.3}
          className="mt-3 block lg:hidden"
        >
          {SAFE_TRAVLES.map((item, index) => (
            <SwiperSlide key={index}>
              <CardDefault
                key={index}
                overlay
                blur="20"
                height="h-[360px]"
                radius="4"
                cursor
                heading={item.heading}
                src={item.src}
                describe={item.describe}
                hotelNumber={item.hotelNumber}
                onClick={() => navigate(item.to)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="best-deals mt-16">
        <Heading sx="xl-3" deal total={443}>
          Today's best deals
        </Heading>
        <Describe spacingTop="1" color="light">
          Quickly book now. Tomorrow will miss
        </Describe>
        <Img
          className="mt-3"
          height="h-[250px]"
          src="https://images.unsplash.com/photo-1580478161441-0006a8382c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="img"
          radius="4"
        />
      </div>
      <div className="favorite-destination mt-16">
        <Heading sx="xl-3">Favorite destination in the country</Heading>
        <Describe spacingTop="1" color="light">
          Up the forest to the sea. Full Vietnam
        </Describe>
        <WrapperGrid spacing="4" className="mt-3" cols="3" rows="2">
          <WrapperGrid spacing="4" col="2" rows="2">
            <WrapperGrid col="2">
              <CardDefault
                overlay
                cursor
                blur="20"
                radius="4"
                height="h-[190px]"
                src="https://images.unsplash.com/photo-1582651957695-5986ea9576f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                heading="Phú Quốc"
              >
                365 hotels
              </CardDefault>
            </WrapperGrid>
            <CardDefault
              overlay
              cursor
              blur="20"
              radius="4"
              height="h-[190px]"
              src="https://images.unsplash.com/photo-1625125083293-c3bc94eff374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              heading="Đà lạt"
            >
              534 hotels
            </CardDefault>
            <CardDefault
              overlay
              cursor
              blur="20"
              radius="4"
              height="h-[190px]"
              src="https://images.unsplash.com/photo-1595842740284-ddc95645f4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              heading="Quy nhơn"
            >
              138 hotels
            </CardDefault>
          </WrapperGrid>
          <CardDefault
            overlay
            cursor
            blur="20"
            radius="4"
            src="https://images.unsplash.com/photo-1623596711701-9bac744e0721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"
            heading="Vũng Tàu"
          >
            113 hotels
          </CardDefault>
          <CardDefault
            overlay
            cursor
            blur="20"
            radius="4"
            src="https://images.unsplash.com/photo-1533002832-1721d16b4bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80"
            heading="Nha Trang"
          >
            496 hotels
          </CardDefault>
          <WrapperGrid spacing="4" col="2" rows="2">
            <WrapperGrid col="2">
              <CardDefault
                overlay
                cursor
                blur="20"
                radius="4"
                height="h-[190px]"
                src="https://images.unsplash.com/photo-1584843266656-31f6e8b89ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                heading="Đà Nẵng"
              >
                795 hotels
              </CardDefault>
            </WrapperGrid>
            <CardDefault
              overlay
              cursor
              blur="20"
              radius="4"
              height="h-[190px]"
              src="https://images.unsplash.com/photo-1582558906697-5ebfbcb1c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              heading="Phan Thiết"
            >
              107 hotels
            </CardDefault>
            <CardDefault
              overlay
              cursor
              blur="20"
              radius="4"
              height="h-[190px]"
              src="https://images.unsplash.com/photo-1595949267783-58f2218e9cec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              heading="Quy nhơn"
            >
              15 hotels
            </CardDefault>
          </WrapperGrid>
        </WrapperGrid>
      </div>
    </div>
  );
};

export default HomePage;
