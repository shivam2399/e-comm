import React, { useState, useRef } from 'react';
import { Form, Container, Col, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);



    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDG8_x1EAmNlLCZwoL5RsRqnckm8p3B0FM'

        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          header: {
            'Content-Type': 'application/json'
          }
        }
        ).then((res) => {
          setIsLoading(false);
          if(res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed';
              if(data && data.error && data.error.message) {
                errorMessage = data.error.message
              }
              throw new Error(errorMessage);
            })
          }
        })
        .then((data) => {
          localStorage.setItem(data.email, data.idToken);
          navigate('/')
        })
        .catch((err) => {
          alert(err.message)
        })


    }


  return (
    <Container fluid className='p-0'>
       <Card bg="primary" text="white" className="text-center p-4 mb-0">
        <Card.Title as="h1">Login</Card.Title>
       </Card>



        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={20}>
            <Card className='p-4 bg-primary text-white'>
              <Card.Body>
                <Form onSubmit={submitHandler} className='text-center'>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailInputRef} required />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordInputRef} required />
                  </Form.Group>

                  <Button variant="danger" type="submit" className='mt-3'>Login</Button>
                </Form>
                {isLoading && <p>Loading.....</p>}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;