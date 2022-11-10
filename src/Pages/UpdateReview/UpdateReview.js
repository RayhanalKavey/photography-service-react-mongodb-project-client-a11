import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const UpdateReview = () => {
  const { data } = useLoaderData();
  const { reviewDescription } = data;

  const { user } = useContext(AuthContext);

  const [updateReview, setUpdateReview] = useState(data);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    console.log(updateReview);
  };
  const handleUpdateChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...updateReview };
    newReview[field] = value;
    setUpdateReview(newReview);
    console.log(newReview);
  };
  // console.log(updateReview);
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
      <button className="btn btn-secondary mr-4">Cancel</button>
      <input
        className="btn btn-outline btn-error "
        type="submit"
        value="Delete"
      />
    </form>
  );
};

export default UpdateReview;
