import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import "./App.css";
import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return (
    <div className="text-secondary custom-home-back">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
// className = "max-w-screen-xl	mx-auto";
