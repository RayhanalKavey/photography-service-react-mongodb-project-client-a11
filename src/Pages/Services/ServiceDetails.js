import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const { title, price, img, description, rating, _id } = data;
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email || "Unregistered";
    const photoURL = user?.photoURL;
    const reviewDescription = form.message.value;

    const review = {
      reviewerName: name,
      email,
      reviewerImg: photoURL,
      serviceId: _id,
      reviewDescription,
    };
    console.log(review);
  };

  return (
    <div>
      {/* Service details section */}

      <div className="card w-full h-auto  image-full mb-16">
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

      {/* reviews section */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 mb-32"></div> */}

      <div className=" mb-32 mx-8">
        <h1 className=" text-5xl my-8 text-center">Reviews</h1>

        {user?.uid && (
          <form onSubmit={handlePlaceOrder} action="">
            <h3 className="font-bold mb-5 text-lg ml-3">Add review</h3>
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <input
                name="name"
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full "
                readOnly
              />
              <input
                name="email"
                type="text"
                placeholder="Your email"
                defaultValue={user?.email}
                className="input input-bordered w-full "
                readOnly
              />
            </div>
            <input
              name="photoURL"
              type="text"
              placeholder="Your phone"
              defaultValue={user?.photoURL}
              className="input input-bordered w-full "
              readOnly
            />
            <textarea
              name="message"
              className="textarea textarea-bordered h-56 w-full my-8 "
              placeholder="Your reviews"
            ></textarea>
            <input className="btn btn-secondary" type="submit" value="Submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
