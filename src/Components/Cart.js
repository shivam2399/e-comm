import React, { useState, useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Store/cart-context";

function Cart({ show, onHide }) {
  const cartCtx = useContext(CartContext)

  const addToCartHandler = (item) => {
    const existingCartItem = cartCtx.items.find((cartItem) => cartItem.id === item.id);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cartCtx.items.push({ ...item, quantity: 1 });
    }
  };
  
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      imageUrl={item.imageUrl}
      onAddToCart={addToCartHandler}
    />
  ));

  const totalPrice = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + (parseInt(item.quantity) * item.price);
  }, 0);

  const purchaseProducts = () => {
    alert(`Thanks for the purchase. Your total is ₹${totalPrice}`);   
  };

  return (
    <Modal show={show} onHide={onHide} className="cart">
      <Modal.Header closeButton style={{ backgroundColor: "#0275c8" }}>
        <Modal.Title style={{ fontFamily: "Badaboom", fontSize: "40px" }}>
          Cart
        </Modal.Title>
        {console.log(cartCtx.items.length)}
      </Modal.Header>
      <Modal.Body>
        <div className="cart-header d-flex justify-content-between">
          <div className="cart-item-header header-style">Item</div>
          <div className="cart-price-header header-style">Price</div>
          <div className="cart-quantity-header header-style">Quantity</div>
        </div>
        {/* {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            index={index}
            removeFromCart={C}
            handleQuantityChange={handleQuantityChange}
          />
        ))} */}
        {cartItems}
        <div className="cart-total">
          <h4 style={{ textAlign: "right" }}>
            <b>Total: ₹{totalPrice}</b>
          </h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={purchaseProducts}>
          PURCHASE
        </Button>
      </Modal.Footer>
    </Modal>
  );    
}

export default Cart;
