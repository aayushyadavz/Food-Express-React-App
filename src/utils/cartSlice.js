import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    showPopup: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      state.showPopup = true;
    },
    removeItems: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.showPopup = state.items.length > 0;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.showPopup = false;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
