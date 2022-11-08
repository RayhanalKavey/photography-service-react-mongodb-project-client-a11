import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12 mx-10 mb-32	">
      {data.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
