import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { Container, Navbar, Nav, Button, Row, Col, Form } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Cart from "./Cart";
import CartProvider from "../Store/CartProvider";
import CartContext from "../Store/cart-context";

const ContactUs = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartCtx = useContext(CartContext);


    let quantity = 0;
    cartCtx.items.forEach((item) => {
        quantity += Number(item.quantity);
    });

    const toggleCart = () => {
     setIsCartOpen(!isCartOpen);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        name,
        email,
        phone,
      };

    const response = await fetch('https://e-comm-c669b-default-rtdb.asia-southeast1.firebasedatabase.app/queries.json', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        console.log("Data stored successfully.");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        console.log("Failed to store data.");
      }
  };

  return (
    <>
     <CartProvider>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/">Store</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/contactUs">Contact Us</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
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
        <b>Contact Us</b>
        </h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-3">
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">Submit</Button>
    </Form>
      </Container>
      {isCartOpen && (
        <Cart
          show={isCartOpen}
          onHide={() => setIsCartOpen(false)}
        />
      )}
      <footer className="footer">
        <Container fluid style={{ backgroundColor: "skyblue", width: "100%" }}>
          <Row>
            <Col>
              <h1 style={{ fontFamily: "Serif", fontSize: "36px" }}>
                {" "}
                <b>THE GENERICS</b>
              </h1>
            </Col>
            <Col className="text-end">
              <div>
                <a href="https://www.youtube.com/">
                <FaYoutube size={40} />
                </a>{" "}
                <a href="https://www.instagram.com/">
                <FaInstagram size={40} />
                </a>{" "}
                <a href="https://www.facebook.com/">
                <FaFacebook size={40} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer> 
    </CartProvider>
    </>
  )
}

export default ContactUs