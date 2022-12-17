import { getParameterByName } from "./getQueryVariable";

function configTourRequest(payload) {
  const tour = {
    tourDetail: {
      beginningLocation: {
        locationName: payload.beginningLocation,
        locationType: "BEGINNING",
      },
      destinationLocation: {
        locationName: payload.destinationLocation,
        locationType: "DESTINATION",
      },
      startDay: payload.startDay,
    },
    type: "TOUR_BASIC",
  };

  return tour;
}
function configLocationToParam() {
  const location = {
    beginningLocation: getParameterByName("beginningLocation").replaceAll(
      "-",
      " "
    ),
    destinationLocation: getParameterByName("destinationLocation").replaceAll(
      "-",
      " "
    ),
    startDay: getParameterByName("startDay"),
  };
  return location;
}

export { configTourRequest, configLocationToParam };
