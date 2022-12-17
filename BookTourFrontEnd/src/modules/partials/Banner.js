import { useLocation } from "react-router-dom";

import { LayoutSearchBox } from "~/layouts";
import WrapperBanner from "~/components/common/WrapperBanner";

const Banner = () => {
  const location = useLocation();
  let render = "";
  switch (location.pathname) {
    case "/":
      render = (
        <WrapperBanner
          src="https://meria.vn/wp-content/uploads/2021/08/a10-1.png"
          heading="Great vacation experience"
          describe="Fully-equipped hotel"
        >
          <LayoutSearchBox />
        </WrapperBanner>
      );
      break;
    case "/flight":
      render = (
        <WrapperBanner
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          heading="Easy flight booking"
          describe="Smart choice - the journey you want"
        >
          <LayoutSearchBox />
        </WrapperBanner>
      );
      break;
    case "/tour":
      render = (
        <WrapperBanner
          src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/hero/desktop/Hornet_Reveal_BHP-Hero_Desktop.jpg"
          heading="Travel by personality"
          describe="Full experience - affordable price"
        >
          <LayoutSearchBox />
        </WrapperBanner>
      );
      break;
    default:
      break;
  }
  return (
    <div className="relative h-[578px] w-full after:absolute after:inset-0 after:z-[10] after:bg-black after:bg-opacity-40 after:content-['_']">
      {render}
    </div>
  );
};

export default Banner;
