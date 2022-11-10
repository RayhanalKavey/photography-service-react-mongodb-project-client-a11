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
        {/* <button className="btn btn-ghost  btn-xs ">Edit</button> */}
        {/*  */}
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn btn-ghost  btn-xs ">
          Edit
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
        {/*  */}
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
