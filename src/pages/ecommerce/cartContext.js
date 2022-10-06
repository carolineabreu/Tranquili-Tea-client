import { createContext } from "react";
import { useState } from "react";

const cartContext = createContext([]);

function CartComponent(props) {
  const [tea, setTea] = useState([]);

  return (
    <cartContext.Provider value={{ tea, setTea }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartComponent };
