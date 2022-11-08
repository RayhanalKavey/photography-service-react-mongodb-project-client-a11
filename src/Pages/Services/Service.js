import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, price, img, description, rating, _id } = service;
  console.log(service);
  return (
    <div className="card card-compact w-full h-auto bg-info shadow-2xl ">
      <figure>
        <img className="w-full h-80" src={img} alt="photography" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="font-bold ">Rating:</span> {rating}{" "}
        </p>
        <p className="mb-3">
          <span className="font-bold  ">Price:</span> {price}{" "}
        </p>
        <p>{description.slice(0, 100)} ...</p>
        <div className="card-actions justify-end">
          <Link to={`/serviceDetails/${_id}`}>
            {" "}
            <button className="btn btn-secondary">Service Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
