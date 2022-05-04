import React from "react";
import {FaImdb} from "react-icons/fa";

const toprated = [
  {
    url: "https://cdn.onebauer.media/one/media/61b2/2a36/d603/e8f9/992f/65b8/extraction-2-crop.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
    title: "Extraction 2",
    year: "2022",
    imdb: "9",
  },
  {
    url: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/04/07/253080-untitled-design-2022-04-07t195440149.jpg",
    title: "Doctor Strange 2",
    year: "2022",
    imdb: "8.3",
  },
  {
    url: "https://i0.wp.com/feminisminindia.com/wp-content/uploads/2020/09/b41c6595.jpg?fit=1500%2C876&ssl=1",
    title: "Enola Holmes",
    year: "2020",
    imdb: "7.8",
  },
  {
    url: "https://www.somagnews.com/wp-content/uploads/2021/11/Thor-Love.jpg",
    title: "Thor Love and Thunder",
    year: "2022",
    imdb: "8.5",
  },
];

const TopRated = () => {
  return (
    <>
      <div className="flex flex-[1.1] h-3 w-auto bg-[#0a0a0b] flex-col p-5">
        <div className="flex flex-row">
          {" "}
          <div className="flex font-bold text-white text-xl p-4 items-end">
            Top Rated ⭐
          </div>
          <h2 className="text-white flex relative p-4 ml-auto text-xl mb-1">
            See all
          </h2>
        </div>
        <div className="flex flex-1 p-6 overflow-x-auto">
          {toprated.map((item) => (
            <div
              key={item.url}
              className="flex w-80 mr-4 text-white rounded-2xl bg-cover justify-center items-end p-5 text-3xl font-bold"
              style={{
                backgroundImage: `url('${item.url}')`,
              }}>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-xl text-white ">{item.title}</h1>
                <p className="text-xl">{item.year}</p>
                <h3 className="flex text-xs items-center">
                  <FaImdb className="text-yellow-300" size="25px" />
                  IMDB {item.imdb}
                </h3>
              </div>
              <button className="text-xs bg-black opacity-80 font-bold">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopRated;
