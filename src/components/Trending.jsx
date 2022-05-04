import React from "react";
import {FaImdb} from "react-icons/fa";

const Trending = ({data}) => {
  return (
    <div className="flex flex-[1.1] h-3 w-auto p-5 bg-[#0a0a0b] overflow-x-auto flex-col">
      <div className="flex flex-row p-5">
        <div className="flex font-bold text-white text-xl">Trending Movies</div>
        <h2 className="text-white flex relative ml-auto text-xl ">See all</h2>
      </div>
      <div className="flex w-full flex-nowrap overflow-x-auto overflow-y-hidden">
        {data?.map((item) => (
          <div
            className={`flex-none mx-3 h-56 w-80 bg-cover `}
            style={{backgroundImage: `url(${item.Poster})`}}>
            <div className="flex items-end py-3 h-full">
              <div className="flex flex-col text-white justify-end items-center  w-60 h-20 ">
                <h1 className="font-bold text-1xl">{item.Title}</h1>
                <p>{item.Year}</p>
                <h3 className="flex flex-1">
                  <FaImdb className="text-yellow-300 w-10 -ml-2" size="30px" />
                  IMDB 9.2{" "}
                  <button className="bg-blue-500/30 w-20 h-7 items-center justify-center rounded-xl ml-4 flex relative text-sm">
                    Watch Now
                  </button>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
