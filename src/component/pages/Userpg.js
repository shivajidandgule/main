import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './userpg.css'
const Userpg = () => {

  const [Uservalidated, setUserValidated] = useState(false);
  const [Corvalidated, setCorValidated] = useState(false);
  const [BillValidated, setBillValidated] = useState(false);

  const UserHandleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      
      
    }

    setUserValidated(true);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setCorValidated(true);
  };

  const BillHandleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setBillValidated(true);
  };


  
  // const [userdisable ,setUserdisable]=useState(true)
  // const [cordisable ,setCordisable]=useState(true)
  // const [billdisable ,setBilldisable]=useState(true)

  // const handlebutton=()=>{
  //   setUserdisable(!userdisable)
  // }
 
  // const corHandleButton=()=>{
  //   setCordisable(!cordisable)
  // }
  // const billHandleButton=()=>{
  //   setBilldisable(!billdisable)
  // }
  return (

    <div  className='userpg1' > 
    <Card>
     <Form className='w-100' noValidate validated={Uservalidated}  onSubmit={UserHandleSubmit}>
     <Button style={{alignSelf:'end'}}  className=' mb-3  mt-3'  type="submit">{Uservalidated? 'Save' :'Edit'}</Button>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="First name"
           
          />
          <Form.Control.Feedback type="invalid">please enter first name</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
           
          />
          <Form.Control.Feedback type="invalid" >please enter last name</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="formBasicEmail">
          
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          
          <Form.Control type="number" placeholder="phone No" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone no.
          </Form.Control.Feedback>
        </Form.Group>
              </Row>
    </Form>
    </Card>
    <Card>
    <h3 style={{alignSelf:'start'}} >Correspondance Address</h3> 
    <Form  noValidate validated={Corvalidated} onSubmit={handleSubmit}>
     <Button style={{alignSelf:'end'}}  className='mb-3 mt-3' type="submit">{Corvalidated? 'Save' :'Edit'}</Button>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Address1"
           
          />
          <Form.Control.Feedback type="invalid">please enter Address</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Address2"
           
          />
          <Form.Control.Feedback type="invalid" >please enter Address</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
          </Form>
          </Card>
          
          <Card>
          <h3 style={{alignSelf:'start'}} >Billing Address</h3>     
    <Form noValidate validated={BillValidated} onSubmit={BillHandleSubmit}>
     <Button className='mb-3 mt-3' type="submit">{BillValidated? 'Save' :'Edit'}</Button>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Address1"
           
          />
          <Form.Control.Feedback type="invalid">please enter Address</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Address2"
           
          />
          <Form.Control.Feedback type="invalid" >please enter Addrees</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
          </Form>
          </Card>



       </div>
  )
}

export default Userpg
