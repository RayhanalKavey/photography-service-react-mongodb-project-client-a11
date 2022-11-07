import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div>
      <h2 className="text-xl font-bold">This is the project -11</h2>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>

      <Toaster />
    </div>
  );
}

export default App;
