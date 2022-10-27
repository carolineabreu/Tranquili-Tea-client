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
              <label htmlFor="card" className="text-gray-600 mb-2 block">
                Card Number
              </label>
              <input
                type="text"
                inputMode="numeric"
                onSubmit={handleChange}
                name="card"
                id="card"
                maxLength={16}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div>
              <label htmlFor="date" className="text-gray-600 mb-2 block">
                Expiration Date
              </label>
              <input
                id="date"
                type="text"
                inputMode="numeric"
                name="date"
                placeholder="Month/Year"
                required
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                pattern="[0-9/[0-9]{4}]{2}"
              />
            </div>
            <div>
              <label
                htmlFor="securityCode"
                className="text-gray-600 mb-2 block"
              >
                Security Code
              </label>
              <input
                type="tel"
                maxLength={3}
                onSubmit={handleChange}
                name="securityCode"
                id="securityCode"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="***"
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
