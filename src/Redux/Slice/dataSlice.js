import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    postsData: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    isError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { postsData, isLoading, isError } = postsSlice.actions;
export default postsSlice.reducer;
