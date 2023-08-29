import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./watchListSlice";

export default configureStore({
  reducer: {
    moviesWatchList: watchListSlice,
  },
});
