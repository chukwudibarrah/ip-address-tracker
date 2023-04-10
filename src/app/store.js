import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../features/addressSlice";

const store = configureStore({
  reducer: {
    user: addressSlice.reducer
  }
});

export default store;