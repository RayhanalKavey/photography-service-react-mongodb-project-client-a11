import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const { title, price, img, description, rating, _id } = data;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mb-32">
      {/* Service details section */}
      <div className=" lg:col-span-2 ">
        <div className="card w-full h-auto  image-full ">
          <figure>
            <img className="w-full" src={img} alt="Shoes" />
          </figure>

          <div className="card-body ">
            <h1 className="text-success text-5xl my-8 text-center">
              Service Details
            </h1>
            <h2 className=" card-title text-success text-3xl">{title}</h2>
            <div className="text-success">
              <span className="font-bold">Rating:</span> {rating}
            </div>
            <div className="text-success mb-5">
              <span className="font-bold ">Price:</span> {price}
            </div>
            <p className="text-success">{description}</p>
          </div>
        </div>
      </div>
      {/* reviews section */}
      <div className="bg-base-100 ">
        <h1 className=" text-5xl my-8 text-center">Reviews</h1>
      </div>
    </div>
  );
};

export default ServiceDetails;
