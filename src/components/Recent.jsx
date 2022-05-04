import React from "react";

const Recent = () => {
  return (
    <div className="flex flex-[.8] h-3 w-auto bg-[#0a0a0b] p-4 flex-col">
      <div className="flex flex-row p-4">
        {" "}
        <h2 className="text-white font-bold flex text-xl ">Recent Trailers</h2>
        <h2 className="text-white flex relative ml-auto  text-xl">See all</h2>
      </div>
      <div className="flex flex-1 mt-1 aspect-w-16 aspect-h-9 overflow-y-hidden">
        <iframe
          className="ml-6 rounded-xl"
          width="350"
          height="250"
          src="https://www.youtube.com/embed/RMmLTmjXKH8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <iframe
          className="ml-6 rounded-xl"
          width="350"
          height="250"
          src="https://www.youtube.com/embed/JfVOs4VSpmA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <iframe
          className="ml-6 rounded-xl"
          width="350"
          height="250"
          src="https://www.youtube.com/embed/R5yPXKOlVHo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <iframe
          className="ml-6 relative rounded-xl"
          width="250"
          height="250"
          src="https://www.youtube.com/embed/X9ebeNKkc08"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Recent;
