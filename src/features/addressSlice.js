import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: "",
  reducers: {
    saveUser: (state, action) => action.payload
  }
});

export default addressSlice;