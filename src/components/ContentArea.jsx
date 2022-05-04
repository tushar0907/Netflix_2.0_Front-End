import React from "react";
import NotificationArea from "../components/NotificationArea";
import Trending from "../components/Trending";
import Recent from "../components/Recent";
import TopRated from "../components/TopRated";
import "./custom.css";

const ContentArea = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetch_movie = async () => {
      await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.Search);
        });
    };
    fetch_movie();
  }, []);

  const showHideMenu = () => {
    const headers = document.getElementById("header123");
    headers?.classList.add("-translate-x-full");
  };

  return (
    <div className="flex flex-[2.5] bg-[#0a0a0b] h-full flex-col overflow-x-auto">
      <NotificationArea />
      <div onClick={showHideMenu} className="flex w-full h-full flex-col px-5">
        <Trending data={data} />
        <Recent />
        <TopRated />
      </div>
    </div>
  );
};

export default ContentArea;
