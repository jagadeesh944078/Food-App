import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutuate the existing state
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      // state.items.length = 0;
      return { items: [] };
    },
  },
});

export const { addItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
