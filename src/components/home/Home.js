import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TitleContext } from "../../App";
import home1Img from "../../assets/photos/home.1.png";
import "./home.css";

const Home = () => {
  const setTitleShow = useContext(TitleContext);

  useEffect(() => {
    setTitleShow(false);
  });

  return (
    <div className="home-component">
      <div className="container">
        <div className="home-top">
          <img src={home1Img} alt="" />
          <div>
            <h1>
              Hi I'm <br />
              Sherzod <br />
              Axadov
            </h1>
            <p>Fontend developer</p>
          </div>
          <div className="hr"></div>
        </div>
      </div>
      <div className="wrapper">
        <Link to="/about">
          <div>
            <h2>About Me</h2>
          </div>
        </Link>
        <Link to="/portfolio">
          <div>
            <h2>My Portfolio</h2>
          </div>
        </Link>
        <Link to="/contact">
          <div>
            <h2>Get in touch</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
