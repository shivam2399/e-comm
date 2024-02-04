import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook, FaPlay } from "react-icons/fa";
import Cart from "./Cart";
import CartProvider from "../Store/CartProvider";
import CartContext from "../Store/cart-context";

const TourItem = ({ date, city, venue }) => {
  return (
    <div className="tour-item">
      <div className="tour-info">
        <p>Date: {date}</p>
        <p>City: {city}</p>
        <p>Venue: {venue}</p>
      </div>
      <Button variant="primary">BUY TICKETS</Button>
    </div>
  );
};


const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const tours = [
    {date: "16 JUL" ,city: "DETROIT, MI" , venue: "DTE ENERGY MUSIC THEATRE"},
    {date: "19 JUL",city: "TORONTO,ON", venue: "BUDWEISER STAGE"},
    {date: "22 JUL",city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE"},
    {date: "29 JUL",city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION"},
    {date: "2 AUG",city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA"},
    {date: "7 AUG",city: "CONCORD, CA", venue: "CONCORD PAVILION"}
  ];


    let quantity = 0;
    cartCtx.items.forEach((item) => {
        quantity += Number(item.quantity);
    });
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  

  return (
    <CartProvider>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
        <Nav className="mx-auto">
            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/">Store</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/contactUs">Contact Us</Link></Nav.Link>
          </Nav>
          <Button onClick={toggleCart} variant="outline-primary">
           <div>
            Cart
            <span>{quantity}</span>
            </div>
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
      <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                border: "1px solid blue",
                padding: "1rem",
              }}
            >
              <p>Get out Latest Album</p>
            </div>
            <Button
              variant="outline-primary"
              size="lg"
              style={{ 
                marginTop: "1rem",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               }}
            >
              <FaPlay />
            </Button>
          </div>
          <br></br>
      <Container>
        <h1
          style={{
            fontFamily: "Sans-serif",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          <b>TOURS</b>
        </h1> 

        {tours.map((tour, index) => (
        <div key={index} className="tour-line">
          <TourItem date={tour.date} city={tour.city} venue={tour.venue} />
        </div>
      ))}

      </Container>
      {isCartOpen && (
        <Cart
          show={isCartOpen}
          onHide={() => setIsCartOpen(false)}
        />
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
}

export default Home;