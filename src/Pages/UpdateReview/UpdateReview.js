import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const { data } = useLoaderData();
  const { reviewerName, reviewDescription } = data;
  console.log(data);
  return (
    <div>
      <div>{reviewerName}</div>
      <div>Update review: {reviewDescription}</div>
    </div>
  );
};

export default UpdateReview;
