import { useState } from "react";
import React from "react";
import "../../index.css";

export function Payment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    zip: "",
    card: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSumit(e) {
    e.preventDefault();
    window.onload = "/orderHistory";
  }
  return (
    <div className="leading-loose">
      <form
        className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
        onSubmit={handleSumit}
      >
        <p className="text-gray-800 font-big">Checkout </p>

        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Name
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm text-gray-600" for="cus_email">
            Email
          </label>
          <input
            className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Address
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="City"
            aria-label="Email"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label className="hidden block text-sm text-gray-600" for="cus_email">
            Zip
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Email"
            value={form.zip}
            onChange={handleChange}
          />
        </div>

        <p className="mt-4 text-gray-800 font-medium">Payment info</p>

        <div className="">
          <label className="block text-sm text-gray-600" for="cus_name">
            Card
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="number"
            required=""
            placeholder="Card Number MM/YY CVC"
            aria-label="Name"
            value={form.card}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}
