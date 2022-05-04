import React from "react";
import {RiArrowDropDownLine} from "react-icons/ri";

const Userdetail = () => {
  return (
    <div className="flex items-center">
      <div className="id flex flex-1 p-4 items-center">
        <img
          className="bg-cover bg-no-repeat rounded-3xl h-11 overflow-auto mt-1 mb-1"
          src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg"
          alt="Profile Pic"
        />
        <h2 className="font-bold ml-3">Tushar Kumar</h2>
      </div>
      <div className="details flex px-2">
        <div className="dropdow text-white bg-black rounded-3xl h-7 w-7 ">
          <RiArrowDropDownLine className="mt-0 mb-auto" size="30px" />
        </div>
      </div>
    </div>
  );
};

export default Userdetail;
