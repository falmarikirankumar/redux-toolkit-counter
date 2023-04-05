import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "counterApp",
  initialState: {
    name: "Kirankumar",
  },
  reducers: {
    display: (state) => {
      // console.log(state);
      return state.name;
    },
  },
});

export default nameSlice.reducer;
export const { display } = nameSlice.actions;
