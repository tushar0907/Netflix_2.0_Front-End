import React from "react";
import {AiFillHome} from "react-icons/ai";
import {AiFillCompass} from "react-icons/ai";
import {IoIosBug} from "react-icons/io";
import {BsAlarmFill} from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";
import {BsBookmarkDashFill} from "react-icons/bs";
import {HiOutlineDownload} from "react-icons/hi";
import {AiFillStar} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {MdSettings} from "react-icons/md";

const MenuArea = () => {
  return (
    <div
      id="header123"
      className="flex flex-[.5] lg:translate-x-0 -translate-x-full lg:relative z-50 absolute transition ease-in-out duration-300 bg-[#0d0d0f] text-[#76787f] h-full w-auto flex-col">
      <div className="home flex flex-1  h-auto w-auto flex-col p-7 border-b border-[#8c8f94] justify-left">
        <div id="title " className="flex flex[.5] ml-3 font-bold text-xl">
          Menu
        </div>
        <div className="options flex flex-1 flex-col mt-12  p-4 ">
          <div className="cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="home" className=" flex mt-2">
              <AiFillHome
                className="hover:text-red-600"
                size="20px"
                style={{}}
              />
              <h4 className="ml-3 ">Home</h4>
            </p>
          </div>
          <div className="hover:text-white rounded-xl h-8  mt-5 cursor-pointer hover:border-r-2 hover:border-red-600">
            <p id="directory " className="flex mt-2">
              <AiFillCompass size="20px" />
              <h4 className="flex mt-auto ml-3">Discovery</h4>
            </p>
          </div>
          <div className="mt-5 cursor-pointer  h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="commu" className="flex mt-1">
              <IoIosBug size="20px" /> <h4 className="ml-3">Community</h4>
            </p>
          </div>
          <div className="mt-4 cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="soon" className="flex mt-2">
              <BsAlarmFill size="20px" /> <h4 className="ml-3">Coming Soon</h4>
            </p>
          </div>
        </div>
      </div>
      <div className="library flex flex-1  h-auto w-auto flex-col p-7 border-b border-[#8c8f94] justify-left">
        <div className="library flex flex[.5] ml-3 font-bold text-xl">
          Library
        </div>
        <div className="options flex flex-1 flex-col mt-5 p-4 ">
          <div className="mt-3 mb-1 cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="home" className=" flex mt-2">
              <BiTimeFive size="20px" />
              <h4 className="ml-3 ">Recent</h4>
            </p>
          </div>
          <div className="mt-2 cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="directory " className="flex mt-2">
              <BsBookmarkDashFill size="20px" />
              <h4 className="flex ml-3">Bookmarked</h4>
            </p>
          </div>
          <div className="mt-4 cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="commu" className="flex mt-2">
              <AiFillStar size="20px" /> <h4 className="ml-3">Top Rated</h4>
            </p>
          </div>
          <div className="mt-4 cursor-pointer h-8 hover:text-white rounded-xl hover:border-r-2 hover:border-red-600">
            <p id="soon" className="flex mt-2">
              <HiOutlineDownload size="20px" />{" "}
              <h4 className="ml-3">Download</h4>
            </p>
          </div>
        </div>
      </div>
      <div className="settings flex flex-[.7]  h-auto w-auto flex-col p-7 justify-left">
        <div className="library flex hover:text-white flex[.5] font-bold text-xl mb-8">
          <MdSettings size="30px" /> <h4 className="ml-3 ">Settings</h4>
        </div>
        <div className="library hover:text-white flex flex[.5]  font-bold text-xl">
          <BiHelpCircle size="30px" />
          <h4 className="ml-3 ">Help</h4>
        </div>
      </div>
    </div>
  );
};

export default MenuArea;
