import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen p-4 gap-6">
      <div className="group perspective-[1000px]">
        <a href="">
          <figure className="w-[200px] h-72 rounded-2xl relative transition-all duration-500 ease-in transform-3d group-hover:rotate-y-180">
            <img
              src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-2xl h-full w-full transition-all duration-500 ease-in"
            ></img>
            <figcaption className="absolute top-0 p-4 transition-all duration-500 ease-in perspective-normal rotate-y-[180deg] backface-hidden overflow-auto">
              <h2 className="text-2xl">Lorem ipsum dolor sit amet.</h2>
              <hr className="w-full border-t-2 border-gray-200 my-4" />
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, facere.
              </p>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}

export default App;

