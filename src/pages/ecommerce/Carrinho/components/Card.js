import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../../api/api.js";
//import { HandleCart } from "../pages/handleCarrinho.js";

export function Card() {
  const [allTea, setAllTea] = useState([]);
  const carrinho = useContext(CarrinhoContext);
  // const [tea, setTea] = useState({});

  function handleCart(tea) {
    //console.log(tea);
    carrinho.setTea([...carrinho.tea, { ...tea }]);
    console.log(carrinho);
  }
  useEffect(() => {
    async function fetchTea() {
      try {
        const response = await api.get(`/tea/all`);
        setAllTea(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTea();
  }, []);

  
  return (

    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details
              open
              className="overflow-hidden rounded border border-gray-200"
            >
              <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                <span className="text-sm font-medium"> Toggle Filters </span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <form className="border-t border-gray-200 lg:border-t-0">
                <fieldset>
                  <legend className="block w-full bg-gray-50  font-bold px-5 py-3 text-md">
                    {/* trocar as categorias?*/}
                    Category
                  </legend>
                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Anxiety
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Stress
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Focus
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="game"
                        className="ml-3 text-sm font-medium"
                      >
                        Moodiness
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="outdoor"
                        type="checkbox"
                        name="type[outdoor]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="outdoor"
                        className="ml-3 text-sm font-medium"
                      >
                        Restlessness
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="outdoor" type="checkbox" name="type[outdoor]" className="h-5 w-5 rounded border-gray-300" />
                      <label htmlFor="outdoor" className="ml-3 text-sm font-medium">
                        Tiresome
                      </label>
                    </div>
                    <div className="pt-2">
                      <button type="button" className="text-xs text-gray-700 underline">
                        Reset Type
                      </button>
                    </div>
                  </div>
                </fieldset>
                <div>
                  <fieldset>
                    <legend className="block w-full bg-gray-50 px-5 py-3 text-md font-bold">
                      {/* mudar os types??? */}
                      Type
                    </legend>
                    <div className="space-y-2 px-5 py-6">
                      <div className="flex items-center">
                        <input
                          id="type"
                          type="checkbox"
                          name="type"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="type"
                          className="ml-3 text-sm font-medium"
                        >
                          Caffeine Free
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="caffeine free"
                          type="checkbox"
                          name="caffeine free"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="caffeine"
                          className="ml-3 text-sm font-medium"
                        >
                          Caffeine
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="caffeine"
                          type="checkbox"
                          name="caffeine"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="Black Tea"
                          className="ml-3 text-sm font-medium"
                        >
                          Black Tea
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="green tea" type="checkbox" name="green tea" className="h-5 w-5 rounded border-gray-300" />
                        <label htmlFor="green tea" className="ml-3 text-sm font-medium">
                          Green Tea
                        </label>
                      </div>
                      <div className="pt-2">
                        <button type="button" className="text-xs text-gray-700 underline">
                          Reset Type
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                  <button name="reset" type="button" className="rounded text- font-medium text-gray-700 underline">
                    Reset All
                  </button>
                  <button name="commit" type="button" className="rounded bg-green-500 px-4 py-3 text-xs font-bold text-white">
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline"> Showing </span>6 of 24
                Products
              </p>
              <div className="ml-4">
                <label htmlFor="SortBy" className="sr-only">
                  {" "}
                  Sort{" "}
                </label>
                <select
                  id="SortBy"
                  name="sort_by"
                  className="rounded border-gray-100 text-sm"
                >
                  <option readOnly>Sort</option>
                  <option value="title-asc">Title, A-Z</option>
                  <option value="title-desc">Title, Z-A</option>
                  <option value="price-asc">Price, Low-High</option>
                  <option value="price-desc">Price, High-Low</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                {allTea.map((currentTea) => {
                  return (
                    <div className="relative block bg-white">
                      <button
                        type="button"
                        className="absolute right-4 top-4 rounded-full bg-green-200 p-2 text-blue-600"
                      >
                        {/* criar wishlist?? */}
                        <span className="sr-only">Wishlist</span>

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <img
                        alt={currentTea.id}
                        src={currentTea.image}
                        className="h-56 w-full object-contain lg:h-72"
                      />
                      <div className="p-6">
                        <span className="inline-block bg-slate-200 px-3 py-1 text-xs font-medium">
                          {/* arrumar  */}
                          Caffeine Free
                        </span>
                        {/* está certo??? */}
                        <div key={currentTea._id}></div>
                        <h3 className="mt-4 text-xlg font-medium">
                          {currentTea.name}
                        </h3>
                        <p className="mt-2 text-md font-bold text-gray-600">
                          {currentTea.price}
                        </p>
                        <button
                          onClick={() => handleCart(currentTea)}
                          className="rounded-lg px-2 py-2 bg-blue-200 hover:bg-blue-400 duration-300 mr-2.5"
                        >
                          Add to Cart
                        </button>
                        <Link
                          to={`/teaDetail/${currentTea._id}`}
                          type="button"
                          className="rounded-lg px-4 py-2 bg-green-200 hover:bg-green-400 duration-300 "
                        >
                          <button>View</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
