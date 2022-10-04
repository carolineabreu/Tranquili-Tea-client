import { useState } from "react";
import { api } from "../../api/api";
import { Cart } from "./App.js";
import { SearchBar } from "./searchBar.js";

export function Teas() {
  const [Teas, setTeas] = useState([]);

  useEffect(() => {
    async function fetchTeas() {
      try {
        const response = await axios.get("https://ironrest.herokuapp.com/...");

        setTeas([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTeas();
  }, []);

  function addToCart(e) {
    e.preventDefault();
    window.location.reload(true);
  }

  return (
    <>
      <div className="Ecommerce">
        <h1 id="Shop"> Shop </h1>
        <SearchBar />
        <div className="flex">
          <div className="flex-item">
            {Teas.map((currentTea) => {
              return (
                <div className="TeaEcommerce">
                  <>
                    <Link to={`/${currentTea._id}`}>
                      <img
                        src={currentTea.image}
                        alt={currentTea.name}
                        id="currentTea.image"
                      />
                      <h1>{currentTea.name}</h1>
                    </Link>
                  </>
                  <button id="btn" onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div id="Cart">
            {" "}
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}
