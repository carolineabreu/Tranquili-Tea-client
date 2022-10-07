import { useState } from "react";
import { api } from "../../../../api/api.js";

export function HandleCart() {
  const [cart, setCart] = useState([]);

  async function fetchCart() {
    try {
      const response = await api.post(`/cart`);
      setCart(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={HandleCart}>Adicionar ao carrinho</button>
    </div>
  );
}
