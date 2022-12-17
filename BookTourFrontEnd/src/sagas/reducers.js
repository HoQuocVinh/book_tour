import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import tourReducer from "./tour/tour-slice";
import darkModeSlice from "./darkmode/darkModeSlice";

export const reducer = combineReducers({
  darkMode: darkModeSlice,
  auth: authReducer,
  tour: tourReducer,
});
