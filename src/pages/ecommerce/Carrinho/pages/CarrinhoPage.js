import { useContext } from "react";
import { CarrinhoContext } from "../carrinho.js";

export function CarrinhoPage() {
  const carrinho = useContext(CarrinhoContext);

  return (
    <>
      {carrinho.tea.map((currentTea) => {
        return <h1>{currentTea.name}</h1>;
      })}
    </>
  );
}
