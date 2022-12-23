import React from "react";

const Reviews = ({ reviewById }) => {
  console.log(reviewById);
  const {
    email,
    serviceTitle,
    reviewDescription,
    reviewerImg,
    reviewerName,
    serviceId,
    _id,
  } = reviewById;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={reviewerImg} alt="Reviewer of the review" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{serviceTitle}</td>
      <td>{reviewDescription}</td>
    </tr>
  );
};

export default Reviews;
