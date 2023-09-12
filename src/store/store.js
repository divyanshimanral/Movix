import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";

// create store
// now provide the store to the react app in main.jsx
export const store = configureStore({
  reducer: {
    // import homeSlice to make it available to app
    home: HomeSlice,
  },
});
