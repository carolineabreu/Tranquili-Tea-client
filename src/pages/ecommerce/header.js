import { useContext } from "react";
import { cartContext } from "./cartContext.js";
import { useNavigate } from "react-router-dom";

export function Header() {
  const cart = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div>
      <strong>{`${cart.tea.length} itens itens in the cart`}</strong>
      <button
        onClick={() => {
          navigate("/carrinho");
        }}
      >
        Check Cart
      </button>
    </div>
  );
}
