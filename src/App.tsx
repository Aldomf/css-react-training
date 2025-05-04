import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen p-4 gap-6">
      <figure className="w-[200px] h-72 rounded-2xl">
        <div className="rounded-2xl h-full w-full bg-[url('https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-contain"></div>
        <figcaption className="">
          <p>
            <a href="https://unsplash.com/s/photos/lights?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </figcaption>
      </figure>
      <figure className="w-[200px] h-72 rounded-2xl relative transition-all duration-500 ease-in transform-3d perspective-normal rotate-y-[0deg]">
        <img
          src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-2xl h-full w-full transition-all duration-500 ease-in backface-hidden"
        ></img>
        <figcaption className="absolute top-0 p-4 transition-all duration-500 ease-in perspective-normal rotate-y-[180deg] backface-hidden overflow-auto">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <hr className="w-full border-t-2 border-gray-200" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            facere.
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;

