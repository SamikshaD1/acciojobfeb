// src/Redux/middleware/apiMiddleware.js

import { postsData, isError, isLoading } from "./Slice/dataSlice";

const fetchImage = async (postId) => {
  const response = await fetch(`https://picsum.photos/200?random=${postId}`);
  return response.url;
};

const apiMiddleware = () => async (dispatch) => {
  try {
    dispatch(isLoading());
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const postsWithImages = [];
    for (const post of data) {
      const imageUrl = await fetchImage(post.id);
      postsWithImages.push({ ...post, imageUrl });
    }
    console.log(postsWithImages);
    dispatch(postsData(postsWithImages));
  } catch (error) {
    dispatch(isError(error.message));
  }
};

export default apiMiddleware;
