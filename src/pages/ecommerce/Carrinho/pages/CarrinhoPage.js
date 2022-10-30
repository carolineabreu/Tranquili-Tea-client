import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CarrinhoPage() {
  const carrinho = useContext(CarrinhoContext);

  const [form, setForm] = useState({
    quantity: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="ml-40 mt-10">
        <div className="row float: right">
          <Link to="/productList">
            <button className="relative mb-5 block w-25 py-2 content-center text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 border rounded uppercase font-roboto font-medium">
              Continue Shopping
            </button>
          </Link>
          {carrinho.tea.map((currentTea) => {
            return (
              <div class="w-auto mr-8 rounded focus:border-blue-400 overflow-hidden shadow-md mb-5">
                <img
                  class="object-center object-cover"
                  src={currentTea.image}
                  alt="Tea"
                  style={{ width: "350px", height: "350px" }}
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{currentTea.name}</div>
                  <p class="text-gray-700 text-base">
                    US$ {currentTea.price} per 100 grams
                    <input
                      onChange={handleChange}
                      type="number"
                      min="1"
                      id="price"
                      class="bg-gray-50 my-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    ></input>
                  </p>
                  <p>Subtotal: {currentTea.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/payment">
          <button
            type="submit"
            button
            className="relative mb-5 block w-25 py-2 content-center text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 border rounded uppercase font-roboto font-medium"
          >
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}
