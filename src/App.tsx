import "./App.css";

function App() {
  return (
    <div className="border-2 border-white h-svh flex flex-row items-center justify-center relative">
      <div className="w-40 h-40 bg-blue-700 rounded-full inline-block absolute z-40 top-30"></div>
      <div className="w-40 h-40 bg-red-700 inline-block absolute z-30 top-90">
        <div className="absolute top-0 w-full text-center">Hello</div>
      </div>
      <div className="w-40 h-40 bg-green-700 rounded-full inline-block z-50"></div>
    </div>
  );
}

export default App;

