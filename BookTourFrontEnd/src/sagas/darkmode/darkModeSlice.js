import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => ({
      ...state,
      darkMode: payload,
    }),
  },
});
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
