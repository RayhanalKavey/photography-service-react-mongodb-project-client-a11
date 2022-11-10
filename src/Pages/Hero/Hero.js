import React from "react";
import bgHero from "../../assets/images//background-img/home-background.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-info">
            Welcome to Photo Bizz
          </h1>
          <p className="mb-5 text-info">
            One of the best photography studios you have ever seen. Let's
            capture moments with Photo Bizz.
          </p>
          <Link to={"/signup"}>
            {" "}
            <button className="btn btn-info btn-outline">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
