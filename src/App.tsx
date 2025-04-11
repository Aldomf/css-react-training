import "./App.css";
import { useRef } from "react";
import Dialog from "./components/Dialog";
import NavBar from "./components/NavBar";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className=" text-white">
      <NavBar />
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        // onClick={() => document.getElementById("myDialog").showModal()}
        onClick={() => dialogRef.current?.showModal()}
      >
        Open Dialog
      </button>

      <img src="https://picsum.photos/200/300" className="opacity-50 hover:opacity-100" />
      <input type="file" className="file:bg-blue-700 file:text-white file:rounded file:px-4 file:py-2 hover:file:bg-amber-400" />
      <input type="text" className="bg-gray-400 text-white rounded px-4 py-2 placeholder:text-fuchsia-800" placeholder="Type something" />


      <Dialog  dialogRef={dialogRef} />
      <div className="group">
        Hover me
        <div className="hidden group-hover:block bg-red-500 text-white">
          I show up when you hover the parent!
        </div>
      </div>
    </div>
  );
}

export default App;

