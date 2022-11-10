import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  const { data } = useLoaderData();
  const { reviewDescription } = data;

  const { user } = useContext(AuthContext);

  const [updateReview, setUpdateReview] = useState(data);
  useTitle("Update review");
  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(updateReview);
    ///send updated data to the server
    fetch(
      `https://service-assignment-11-server.vercel.app/reviews/${updateReview?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        }
      });
  };
  const handleUpdateChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...updateReview };
    newReview[field] = value;
    setUpdateReview(newReview);
  };

  return (
    <form className="mx-10 my-20" onSubmit={handleUpdateReview} action="">
      <h3 className="font-bold my-5 text-lg ml-3">Update your review</h3>
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <input
          onChange={handleUpdateChange}
          name="name"
          type="text"
          placeholder="name"
          defaultValue={user?.displayName}
          className="input input-bordered w-full "
          readOnly
        />
        <input
          onChange={handleUpdateChange}
          name="email"
          type="text"
          placeholder="Your email"
          defaultValue={user?.email}
          className="input input-bordered w-full "
          readOnly
        />
      </div>
      <input
        onChange={handleUpdateChange}
        name="photoURL"
        type="text"
        placeholder="Image link"
        defaultValue={user?.photoURL}
        className="input input-bordered w-full mb-5"
        readOnly
      />
      <textarea
        onChange={handleUpdateChange}
        name="reviewDescription"
        className="textarea textarea-bordered h-56 w-full mb-8 "
        placeholder="Your review"
        defaultValue={reviewDescription}
        required
      ></textarea>
      <Link to={"/myReviews"}>
        {" "}
        <button className="btn btn-secondary mr-4">Close</button>
      </Link>
      <input
        className="btn btn-outline btn-secondary "
        type="submit"
        value="Update"
      />
    </form>
  );
};

export default UpdateReview;
