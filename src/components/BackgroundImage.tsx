
function BackgroundImage() {
  return (
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
  )
}

export default BackgroundImage