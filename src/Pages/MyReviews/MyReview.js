import React from "react";

const MyReview = ({ myReview }) => {
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
      {/* <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th> */}
      <td>{reviewDescription}</td>
      <td>{serviceTitle}</td>

      <th>
        <button className="btn btn-ghost btn-xs">Edit</button>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyReview;
