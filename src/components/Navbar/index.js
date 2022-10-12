import { useLocation, Link } from "react-router-dom";
import logo from "../images/Low Resolution Logo - Transparent Background.png";

import "../../index.css";

const withoutNavbarRoutes = ["/tea-room/new-post", "/tea-room/post/:id", "/tea-room/profile", "/tea-room"];

export function Navbar() {
  const { pathname } = useLocation();

  if (withoutNavbarRoutes.some((item) => pathname.includes(item))) return null;


  return (
    <div>
      <header className="py-4 shadow- sm:px-6 lg:px-8 bg-white">
        <div className="container flex items-center justify-between">
          <Link to="/">
          <img className = "w-56 rounded-md hover:bg-green-700" src={logo} alt="Logo" />
          </Link>
          <div className="w-full pl-20 max-w-xl relative flex">
            <input
              type="text"
              name="search"
              id="search"
              className="w-80  h-10 border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="search"
            />
            <button className="bg-primary border border-primary text-white px-4 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </Link>
            <Link
              to="/carrinho"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                2
              </div>
            </Link>
            <Link
              to="/profile"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-4xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3 ">Account</div>
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-blue-200 sm:px-6 lg:px-8"> 
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-black">
              <i className="fa-solid fa-bars" />
            </span>
            <Link to="/productlist">
              <span className="capitalize ml-2 text-black">Tea Selection</span>
            </Link>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/sofa.svg"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Stress</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/terrace.svg"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Energy</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/bed.svg"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mood-Booster</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/office.svg"
                  alt="office"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Anxiety</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/outdoor-cafe.svg"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Restless</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/bed-2.svg"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Focus</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-black  hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/tea-room"
                className="text-black hover:text-white transition"
              >
                Tea Room
              </Link>
              <Link to="/ourteam" className="text-black hover:text-white transition">
                Our Team
              </Link>
              <Link to="/" className="text-black hover:text-white transition">
                Contact us
              </Link>
            </div>
            <Link to="/login" className="text-black hover:text-white transition">
              Login/Register
            </Link>
          </div>
        </div>
      </nav>

    </div>
  );
}
