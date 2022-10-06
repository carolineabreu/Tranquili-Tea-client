import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../SearchBar/index';

import "../../index.css";

export function Navbar(){

return (
  <div>
  <link rel="shortcut icon" href="../assets/images/favicon/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="../assets/css/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
        {/* header */}
        <header className="py-4 shadow-sm bg-white">
          <div className="container flex items-center justify-between">
            <a href="index.html">
              <img src="../assets/images/logo.svg" alt="Logo" className="w-32" />
            </a>
            <div className="w-full max-w-xl relative flex">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" name="search" id="search" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search" />
              <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                <div className="text-2xl">
                  <i className="fa-regular fa-heart" />
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  8</div>
              </a>
              <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                <div className="text-2xl">
                  <i className="fa-solid fa-bag-shopping" />
                </div>
                <div className="text-xs leading-3">Cart</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2</div>
              </a>
              <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                <div className="text-2xl">
                  <i className="fa-regular fa-user" />
                </div>
                <div className="text-xs leading-3">Account</div>
              </a>
            </div>
          </div>
        </header>
        {/* ./header */}
        {/* navbar */}
        <nav className="bg-gray-800">
          <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
              <span className="text-white">
                <i className="fa-solid fa-bars" />
              </span>
              <span className="capitalize ml-2 text-white">All Categories</span>
              {/* dropdown */}
              <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Bed</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">office</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="../assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 capitalize">
                <a href="../index.html" className="text-gray-200 hover:text-white transition">Home</a>
                <a href="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
                <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
              </div>
              <a href="#" className="text-gray-200 hover:text-white transition">Login/Register</a>
            </div>
          </div>
        </nav>
        </div>
      
    );
  }
;

