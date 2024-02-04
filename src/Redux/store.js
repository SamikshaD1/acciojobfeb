import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Slice/dataSlice";
import apiMiddleware from "./apiMiddleware";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export default store;
