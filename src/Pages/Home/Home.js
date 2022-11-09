import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../Services/Service";
import "./Home.css";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div className="custom-home 	">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12 mx-10 my-16	">
        {data.map((servicesHome) => (
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
    </div>
  );
};

export default Home;
