import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../../api/api.js";
import { HandleCart } from "../pages/handleCarrinho.js";

export function Card() {
  const [tea, setTea] = useState([]);

  const carrinho = useContext(CarrinhoContext);

  console.log(carrinho);
  console.log(tea);

  function handleCarrinho() {
    carrinho.setTea([...carrinho.tea, tea]);
    HandleCart();
  }

  useEffect(() => {
    async function fetchTea() {
      try {
        const response = await api.get(`/tea/all`);
        setTea(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTea();
  }, []);

  return (
    <div>
      <Link to="/carrinho">
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
      <div>
        {tea.map((currentTea) => {
          return (
            <div key={currentTea.id}>
              <h1>{currentTea.name}</h1>
              <p>{currentTea.price}</p>
              <button onClick={handleCarrinho}>Adicionar ao carrinho</button>
              <Link to={`/teaDetail/${currentTea._id}`}>
                <button>Ver produto</button>
              </Link>
              <div>
                <img
                  src={currentTea.image}
                  alt="Tea"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
