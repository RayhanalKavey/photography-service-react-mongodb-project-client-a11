import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Signup from "../../Pages/Authentication/Signup/Signup";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () =>
          fetch("https://service-assignment-11-server.vercel.app/services"),
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
