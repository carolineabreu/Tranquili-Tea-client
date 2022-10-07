import { createContext, useState } from "react";

const CarrinhoContext = createContext([]);

function CarrinhoComponent(props) {
  const [tea, setTea] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ tea, setTea }}>
      {props.children}
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoContext, CarrinhoComponent };
