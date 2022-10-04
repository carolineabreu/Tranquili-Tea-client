import { useState } from "react";

export function payment() {
  const [form, setForm] = useState({
    address: "",
    zipCode: "",
    discountCoupon: "",
    cardNumber: "",
    cardCvc: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSumit(e) {
    e.preventDefault();
    window.onload = "/orderHistory";
  }
}

return (
  <>
    <form onSubmit={handleSumit}>
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
      />
      <label>Zip Code</label>
      <input
        type="text"
        name="zipCode"
        value={form.zipCode}
        onChange={handleChange}
      />
      <label>Discount Coupon</label>
      <input
        type="text"
        name="discountCoupon"
        value={form.discountCoupon}
        onChange={handleChange}
      />
      <label>Card Number</label>
      <input
        type="number"
        name="cardNumber"
        value={form.cardNumber}
        onChange={handleChange}
      />
      <label>Card Details</label>
      <input
        type="number"
        name="cardCvc"
        value={form.cardCvc}
        onChange={handleChange}
      />
      <button type="submit">Buy</button>
    </form>
  </>
);
