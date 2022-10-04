import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Payment } from "./payment.js";

export function Cart() {
  const [cart, setCart] = useState(0);
  // const [token] = { token };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/cart",
      { cart }
      // {headers: { Authorization: token },}
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Are you sure?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const transaction = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      "/api/payment"
      // { cart, paymentID, address } { headers: { Authorization: token },}
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <div>
      {cart.map((Tea) => (
        <div className="detailCart" key={Tea._id}>
          <img src={Tea.images.url} alt="" />

          <div className="box-detail">
            <h2>{Tea.title}</h2>

            <h3>$ {Tea.price * Tea.quantity}</h3>
            <p>{Tea.description}</p>
            <p>{Tea.content}</p>

            <div className="amount">
              <button onClick={() => decrement(Tea._id)}> - </button>
              <span>{Tea.quantity}</span>
              <button onClick={() => increment(Tea._id)}> + </button>
            </div>

            <div className="delete" onClick={() => removeProduct(Tea._id)}>
              delete
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <h3>Total: $ {total}</h3>
        <button total={total} onSubmit={Payment} button />
      </div>
    </div>
  );
}
