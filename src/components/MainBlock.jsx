import React from "react";
import MenuArea from "../components/MenuArea";
import ContentArea from "../components/ContentArea";
import Category from "../components/Category";

const MainBlock = () => {
  return (
    <div className="flex flex-1  w-full h-screen flex-row ">
      <MenuArea />
      <ContentArea />
      <Category />
    </div>
  );
};

export default MainBlock;
