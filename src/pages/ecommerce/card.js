import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./cartContext.js";

export function Card(props) {
  const navigate = useNavigate(cartContext);

  const cart = useContext();

  console.log(cart.tea);

  function handleCart() {
    cart.setTea([...cart.tea, { ...props }]);
  }

  return (
    <div>
      <h1>{props.teaName}</h1>
      <img
        src={props.teaImg}
        alt="Tea"
        style={{ width: "150px", height: "150px" }}
      />
      <p>{props.teaDescription}</p>
      <button onClick={handleCart}>Add to Cart</button>
      <button
        onClick={() => {
          navigate(`/${props.teaId}`);
        }}
      >
        View
      </button>
      <p>{props.teaPrice}</p>
    </div>
  );
}
