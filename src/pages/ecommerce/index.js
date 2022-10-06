import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Teas() {
  const [teas, setTeas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTeas() {
      try {
        const response = await api.get("/tea/all");

        setTeas([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTeas();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    window.location.reload(true);
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            SHOP
          </h2>
          <Link to="/cart">
            <button class="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300">
              Cart Icon
            </button>
          </Link>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {teas.map((currentTea) => {
              return (
                <div key={currentTea.id} className="group relative">
                  {" "}
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={currentTea.image}
                      alt={currentTea.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <a href={currentTea.href}>
                      {" "}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {currentTea.name}{" "}
                    </a>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {currentTea.price} per 100 grams
                  </p>
                  <></>
                  <button
                    class="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300 mr-2.5"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Add to Cart{" "}
                  </button>
                  <Link to="/TeaPage/:id">
                    <button class="rounded-lg px-4 py-2 bg-purple-300 hover:bg-purple-400 duration-300">
                      {" "}
                      View{" "}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
