import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const { title, price, img, description, rating, _id } = data;
  console.log(title);
  return <div>this is service details</div>;
};

export default ServiceDetails;
