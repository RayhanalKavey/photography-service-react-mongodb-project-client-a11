import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

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
        element: <Services></Services>,
      },
    ],
  },
]);
export default router;
