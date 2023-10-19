import { createSlice } from "@reduxjs/toolkit";

const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    addTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { addTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
