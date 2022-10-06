import { useContext } from "react";
import { cartContext } from "./cartContext.js";

export function CartPage() {
  const cart = useContext(cartContext);

  return (
    <>
      {cart.tea.map((currentTea) => {
        <div className="map">
          return <h1>{currentTea.teaName}</h1>
          <div>{currentTea.teaDescription}</div>
        </div>;
      })}
    </>
  );
}
