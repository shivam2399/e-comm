import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../Store/cart-context';
import { Link } from 'react-router-dom';

function Product({ product, index }) {

  const cartCtx = useContext(CartContext)

  const addToCart = (event) => {
    event.preventDefault();
      const quantity = 1;
      cartCtx.addItem({ 
       id: product.id,
       title: product.title,
       price: product.price,
       imageUrl: product.imageUrl,
       quantity: quantity
     });
    }

  return (
    <div className="product m">
      <Card style={{width: '14rem'}}>
        <Card.Img variant="top" src={product.imageUrl}  />
        <Card.Body>
        <Card.Title>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0">₹{product.price}</p>
            <Button onClick ={addToCart} variant="primary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;