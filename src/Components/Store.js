import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Cart from "./Cart";
import CartProvider from "../Store/CartProvider";
import AvailableProducts from "./AvailableProducts";
import CartContext from "../Store/cart-context";

const Store = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const cartCtx = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
            <Nav.Link>
              <Link to="/login">Login</Link>
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
            {console.log(cartCtx.getTotalItems)}
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
          <b>Music</b>
        </h1>
        <AvailableProducts />
      </Container>
      {isCartOpen && (
        <Cart show={isCartOpen} onHide={() => setIsCartOpen(false)} />
      )}
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

export default Store;
