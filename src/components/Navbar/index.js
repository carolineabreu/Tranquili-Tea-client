import { useLocation, Link } from "react-router-dom";
import logo from "../images/Low Resolution Logo - Transparent Background-2.png";
import { useState, useEffect } from "react";
import "../../index.css";

const withoutNavbarRoutes = ["/tea-room/new-post", "/tea-room/post/:id", "/tea-room/profile", "/tea-room"];

export function Navbar() {
  const { pathname } = useLocation();
 const [click, setClick] = useState(false);
 const [button, setButton]= useState(true);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  }else {
    setButton(true);
  }
  };
  useEffect(() => {
    showButton ( );
  }, []);

  if (withoutNavbarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <div className="bg-white sm:px-6  md:px-8 lg:px-8">
      <header className="lex flex-wrap items-center justify-between w-full py-3 md:py-0 px-4 text-lg text-gray-700">
        <div className="container flex items-center justify-between">
          <Link to="/">
          <img className = "items-center h-20 w-80  sm:flex-shrink-0 mr-8" src={logo} alt="Logo" />
          </Link>
          <div className="w-full pl-20 max-auto relative flex">
            <input
              type="text" 
              name="search"
              id="search"
              className="w-50 h-8 hidden md:block flex-shrink flex-grow-14 justify-start px-2 border border-blue border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="search"
            />
            <button className="bg-blue-200 hidden sm:shrink md:block border border-blue200 text-black px-4 rounded-r-md hover:bg-transparent hover:text-primary transition">
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
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-blue-200 text-black text-xs">
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
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-blue-200 text-blue text-xs">
                2
              </div>
            </Link>
            <Link
              to="/profile"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-4xl pl-2">
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

      <nav className="bg-blue-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  {/* Website Logo */}
                  <Link to="productlist" className="flex items-center py-4 px-2">
                    <span className="font-extrabold text-black text-lg">Tea Selection</span>
                  </Link>
                </div>
                {/* Primary Navbar items */}
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/" className="py-1 px-2 text-gray-700 hover:border-b-4 transition-transform border-blue-500 font-semibold ">Home</Link>
                  <Link to="tea-room" className="py-1 px-2 text-gray-700 hover:border-b-4 transition-transform border-blue-500 font-semibold ">Tea Room</Link>
                  <Link to="/ourteam" className="py-1 px-2 text-gray-700 hover:border-b-4 transition-transform border-blue-500 font-semibold ">Our Team</Link>
                  <Link to="/contact-us" className="py-1 px-2 text-gray-700 hover:border-b-4 transition-transform border-blue-500 font-semibold ">Contact Us</Link>
                </div>
              </div>
              {/* Secondary Navbar items */}
              <div className="hidden md:flex items-center space-x-3 ">
                <Link to="/login" className="py-2 px-2 font-medium text-gray-700 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="/sign-up" className="py-2 px-2 font-medium text-white bg-green-700 rounded hover:bg-green-300 transition duration-300">Sign Up</Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center onClick=">
                <button className="outline-none mobile-menu-button">
                  <svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 " x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <div className="hidden mobile-menu onClick=">
            <ul className>
              <li className="active"><Link to="/" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</Link></li>
              <li><Link to="tea-room" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Tea Room</Link></li>
              <li><Link to="ourteam" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Our Team</Link></li>
              <li><Link to="contact-us" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
