import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5005/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user?.email]);
  console.log(reviews);
  return <div>This is my reviews</div>;
};

export default MyReviews;
