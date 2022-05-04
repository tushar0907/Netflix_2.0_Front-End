import React from "react";
import Genere from "../components/Genere";
import Userdetail from "../components/Userdetail";
import Reccomendations from "../components/Reccomendations";

const Category = () => {
  return (
    <div
      id="category123"
      className="flex lg:translate-x-0 translate-x-full transition ease-in-out duration-300 top-0 right-0 h-full absolute lg:relative flex-col bg-[#0d0d0f] text-white ">
      <Userdetail />
      <Genere />
      <Reccomendations />
    </div>
  );
};

export default Category;
