import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 h-screen ">
        <div className="container m-auto h-full px-10 flex justify-center items-center">
          <div className="text-box w-1/2 pr-10">
            <h2 className="tracking-wide my-7 text-5xl font-stretch-75% font-sans font-bold">
              Style That Speaks for You <span className="text-blue-600">Upgrade Your Wardrobe</span>
            </h2>
            <p className="text-lg text-gray-600  mb-10">
              Discover a curated collection of timeless pieces designed to
              express your individuality
            </p>
            <Link to={"/shop"} className="bg-blue-600 border rounded-xl hover:bg-white  hover:shadow-2xl hover:border-blue-600 hover:text-blue-600 px-12 py-3 text-white font-bold text-2xl">
                Shop Now
            </Link>
          </div>

          <div className="image w-120 ">
            <img className="rounded-3xl shadow-black transition hover:shadow-2xl" src="src/assets/cloth.avif" />
          </div>
        </div>
      </div>
    </>
  );
}
