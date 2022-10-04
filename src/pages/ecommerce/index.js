import { useState } from "react";
import { Cart } from "./cart.js";
import { searchBar } from "./searchBar.js";

export function TeaCard() {
  {
    const [Teas, setTeas] = useState([]);

    useEffect(() => {
      async function fetchTeas() {
        try {
          const response = await axios.get(
            "https://ironrest.herokuapp.com/..."
          );

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
      //callback Cart Function here?
    }

    return (
      <>
        <div className="Ecommerce">
          <h1 id="Shop"> Shop </h1>
          <searchBar />
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
                    <button id="btn" onClick={handleSubmit}>
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
}
