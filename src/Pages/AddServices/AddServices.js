import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form?.title.value;
    const price = form?.price.value;
    const img = form?.photoURL.value;
    const description = form?.serviceDescription?.value;

    const service = { title, price, img, description };

    //Sending review data to the server with post (part of create method)
    fetch("https://service-assignment-11-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          form.reset();
        }
      })
      .catch((err) => {
        toast.error(err.error);
      });
  };

  return (
    <form className="mx-10 my-20" onSubmit={handleAddService} action="">
      <h3 className="font-bold my-5 text-lg ml-3">Add Service</h3>
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* title */}
        <input
          name="title"
          type="text"
          placeholder="Service name"
          className="input input-bordered w-full "
          required
        />
        {/* price */}
        <input
          name="price"
          type="text"
          placeholder="Price of the service"
          className="input input-bordered w-full "
          required
        />
      </div>
      {/* img */}
      <input
        name="photoURL"
        type="text"
        placeholder="Image link"
        className="input input-bordered w-full "
        required
      />
      <textarea
        name="serviceDescription"
        className="textarea textarea-bordered h-56 w-full my-8 "
        placeholder="Service description"
        required
      ></textarea>
      <input className="btn btn-secondary" type="submit" value="Submit" />
    </form>
  );
};

export default AddServices;
