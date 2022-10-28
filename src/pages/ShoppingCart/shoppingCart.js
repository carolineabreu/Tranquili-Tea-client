import { createContext, useState } from "react";


const ShoppingContext = createContext([]);

function ShoppingComponent(props) {
  const [tea, setTea] = useState([]);

  return (
    <ShoppingContext.Provider value={{ tea, setTea }}>
      {props.children}
    </ShoppingContext.Provider>
  );
}

export { ShoppingContext, ShoppingComponent };
