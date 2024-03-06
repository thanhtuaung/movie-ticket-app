import React from "react";
import nowayhome from "../assets/nowayhome.jpg";
import TrendMovies from "../components/TrendMovies";

const Home = () => {
  return (
    <div className="">
      <div className="img-container">
        <img src={nowayhome} alt="" className="home_image" />
      </div>
      <TrendMovies />
    </div>
  );
};

export default Home;
