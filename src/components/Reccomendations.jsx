import React from "react";

const Reccomendations = () => {
  return (
    <div className="flex flex-1  flex-col">
      <div className="download flex flex-1 flex-col ">
        <div className="text-white flex mt-5 px-5 justify-between">
          <h1 className="font-bold">Recent Download</h1>
          <p className="">See All</p>
        </div>
        <div className="flex flex-1 p-5">
          <div
            className="flex w-80 rounded-2xl bg-cover justify-center items-end p-5 text-3xl font-bold"
            style={{
              backgroundImage: `url('https://www.shreekanchanpath.com/wp-content/uploads/2022/04/5-9.jpg')`,
            }}>
            <div className=" flex bg-black opacity-60 rounded-xl">
              <h2> Avatar 2</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bookmarked flex flex-1 flex-col">
        <div className="text-white -mt-3 flex flex-[.1]">
          <h1 className="ml-2 font-bold ">Bookmarked</h1>
          <p className="ml-auto mr-6">See All</p>
        </div>
        <div className="flex p-5 flex-1">
          <div
            className="flex w-80 rounded-2xl bg-cover justify-center items-end p-6 text-3xl font-bold"
            style={{
              backgroundImage: `url('https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fcb5af8fb-e64f-40ed-9f55-4b203787505e_1200x675.jpeg')`,
            }}>
            <div className=" flex bg-black opacity-60 rounded-xl">
              <h2> Uncharted 2022</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reccomendations;
