import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
// className = "max-w-screen-xl	mx-auto";
