import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="custom-home 	">
      <Link to={"/services"}>
        {" "}
        <button className="btn btn-secondary">View all Services</button>{" "}
      </Link>
    </div>
  );
};

export default Home;
