function NavBar() {
  return (
    <ul className="w-full border-2 border-white overflow-hidden">
      <li className="">
        <a href="/">Home</a>
      </li>
      <li className="">
        <a href="/about">About</a>
      </li>
      <li className="">
        {" "}
        <a href="/contact">Contact</a>
      </li>
      <li className="">
        {" "}
        <a href="/blog">Blog</a>
      </li>
      <li className="">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="float-right border-2 w-fit border-white">
        <a href="/login">Login</a>
      </li>
    </ul>
  );
}

export default NavBar;
