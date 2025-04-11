function NavBar() {
  return (
    <ul className="w-full border-2 border-white overflow-hidden px-5 ulClass">
      <li className="">
        <a href="/">Home</a>
      </li>
      <li className="">
        <a href="/about">About</a>
      </li>
      <li className="">
        {" "}
        <div className="group relative">
          Contact
          <ul className="border-2 border-red-500 overflow-auto w-40 hidden group-hover:block">
            <li>
              <a href="/contact1">Contact1</a>
            </li>
            <li>
              <a href="/contact2">Contact2</a>
            </li>
            <li>
              <a href="/contact3">Contact3</a>
            </li>
          </ul>
        </div>
      </li>
      <li className="">
        {" "}
        <a href="/blog">Blog</a>
      </li>
      <li className="">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="">
        <a href="/login">Login</a>
      </li>
    </ul>
  );
}

export default NavBar;
