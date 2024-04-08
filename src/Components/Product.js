import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import AuthContext from "../Store/auth-context";
import { Link } from "react-router-dom";
import axios from "axios";



function Product({ product }) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  // const [quantity, setQuantity] = useState(cartCtx.items.length)

  const removeSymbols = (email) => {
    return email.replace(/[@.]/g, '')
  }

  const mailId = removeSymbols(authCtx.mail)

  const addToCart = (event) => {
    event.preventDefault();
    const quantity = 1;
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: quantity,
    });

    const data = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: quantity,
    };

    axios.post(`https://crudcrud.com/api/5fe8e3d5c5574e66bfbcdb0f372e9594/data${mailId}`, data)
      .then(response => {
        console.log("Product added to backend:", response.data);
      })
      .catch(error => {
        console.error("Error adding product to backend:", error)
      })

      // setQuantity(cartCtx.items.length)
  };

  return (
    <div className="product m">
      <Card style={{ width: "14rem" }}>
        {console.log(mailId)}
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0">₹{product.price}</p>
            <Button onClick={addToCart} variant="primary">
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
