import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho.js";
import { useState, useEffect } from "react";
import { api } from "../../../../api/api.js";
import { Link } from "react-router-dom";

export function Card(props) {
  const navigate = useNavigate();
  const [tea, setTea] = useState([]);

  const carrinho = useContext(CarrinhoContext);

  console.log(carrinho.tea);

  function handleCarrinho() {
    carrinho.setTea([...carrinho.tea, { ...props }]);
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
      {tea.map((currentTea) => {
        console.log(currentTea);
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
  );
}
