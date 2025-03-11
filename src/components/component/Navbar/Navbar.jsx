import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-b-green-200">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <a className="font-bold cursor-pointer text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listed-book">Listed Book</NavLink>
            </li>
            <li>
              <NavLink to="/read-to-page">Read To Page</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            <button className="btn btn-success text-white">Sign In</button>
            <button className="btn btn-info text-white ml-4">Sign Up</button>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute right-0 z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listed-book">Listed Book</NavLink>
              </li>
              <li>
                <NavLink to="/read-to-page">Read To Page</NavLink>
              </li>
              <div className="flex gap-2">
                <button className="btn btn-success btn-sm text-white">
                  Sign In
                </button>
                <button className="btn btn-info btn-sm text-white">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
