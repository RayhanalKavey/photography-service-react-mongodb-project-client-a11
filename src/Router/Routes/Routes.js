import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Login from "../../Pages/Authentication/Login/Login";
import Signup from "../../Pages/Authentication/Signup/Signup";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch(`${process.env.REACT_APP_Server_url}/servicesHome`),
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch(`${process.env.REACT_APP_Server_url}/services`),
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/serviceDetails/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_Server_url}/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewsByCategory",
        element: <Reviews></Reviews>,
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_Server_url}/reviews/${params.id}`),
      },
    ],
  },
]);
export default router;
