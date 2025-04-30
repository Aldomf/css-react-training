import { useState } from "react";
import "./App.css";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-red-500 p-6">
        <div
          className={`card-container transition-all duration-500 ease-in-out ${
            showToast
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="card border-2 border-gray-600 bg-gray-700/20 rounded-lg p-4 mb-4">
            <h1 className="text-white">Event Created</h1>
            <p className="text-gray-300">Monday, January 3rd at 6:00 PM</p>
          </div>
        </div>

        <button
          onClick={() => setShowToast(true)}
          className="mt-4 border-2 border-white p-2 rounded-full w-30 block m-auto hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Add toast
        </button>
      </div>
      <figure>
        <img src="mountains.jpg" alt="A scenic view of mountains" />
        <figcaption>A scenic view of mountains during sunrise.</figcaption>
      </figure>
    </div>
  );
}

export default App;

