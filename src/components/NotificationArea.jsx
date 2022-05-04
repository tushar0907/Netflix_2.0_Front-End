import React from "react";
import {CgMediaLive} from "react-icons/cg";
import {MdNotifications} from "react-icons/md";
import {BsFillSquareFill} from "react-icons/bs";
import {FaBars} from "react-icons/fa";

export const showHideMenu = () => {
  const headers = document.getElementById("header123");
  headers?.classList.toggle("-translate-x-full");
};
export const showCategory = () => {
  document.getElementById("category123")?.classList.toggle("-translate-x-full");
};
const NotificationArea = () => {
  return (
    <div className="flex w-auto bg-[#0d0d0f]  border-b border-[#8c8f94]">
      <div className="letters flex flex-[2] items-center">
        <div onClick={showHideMenu} className="flex flex-1 py-5">
          <FaBars color="white" size={20} className="mx-5 lg:hidden flex" />

          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt="logo"
            height={20}
            className=" lg:mx-5"
            width="50%"
          />
        </div>
        <div className="flex justify-around w-full flex-[3]">
          <h3 className="text-[#8c8f94] text-xl font-bold ">Movies</h3>
          <h3 className="text-[#8c8f94] text-xl font-bold items-center">
            Series
          </h3>
          <h3 className="text-[#8c8f94] text-xl font-bold items-center">
            Shows
          </h3>
        </div>
      </div>
      <div className="icons flex flex-[0.5] justify-around items-center">
        <CgMediaLive className="flex  text-[#8c8f94]" size="25px" />
        <MdNotifications className="flex  text-[#8c8f94] " size="25px" />
        <BsFillSquareFill className="flex  text-[#8c8f94]" size="20px" />
        <img
          onClick={showCategory}
          className="bg-cover lg:hidden bg-no-repeat rounded-3xl h-11 overflow-auto mt-1 mb-1"
          src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg"
          alt="Profile Pic"
        />
      </div>
    </div>
  );
};

export default NotificationArea;
