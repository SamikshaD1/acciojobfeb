import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsData } from "../Redux/Slice/dataSlice";

function Home() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    postsData(dispatch);

    const intervalId = setInterval(() => {
      postsData(dispatch);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="loading"
            />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex h-screen justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {/* Posts */}
        {posts.map((item, index) => (
          <div key={index} className="mx-auto mt-6 px-5">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className="w-full rounded-lg object-cover object-center"
                src={item.imageUrl}
                alt="product"
              />
              <p className="my-2 pl-1 font-bold text-gray-500">{item.title}</p>
              <p className="my-4 text-xs pl-1 text-gray-900">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
