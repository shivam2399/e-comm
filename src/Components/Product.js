import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../Store/cart-context';

function Product({ product, index }) {

  const cartCtx = useContext(CartContext)

  return (
    <div className="product m">
      <Card style={{width: '14rem'}}>
        <Card.Img variant="top" src={product.imageUrl}  />
        <Card.Body>
          <Card.Title>Album {index+1}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0">₹{product.price}</p>
            <Button onClick ={cartCtx.addItem} variant="primary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;