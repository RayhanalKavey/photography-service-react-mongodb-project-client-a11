import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data.data));
  }, [user?.email]);

  return (
    // overflow-x-auto
    <table className="table w-full  mx-auto">
      {/* <!-- head --> */}
      <thead className=" justify-items-center">
        <tr>
          {/* <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th> */}
          <th>
            <div className="flex items-center">
              <div>
                <img className="w-10 rounded-sm" src={user?.photoURL} alt="" />
              </div>
              <div className="badge badge-ghost badge-sm">
                {user?.displayName}'s review
              </div>
            </div>
          </th>
          <th>Service Category</th>

          <th>Modify</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row  --> */}

        {myReviews?.map((myReview) => (
          <MyReview key={myReview._id} myReview={myReview}></MyReview>
        ))}
      </tbody>
    </table>
  );
};

export default MyReviews;
