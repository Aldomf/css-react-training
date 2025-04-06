import "./App.css";

function App() {
  return (
    <div className="border-2 border-white h-svh flex flex-col items-center justify-center relative gap-4 p-4 text-white">
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={() => document.getElementById("myDialog").showModal()}
      >
        Open Dialog
      </button>

      <dialog
        id="myDialog"
        className="p-8 rounded-lg text-black backdrop:bg-black/60 backdrop:backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-white"
      >
        <p className="text-lg font-bold">This is a dialog!</p>
        <form
          method="dialog"
          className="flex flex-col justify-center items-center"
        >
          <button className="mt-4 bg-red-500 px-3 py-1 text-white rounded">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default App;

