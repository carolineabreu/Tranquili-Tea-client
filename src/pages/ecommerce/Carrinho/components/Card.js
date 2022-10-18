import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../../api/api.js";
import { HandleCart } from "../pages/handleCarrinho.js";

export function Card() {
  const [allTea, setAllTea] = useState([]);
  const carrinho = useContext(CarrinhoContext);
  const [tea, setTea] = useState({});

  function handleCarrinho(tea) {
    console.log(carrinho);
    console.log(tea);
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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" font-mono content-center items-center text-4xl flex justify-center mb-16 mt-3  tracking-tight text-gray-900">
          TEA SELECTION
        </h2>
          <div>
            <div className="mt-6 bg-white grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {allTea.map((currentTea) => {
                return (
                  <div key={currentTea._id}>
                    <div className="tracking-tight text-gray-800 text-3xl mt-5 mb-6 font-mono font-400 flex justify-center">
                      {" "}
                      <span aria-hidden="true" className=" inset-0" />
                      {currentTea.name}{" "}
                    </div>{" "}
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-60 lg:aspect-none lg:h-80">
                      <img
                        src={currentTea.image}
                        alt="Tea"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <p className="text-xl font-medium font-mono font-style: italic text-gray-900 mt-4 mb-3">
                      US$ {currentTea.price} per 100 grams
                    </p>
                    <button
                      onClick={() => handleCarrinho(currentTea)}
                      className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300 mr-2.5"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/teaDetail/${currentTea._id}`}
                      type="button"
                      className="rounded-lg px-4 py-2 bg-purple-300 hover:bg-purple-400 duration-300"
                    >
                      <button>View </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        
      </div>
    </div>
  );
}
