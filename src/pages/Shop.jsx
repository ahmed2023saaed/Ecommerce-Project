import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { increment } from "../store/counter/slice";
import { useDispatch } from "react-redux";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-10 md:px-20 bg-gray-100">
        {products.map((product) => {
          return (
            <div className=" rounded-xl  overflow-hidden bg-gray-200 p-4 group transition duration-300 hover:shadow-2xl shadow-black  ">
              <div className="relative">
                <img
                  className="w-full h-48 object-contain   bg-white"
                  src={product.image}
                />
                <span
                  className="bg-black after:content-[''] after:top-1 after:left-21 
                after:w-0 after:h-0 
                after:border-t-12 after:border-b-transparent 
                after:border-l-10 after:border-t-transparent 
                after:border-b-15 after:border-l-black after:absolute  relative bottom-45 rounded-sm left-49 opacity-0 group-hover:opacity-100 text-white px-2 py-2 "
                >
                  add to cart
                </span>
                <div className="absolute top-0 right-0 bg-indigo-500 opacity-0 group-hover:opacity-100  transition duration-300 text-white font-bold px-2 py-1 m-2 rounded-md">
                  <Link
                    className=""
                    onClick={() => {
                      dispatch(increment());
                    }}
                  >
                    {" "}
                    <i className=" fa-solid fa-cart-shopping"></i>
                  </Link>
                </div>
                <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                  3 min read
                </div>
              </div>
              <div className="py-4  ">
                <div className="text-lg font-medium text-gray-800 mb-2">
                  {product.title}
                </div>
                <p className="text-black text-lg  font-bold">
                  <span className="text-gray-400 font-bold line-through">
                    ${product.price * 2}
                  </span>{" "}
                  ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
