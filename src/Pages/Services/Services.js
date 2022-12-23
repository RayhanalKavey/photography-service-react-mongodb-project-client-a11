import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Service from "./Service";

const Services = () => {
  const { data } = useLoaderData();
  useTitle("Services");
  return (
    <div>
      <h1 className="text-center mt-12 mb-5 font-semibold text-2xl">
        Our Available Services
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12 mx-10 mb-32 	">
        {data?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
