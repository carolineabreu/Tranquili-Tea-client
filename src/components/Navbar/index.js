import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../SearchBar/index";

import "../../index.css";

export function Navbar() {
  return (
    <div>
      <link
        rel="shortcut icon"
        href="../assets/images/favicon/favicon.ico"
        type="image/x-icon"
      />
      <link rel="stylesheet" href="../assets/css/main.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
      />
      {/* header */}
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <a href="index.html">
            <img src="https://img.icons8.com/carbon-copy/100/000000/tea-bag.png"/>
          </a>
          <a href="index.html">

         <p className="bg-purple-100 h-10  w-20 font-mono">Tranquili_Tea</p>
          </a>
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full  h-10 border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="search"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </a>
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                2
              </div>
            </a>
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>
      {/* ./header */}
      {/* navbar */}
      <nav className="bg-blue-200">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-black">
              <i className="fa-solid fa-bars" />
            </span>
            <span className="capitalize ml-2 text-black">All Teas</span>
            {/* dropdown */}
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/sofa.svg"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/terrace.svg"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/bed.svg"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/office.svg"
                  alt="office"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">office</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/outdoor-cafe.svg"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="../assets/images/icons/bed-2.svg"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <a
                href="../index.html"
                className="text-black hover:text-white transition"
              >
                Home
              </a>
              <a
                href="pages/shop.html"
                className="text-black hover:text-white transition"
              >
                Tea Room
              </a>
              <a href="#" className="text-black hover:text-white transition">
                About us
              </a>
              <a href="#" className="text-black hover:text-white transition">
                Contact us
              </a>
            </div>
            <a href="#" className="text-black hover:text-white transition">
              Login/Register
            </a>
          </div>
        </div>
      </nav>
      {/* ./navbar */}
    </div>
  );
}
