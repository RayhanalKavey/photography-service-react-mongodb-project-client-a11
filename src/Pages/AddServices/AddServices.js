import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form?.title.value;
    const price = form?.price.value;
    const img = form?.photoURL.value;
    const description = form?.serviceDescription?.value;
    console.log(title);
    console.log(price);
    console.log(img);
    console.log(description);
    const service = { title, price, img, description };
    console.log(service);
  };

  return (
    <form className="mx-10 my-20" onSubmit={handleAddService} action="">
      <h3 className="font-bold my-5 text-lg ml-3">Add Review</h3>
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
