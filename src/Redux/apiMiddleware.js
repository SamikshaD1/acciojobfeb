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

    // Fetch image URLs for each post
    const postsWithImages = await Promise.all(
      data.map(async (post) => {
        const imageUrl = await fetchImage(post.id);
        return { ...post, imageUrl };
      })
    );

    dispatch(postsData(postsWithImages));
  } catch (error) {
    dispatch(isError(error.message));
  }
};

export default apiMiddleware;
