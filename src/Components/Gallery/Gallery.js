import React from "react";
import img1 from "../../assets/images/gallery/wedding-photography.jpg";
import img2 from "../../assets/images/gallery/food-photography.jpg";
import img3 from "../../assets/images/gallery/potrait-photography.jpg";
import img4 from "../../assets/images/gallery/wedding-photography.jpg";
import img5 from "../../assets/images/gallery/food-photography.jpg";
import img6 from "../../assets/images/gallery/potrait-photography.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 className=" text-5xl mb-12 m8-8 text-center">Gallery</h1>

      {/* // left */}

      <div className=" grid grid-cols-3 border-3 border-gray-900">
        {/* // right */}
        <div>
          <img
            className="h-50  border-solid border-primary border-2"
            src={img3}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img4}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-50 border-solid border-primary border-2"
            src={img3}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img4}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-50 border-solid border-primary border-2"
            src={img5}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img5}
            alt=""
          />
          <img
            className="h-50 border-solid border-primary border-2"
            src={img6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
