import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { Button, Modal } from 'react-bootstrap';

function Cart({ cartElements, show, onHide }) {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
    return total;
  };

  return (
    <Modal show={show} onHide={onHide} className="cart">
      <Modal.Header closeButton style={{backgroundColor: '#0275c8'}}>
      <Modal.Title  style={{ fontFamily: 'Badaboom', fontSize: '40px' }}>Cart</Modal.Title>

      </Modal.Header>
      <Modal.Body>
      <div className="cart-header d-flex justify-content-between">
          <div className="cart-item-header header-style">Item</div>
          <div className="cart-price-header header-style">Price</div>
          <div className="cart-quantity-header header-style">Quantity</div>
        </div>
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} index={index} removeFromCart={removeFromCart} />
        ))}
        <div className="cart-total">
          <h4 style={{textAlign: 'right'}}><b>Total: ₹{calculateTotal()}</b></h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;