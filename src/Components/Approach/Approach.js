import React from "react";
import img from "../../assets/images/gallery/wedding-photography.jpg";
const Approach = () => {
  return (
    <div className="hero min-h-screen bg-slate-50 mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold mb-8">Our Approach</h1>
          <p className="font-bold text-lg mb-2">Curiosity</p>
          <p className="pb-4">
            For teams, greater curiosity can increase efficiency and
            productivity, reduce group conflict and decision-making errors, and
            we are curious about you.
          </p>
          <hr className=" border-solid border-3 border-primary " />

          <p className="font-bold text-lg mb-2">Quality</p>
          <p className="pb-4">
            High performance, meets expectations. You have to come again because
            of right product, right time, done right.
          </p>
          <hr className=" border-solid border-3 border-primary " />
          <p className="font-bold text-lg mb-2 ">Collaboration</p>
          <p className="pb-4">
            You will have a good working experience with us, and your projects
            will get higher quality and more relevant support.
          </p>
          <hr className=" border-solid border-3 border-primary " />
        </div>
      </div>
    </div>
  );
};

export default Approach;
