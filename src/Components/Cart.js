import React, { useState, useContext, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import AuthContext from "../Store/auth-context";
import axios from "axios";

function Cart({ show, onHide }) {
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)
  const [cartItems, setCartItems] = useState([]);

  const removeSymbols = (email) => {
    return email.replace(/[@.]/g, '')
  }
  const mailId = removeSymbols(authCtx.mail)

  useEffect(() => {
    axios.get(`https://crudcrud.com/api/5fe8e3d5c5574e66bfbcdb0f372e9594/data${mailId}`)
      .then(response => {
        setCartItems(response.data); 
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []);


  const cartItms = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      imageUrl={item.imageUrl}
    />
  ));

  const totalPrice = cartItems.reduce((totalPrice, item) => {
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
        {cartItms}
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
