import React, { useState } from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import "./login.css"

const Login = (props) => {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            props.history.push('/menulist')
        }
    
        setValidated(true);
      };
    return (
        <>
            <Container>
                
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup hasValidation>

                                <Form.Control  required type="email" placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>

                                <InputGroup hasValidation>
                                <Form.Control   required type="password" placeholder="Password" />
                               
                                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                   </Form.Control.Feedback>
               </InputGroup>
                            </Form.Group>

                            <Button typeof='submit' variant="success btn-block" type="submit" className='logbtn'>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
};

export default Login;