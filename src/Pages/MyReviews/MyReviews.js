import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  // query data from the data base using email of the logged in user
  useEffect(() => {
    fetch(
      `https://service-assignment-11-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("photo-bizz-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data.data));
  }, [user?.email]);

  // send delete request to the data base and update UI with the response
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete your valuable review?"
    );
    if (proceed) {
      fetch(`https://service-assignment-11-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // setMyReviews(data.data);
            toast.success(data.message);
            const remaining = myReviews.filter((review) => review._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  return (
    // overflow-x-auto
    <table className="table w-full  mx-auto">
      {/* <!-- head --> */}
      <thead className=" justify-items-center">
        <tr>
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

        {myReviews.length ? (
          myReviews?.map((myReview) => (
            <MyReview
              key={myReview._id}
              myReview={myReview}
              handleDelete={handleDelete}
            ></MyReview>
          ))
        ) : (
          <tr className="text-end">
            <td>
              You have not made a review yet. Visit our{" "}
              <Link
                className="font-bold italic underline underline-offset-2	"
                to={"/services"}
              >
                services
              </Link>
              .{" "}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MyReviews;
