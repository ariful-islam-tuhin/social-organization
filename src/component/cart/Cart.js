import React from "react";
const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  for (const person of cart) {
    if (!person.quantity) {
      person.quantity = 1;
    }
    totalQuantity = totalQuantity + person.quantity;
  }
  return (
    <div>
      <h3>Show details</h3>
      <h5>{totalQuantity}</h5>
    </div>
  );
};

export default Cart;
