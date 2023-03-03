import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="main-home">
        <h1 className="text-center  text-uppercase home-header text-pop-up-top">
          welcome to note world
        </h1>
        <Link to="/all" className="home-button bounce-top">
          Click here
        </Link>
      </div>
    </>
  );
}

export default Home;
