import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../../Carrinho/carrinho.js";

export function Card(props) {
  const navigate = useNavigate();

  const carrinho = useContext(CarrinhoContext);

  console.log(carrinho.tea);

  function handleCarrinho() {
    carrinho.setTea([...carrinho.tea, { ...props }]);
  }

  return (
    <div>
      <h1>{props.teaName}</h1>
      <p>{props.teaPrice}</p>
      <button onClick={handleCarrinho}>Adicionar ao carrinho</button>
      <button
        onClick={() => {
          navigate(`/${props.teaId}`);
        }}
      >
        Ver produto
      </button>
      <div>
        <img
          src={props.teaImage}
          alt="Tea"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
}
