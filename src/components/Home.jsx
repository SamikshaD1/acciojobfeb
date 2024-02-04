import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsData } from "../Redux/Slice/dataSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  console.log(posts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    postsData(dispatch);

    const intervalId = setInterval(() => {
      postsData(dispatch);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
    <div className="h-screen w-full">
      <h3 className="text-3xl font-bold mt-2 ml-6">
        Social Media For Travellers
      </h3>
      <div className="flex flex-col h-screen items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mt-4 mb-2 p-2 border border-gray-900 rounded-xl"
        />

        {/* Posts */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
          {filteredPosts.map((item, index) => (
            <div key={index} className="mx-auto = mt-6 px-5">
              <Link
                to={`/item/${item.id}`}
                className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md"
              >
                <img
                  className="w-full rounded-lg object-cover object-center"
                  src={item.imageUrl}
                  alt="product"
                />
                <p className="my-2 pl-1 font-bold text-gray-500">
                  {item.title}
                </p>
                <p className="my-4 text-xs pl-1 text-gray-900">
                  {item.body.length > 50
                    ? `${item.body.slice(0, 50)}...`
                    : item.body}
                  {item.body.length > 50 && (
                    <span className="text-blue-500 cursor-pointer">
                      Read More
                    </span>
                  )}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
