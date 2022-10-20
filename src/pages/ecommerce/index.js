// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { api } from "../../api/api";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { CarrinhoContext } from "./Carrinho/carrinho.js";

// export function Teas(props) {
//   const [tea, setTea] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const carrinho = useContext(CarrinhoContext);

//   useEffect(() => {
//     async function fetchTea() {
//       try {
//         const response = await api.get("/tea/all");

//         setTea([...response.data]);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchTea();
//   }, []);

//   function handleCarrinho() {
//     carrinho.setTea([...carrinho.tea, { ...props }]);
//   }
//   return (
//     <>
    {/* <section>
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:sticky lg:top-4">
              <details open className="overflow-hidden rounded border border-gray-200">
                <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                  <span className="text-sm font-medium"> Toggle Filters </span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <form className="border-t border-gray-200 lg:border-t-0">
                  <fieldset>
                    <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                      Type
                    </legend>
                    <div className="space-y-2 px-5 py-6">
                      <div className="flex items-center">
                        <input id="toy" type="checkbox" name="type[toy]" className="h-5 w-5 rounded border-gray-300" />
                        <label htmlFor="toy" className="ml-3 text-sm font-medium">
                          Toy
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="game" type="checkbox" name="type[game]" className="h-5 w-5 rounded border-gray-300" />
                        <label htmlFor="game" className="ml-3 text-sm font-medium">
                          Game
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="outdoor" type="checkbox" name="type[outdoor]" className="h-5 w-5 rounded border-gray-300" />
                        <label htmlFor="outdoor" className="ml-3 text-sm font-medium">
                          Outdoor
                        </label>
                      </div>
                      <div className="pt-2">
                        <button type="button" className="text-xs text-gray-500 underline">
                          Reset Type
                        </button>
                      </div>
                    </div>
                  </fieldset>
                  <div>
                    <fieldset>
                      <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                        Age
                      </legend>
                      <div className="space-y-2 px-5 py-6">
                        <div className="flex items-center">
                          <input id="3+" type="checkbox" name="age[3+]" className="h-5 w-5 rounded border-gray-300" />
                          <label htmlFor="3+" className="ml-3 text-sm font-medium">
                            3+
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="8+" type="checkbox" name="age[8+]" className="h-5 w-5 rounded border-gray-300" />
                          <label htmlFor="8+" className="ml-3 text-sm font-medium">
                            8+
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="12+" type="checkbox" name="age[12+]" className="h-5 w-5 rounded border-gray-300" />
                          <label htmlFor="12+" className="ml-3 text-sm font-medium">
                            12+
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="16+" type="checkbox" name="age[16+]" className="h-5 w-5 rounded border-gray-300" />
                          <label htmlFor="16+" className="ml-3 text-sm font-medium">
                            16+
                          </label>
                        </div>
                        <div className="pt-2">
                          <button type="button" className="text-xs text-gray-500 underline">
                            Reset Age
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                    <button name="reset" type="button" className="rounded text-xs font-medium text-gray-600 underline">
                      Reset All
                    </button>
                    <button name="commit" type="button" className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white">
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <span className="hidden sm:inline"> Showing </span>
                  6 of 24 Products
                </p>
                <div className="ml-4">
                  <label htmlFor="SortBy" className="sr-only"> Sort </label>
                  <select id="SortBy" name="sort_by" className="rounded border-gray-100 text-sm">
                    <option readOnly>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
                <a href="#" className="relative block bg-white">
                  <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
                    <span className="sr-only">Wishlist</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <img alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-56 w-full object-contain lg:h-72" />
                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                      New
                    </span>
                    <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">$14.99</p>
                    <button type="button" className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4">
                      <span className="text-sm font-medium"> Add to Cart </span>
                      <svg className="ml-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className=" font-mono content-center items-center text-5xl flex justify-center mb-16 mt-3 font-bold tracking-tight text-gray-900">
            TEA SELECTION
          </h2>
          <Link to="/CartPage">
            <button
              type="button"
              className=" top-5 left-0 h-30 w-15 text-white bg-stone-700 hover:bg-stone-900 flex justify-end focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Buy now
            </button>
          </Link>
          <div className="mt-6 bg-white grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {tea.map((currentTea) => {
              return (
                <div key={currentTea.id} className="">
                  <div className="text-3xl mt-5 mb-6 font-mono font-400 flex justify-center">
                    {" "}
                    <span aria-hidden="true" className=" inset-0" />
                    {currentTea.name}{" "}
                  </div>{" "}
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-60 lg:aspect-none lg:h-80">
                    <img
                      src={currentTea.image}
                      alt={currentTea.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <p className="text-xl font-medium font-mono font-style: italic text-gray-900 mt-4 mb-3">
                    US$ {currentTea.price} per 100 grams
                  </p>
                  <></>
                  <button
                    onClick={handleCarrinho}
                    className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300 mr-2.5"
                  >
                    {" "}
                    Add to Cart{" "}
                  </button>
                  <Link to={`/teaDetail/${currentTea._id}`}>
                    <button
                      type="button"
                      className="rounded-lg px-4 py-2 bg-purple-300 hover:bg-purple-400 duration-300"
                    >
                      {" "}
                      View{" "}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
//     </>
//   );
// }
