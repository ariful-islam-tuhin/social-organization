import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.cart);
  const { cart } = props;

  const name = cart.map((personName) => (
    <li key={personName._id}>{personName.name}</li>
  ));
  console.log(name);
  return (
    <div className="card">
      <h3>Show details</h3>
      <h5>added person: {cart.length}</h5>
      <br />
      <ol>{name}</ol>
    </div>
  );
};

export default Cart;
