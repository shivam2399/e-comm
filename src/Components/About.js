import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { Container, Navbar, Nav, Button, Row, Col, Image } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Cart from "./Cart";
import CartProvider from "../Store/CartProvider";
import CartContext from "../Store/cart-context";
import AuthContext from "../Store/auth-context";
import image from '../assets/Damn.png'


const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);


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
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            {authCtx.isLoggedIn ?  <Nav.Link ><Link to="/store">Store</Link></Nav.Link> : <Nav.Link ><Link to="/login">Store</Link></Nav.Link>}
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/contactUs">Contact Us</Link></Nav.Link>
            {!authCtx.isLoggedIn && <Nav.Link><Link to="/login">Login</Link></Nav.Link>}
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
        <b>About</b>
        </h1>
        <Row>
         <Col xs={12} md={6} className="text-center">
            <div className="image-container">
                <Image src={image} alt="Album Art" roundedCircle/>
            </div>
         </Col>
         <Col xs={12} md={6}>
            <p>
              <b>
                Lorem ipsum carrots enhanced rebates. Excellent sayings of a
                man of sorrows, hates no prosecutors will unfold in the
                enduring of which were born in it? Often leads smallest mistake
                some pain main responsibilities are to stand for the right
                builder of pleasure, accepted explain up to now. , The things
                we are accusing of these in the explication of the truth
                receives from the flattery of her will never be the trouble and
                they are refused to the pleasures and the pleasures of the
                pain, explain the treatment of excepturi of the blessed
                sufferings. I never said will unfold in him receives at another
                time he may please the one that those works, we are less than
                they, this refused to the pleasures of deleniti? Those are! Will
                unfold in times of pleasure, this pain will be a right enjoyed
                by corrupt, are accusing him of all pleasures, and seek his own,
                or, to the needs of the agony of the choice. We hate the fellow.
                Lorem ipsum dolor, sit amet consectetur rebates. The
                distinction, that arise from or to. The greater, therefore, an
                obstacle to the duties of the debts receives the very great
                importance to us that these are consequent to that question is
                answered, which was selected for the fault, it is often one of
                us, however, have any! Moreover, this is often not at once take
                the hardships of the life of harsh condemn, we are accusing
                him? Him whom something large cisterns.
              </b>
            </p>
          </Col>
        </Row> 
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
  );
}

export default About;