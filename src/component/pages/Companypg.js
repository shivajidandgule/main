import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
const Companypg = () => {



 
  const [userdisable ,setUserdisable]=useState(true)
  const [cordisable ,setCordisable]=useState(true)
  const [billdisable ,setBilldisable]=useState(true)

  const handlebutton=()=>{
    setUserdisable(!userdisable)
  }
 
  const corHandleButton=()=>{
    setCordisable(!cordisable)
  }
  const billHandleButton=()=>{
    setBilldisable(!billdisable)
  }
  return (
    <div  className='userpg1' > 
    <Container className='w-100'>
     <Form  >

       <Card> 

      <Button  type='submit'  style={{alignSelf:'end'}} onClick={handlebutton} className=" h-25">{userdisable ? 'Edit' :'Save'}</Button>
         
     <Row className="mb-15 mt-2 ">
    <Form.Group as={Col} >
      
      <Form.Control disabled={userdisable}  type="test" placeholder="last name"  required/>
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Control disabled={userdisable} type="text" placeholder="first name" />
    </Form.Group>
  </Row>
  <Row className="mb-3 mt-3">
    <Form.Group as={Col} >
     
      <Form.Control disabled={userdisable} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} >
     
      <Form.Control disabled={userdisable} type="number" placeholder="Phone No" />
       
    </Form.Group>
  </Row>
  </Card>
  <Card className="mt-2">
  <Button  onClick={corHandleButton} style={{alignSelf:'end'}} className=" mt-1 h-25">{cordisable ? 'Edit' :'Save'}</Button>
   <Form.Label className='  mt-1 mb-5 w-50'>Correspondance Address </Form.Label>
   
   
  <Row className="mb-5 ">
    <Form.Group as={Col} >
      
      <Form.Control disabled={cordisable} type="test" placeholder="Address1" />
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Control disabled={cordisable} type="text" placeholder="Address2" />
    </Form.Group>
    <Form.Group as={Col} >
      
      <Form.Control disabled={cordisable} type="test" placeholder="city" />
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Control disabled={cordisable} type="text" placeholder="State" />
    </Form.Group>
    <Form.Group as={Col} >
      
      <Form.Control disabled={cordisable} type="number" placeholder="Zip" required='required' />
    </Form.Group>
    
  </Row>
  </Card>
  <Card className="mt-2">
  <Button  onClick={billHandleButton} style={{alignSelf:'end'}} className=" mt-1 h-25">{billdisable ? 'Edit' :'Save'}</Button>
   <Form.Label  style={{alignSelf:'start' }} className='  mt-1 mb-4 w-50'>Billing Address </Form.Label> 
  <Row className="mb-5 ">
    <Form.Group as={Col} >
      
      <Form.Control disabled={billdisable} type="test" placeholder="Address1" />
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Control disabled={billdisable} type="text" placeholder="Address2" />
    </Form.Group>
    <Form.Group as={Col} >
      
      <Form.Control disabled={billdisable} type="test" placeholder="city" />
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Control disabled={billdisable} type="text" placeholder="State" />
    </Form.Group>
    <Form.Group as={Col} >
      
      <Form.Control disabled={billdisable} type="number" placeholder="Zip" />
    </Form.Group>
    
  </Row>
  </Card>
</Form>
</Container>
    </div>

  )
}

export default Companypg
