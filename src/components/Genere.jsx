import React from "react";
import {FiSearch} from "react-icons/fi";
import {CgMenuCheese} from "react-icons/cg";

const generes = [
  {data: ["Action", "Romantic", "Historical", "Drama", "Comedy"]},
  {
    data: ["Horror", "Sc-Fi", "Adventure", "Documentation"],
  },
];

const Genere = () => {
  return (
    <div className="flex flex-col px-5 ">
      <div
        className="serach flex p-3 w-full mt-3 ml-auto mr-auto border-2 hover:border-rose-500 hover:bg-black cursor-pointer rounded-3xl"
        type="input"
        placeholder="Type here">
        <FiSearch size="20px" className="mt-auto mb-auto ml-3" />
        <CgMenuCheese size="20px" className="mt-auto mb-auto ml-auto mr-6" />
      </div>
      <div className="options flex flex-1 flex-col">
        <h3 className="px-2 mt-5">Genere</h3>
        <div className="blocks flex flex-1 mt-2">
          {generes.map((item) => (
            <div className="one flex flex-col flex-1">
              {item.data.map((d) => (
                <h2 className=" mb-1 font-bold bg-black hover:bg-red-600 rounded-3xl mr-2 p-2 px-5 ">
                  <p className="">{d}</p>
                </h2>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genere;
