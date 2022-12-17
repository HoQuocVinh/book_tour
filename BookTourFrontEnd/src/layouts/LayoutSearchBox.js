import { withErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import { SearchBoxFlight, SearchBoxHotel } from "~/modules/search";

import ErrorBoundary from "@/common/ErrorBoundary";
import NavSearchBox from "@/nav/NavSearchBox";
import SearchBoxTour from "~/modules/search/SearchBoxTour";
const LayoutSearchBox = () => {
  const location = useLocation();

  let render = "";
  switch (location.pathname) {
    case "/":
      render = <SearchBoxHotel />;
      break;
    case "/flight":
      render = <SearchBoxFlight />;
      break;
    case "/tour":
      render = <SearchBoxTour />;
      break;
    default:
      break;
  }
  return <NavSearchBox>{render}</NavSearchBox>;
};

export default withErrorBoundary(LayoutSearchBox, {
  FallbackComponent: ErrorBoundary,
});
