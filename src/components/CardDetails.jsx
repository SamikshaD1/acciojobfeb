import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function CardDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    const filterProduct = posts.filter((post) => post.id == id);
    setProduct(filterProduct[0]);
  }, [id]);

  console.log(product);

  return (
    <div className="h-screen w-full">
      <h3 className="text-3xl font-bold mt-4 ml-6">POST NUMBER {product.id}</h3>
      <div className="flex flex-col md:flex-row mt-3 cursor-pointer rounded-lg bg-white p-2 px-4">
        <img
          className="h-80 rounded-2xl object-cover object-center"
          src={product.imageUrl}
          alt="product"
        />
        <div className="flex flex-col p-4 items-start gap-2">
          <h2>Title : {product.title}</h2>
          <h2>Description : {product.body}</h2>
        </div>
      </div>

      {/* MORE POST SECTION */}

      <h3 className="text-3xl font-bold mt-4 ml-6">MORE POSTS</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {posts.map((item, index) => (
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
              <p className="my-2 pl-1 font-bold text-gray-500">{item.title}</p>
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
  );
}

export default CardDetails;
