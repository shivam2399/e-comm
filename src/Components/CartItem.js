import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../Store/cart-context';
import AuthContext from '../Store/auth-context';
import axios from "axios";

function CartItem({ id, name, price, quantity, imageUrl }) {
  
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext)
  const removeSymbols = (email) => {
    return email.replace(/[@.]/g, '')
  }
  const mailId = removeSymbols(authCtx.mail)


  const handleRemoveFromCart = () => {
    cartCtx.removeItem(id);

    axios.delete(`https://crudcrud.com/api/eac19b813c66453797059270451d145c/data${mailId}`)
      .then(response => {
        console.log("Item removed successfully:", response.data);
      })
      .catch(error => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <div className="cart-item">
      <Card>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-left">
            <Card.Img variant="success" src={imageUrl} style={{ width: '5rem' }}  />
            <Card.Title className="text-center mt-2 mb-0">{name}</Card.Title>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="m-0">₹{price}</p>
          </div>
          <div className="d-flex flex-column align-items-right">
            <input 
              type="number"
              className="cart-item-quantity"
              value={quantity}
              style={{width: '40px'}}
            ></input>
            <Button variant="danger" onClick={handleRemoveFromCart}>
              Remove
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartItem;
