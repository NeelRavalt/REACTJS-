import { configureStore } from "@reduxjs/toolkit";
import counterRedcuer from "../features/CounterSlice"; //import keyReducer from reducer -> slice file
import PageReducer from "../features/PageSlice";
export const store = configureStore({
  reducer: {
    counter: counterRedcuer,
    page: PageReducer,
    // hear counter and page are keys
  },
});
