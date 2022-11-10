import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Approach from "../../Components/Approach/Approach";
import Gallery from "../../Components/Gallery/Gallery";
import useTitle from "../../hooks/useTitle";
import Hero from "../Hero/Hero";
import Service from "../Services/Service";

import "./Home.css";

const Home = () => {
  const { data } = useLoaderData();
  useTitle("Home");
  return (
    <div className="custom-home 	">
      {/* hero section */}
      <div className="mb-20">
        <Hero></Hero>
      </div>
      {/* services section */}
      <h1 className=" text-5xl mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12 mx-10 mb-12	">
        {data?.map((servicesHome) => (
          <Service key={servicesHome._id} service={servicesHome}>
            {" "}
          </Service>
        ))}
      </div>
      <div className="text-center mb-20">
        <Link to={"/services"}>
          {" "}
          <button className="btn btn-secondary">View all Services</button>{" "}
        </Link>
      </div>
      {/* Our approach section */}
      <div>
        <Approach></Approach>
      </div>
      {/* gallery section */}
      <div className="mb-20">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
