import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import nameSlice from "../slices/nameSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: nameSlice,
  },
});
