import { configureStore } from "@reduxjs/toolkit";
import bikesReducer from "./bikes/bikes-reduser";

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;

