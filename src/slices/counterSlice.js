import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterApp",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
