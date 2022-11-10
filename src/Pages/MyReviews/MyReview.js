import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

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
  useTitle("My Review");

  return (
    <tr>
      <td className="italic">{reviewDescription}</td>
      <td>{serviceTitle}</td>

      <th className="gap-4">
        <Link to={`/updateReview/${_id}`}>
          <button className="btn btn-outline mr-2 btn-secondary btn-xs ">
            Edit Review
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyReview;
