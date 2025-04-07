import "./App.css";
import { useRef } from "react";
import Dialog from "./components/Dialog";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="border-2 border-white h-svh flex flex-col items-center justify-center relative gap-4 p-4 text-white">
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        // onClick={() => document.getElementById("myDialog").showModal()}
        onClick={() => dialogRef.current?.showModal()}
      >
        Open Dialog
      </button>

      <input type="file" className="file:bg-blue-700 file:text-white file:rounded file:px-4 file:py-2 hover:file:bg-amber-400" />


      <Dialog  dialogRef={dialogRef} />
    </div>
  );
}

export default App;

