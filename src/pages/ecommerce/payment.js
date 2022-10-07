import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export function Payment() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    zip: "",
    card: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSumit(e) {
    e.preventDefault();
    window.location.reload(true);
  }

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow-2xl px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-large text-center mb-1">
          Checkout
        </h2>
        <form onSubmit={handleSumit} method="post" autoComplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Name
              </label>
              <input
                type="name"
                onChange={handleChange}
                name="name"
                id="name"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="city" className="text-gray-600 mb-2 block">
                City
              </label>
              <input
                type="city"
                onSubmit={handleChange}
                name="city"
                id="city"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="zip" className="text-gray-600 mb-2 block">
                Zip Code
              </label>
              <input
                type="zip"
                onSubmit={handleChange}
                name="zip"
                id="zip"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Zip Code"
              />
            </div>
            <div>
              <label htmlFor="card" className="text-gray-600 mb-2 block">
                Card
              </label>
              <input
                type="card"
                onSubmit={handleChange}
                name="card"
                id="card"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="XXX XXXX XXX XXX"
              />
            </div>
          </div>
          <div className="mt-4">
            <Link to="/orderDone">
              <button
                type="submit"
                className="relative block w-50 py-2 content-center text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 border rounded uppercase font-roboto font-medium"
              >
                Pay
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
