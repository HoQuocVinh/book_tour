import { createSlice } from "@reduxjs/toolkit";
const tourItems = localStorage.getItem("searchTour");
const tourSlice = createSlice({
  name: "tour",
  initialState: {
    listTour: tourItems ? JSON.parse(tourItems) : [],
  },
  reducers: {
    tourDetail: (state, { payload }) => ({
      listTour: payload,
    }),
  },
});

export const { tourDetail, tourLocation } = tourSlice.actions;
export default tourSlice.reducer;
