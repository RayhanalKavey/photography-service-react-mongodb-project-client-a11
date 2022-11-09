import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Signup from "../../Pages/Authentication/Signup/Signup";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5005/servicesHome"),
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5005/services"),
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
          fetch(`http://localhost:5005/services/${params.id}`),
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
        path: "/reviewsByCategory",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);
export default router;
