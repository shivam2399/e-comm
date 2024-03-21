import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  ListGroup,
  Button,
  Row,
  Col,
  Nav,
  Container,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/cart-context";
import CartProvider from "../Store/CartProvider";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Cart from "./Cart";

const dummyReviews = [
  { id: 1, rating: 4.5, comment: "Great product, I love it!" },
  { id: 2, rating: 3.2, comment: "Decent product for the price." },
  { id: 3, rating: 5.0, comment: "Excellent quality, highly recommended!" },
];

const ProductDetail = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const { id } = useParams();
  const product = cartCtx.availableItems.find(
    (item) => item.id === parseInt(id)
  );

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCartHandler = () => {
    cartCtx.addItem(product);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <CartProvider>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Store</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactUs">Contact Us</Link>
            </Nav.Link>
          </Nav>
          <Button onClick={toggleCart} variant="outline-primary">
            <div>
              <span>{quantity}</span>
            </div>
            Cart
          </Button>
        </Container>
      </Navbar>
      <Navbar
        bg="secondary"
        expand="sm"
        variant="light"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Container>
          <Nav className="mx-auto">
            <Navbar.Brand style={{ fontFamily: "Serif", fontSize: "50px" }}>
              <b>THE GENERICS</b>
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h1
          style={{
            fontFamily: "Sans-serif",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          <b>Product</b>
        </h1>
      </Container>
      {isCartOpen && (
        <Cart show={isCartOpen} onHide={() => setIsCartOpen(false)} />
      )}
      <div className="container mt-4">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ maxHeight: "400px", width: "auto" }}
              />
              <Card.Body>
                <Card.Title className="h4 mb-3">{product.title}</Card.Title>
                <Card.Text className="h5 text-primary">
                  Price: ₹{product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <div className="mt-4">
              <h3 className="mb-4">Product Reviews</h3>
              <ListGroup>
                {dummyReviews.map((review) => (
                  <ListGroup.Item key={review.id} className="border-0">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      <p className="font-weight-bold mb-0">
                        Rating: {review.rating}
                      </p>
                    </div>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
            <div className="mt-4 text-center">
              <Button onClick={addToCartHandler} variant="primary">
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <footer>
        <Container fluid style={{ backgroundColor: "skyblue", width: "100%" }}>
          <Row>
            <Col>
              <h1 style={{ fontFamily: "Serif", fontSize: "36px" }}>
                {" "}
                <b>THE GENERICS</b>
              </h1>
            </Col>
            <Col className="text-end">
              <a href="https://www.youtube.com/">
                <FaYoutube size={40} />
              </a>{" "}
              <a href="https://www.instagram.com/">
                <FaInstagram size={40} />
              </a>{" "}
              <a href="https://www.facebook.com/">
                <FaFacebook size={40} />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </CartProvider>
  );
};

export default ProductDetail;
