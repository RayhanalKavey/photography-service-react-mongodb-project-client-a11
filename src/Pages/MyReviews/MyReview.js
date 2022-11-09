import React from "react";

const MyReview = ({ myReview, handleDelete }) => {
  const {
    email,
    serviceTitle,
    reviewDescription,
    reviewerImg,
    reviewerName,
    serviceId,
    _id,
  } = myReview;

  return (
    <tr>
      <td>{reviewDescription}</td>
      <td>{serviceTitle}</td>

      <th className="gap-4">
        <button className="btn btn-ghost  btn-xs ">Edit</button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyReview;
