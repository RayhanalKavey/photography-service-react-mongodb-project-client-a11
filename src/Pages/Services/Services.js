import React from "react";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  return <div>Services found : {services.length}</div>;
};

export default Services;
