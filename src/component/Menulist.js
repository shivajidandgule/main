import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './menulist.css'
import Agency from './pages/Agency'
import Broker from './pages/Broker'
import Companypg from './pages/Companypg'
import Customer from './pages/Customer'
import Userpg from './pages/Userpg'

const Menulist = (props) => {
  // onClick={()=>{props.test()}}
  return (
    <div >

<Navbar
         
         bg="dark"
         variant="dark"
       >
          <Navbar.Brand  ><b>Agile Health </b></Navbar.Brand>
          <Container className="d-flex  justify-content-end">
 
             <Button
           className="btn btn-success   mb-2 "
           type="submit"
           onClick={() => {
             props.history.push("/");
           }}
         >
           logout
         </Button>
          </Container>
        
       </Navbar>
      

  
    <div  className='menulist'>
      




    <BrowserRouter>
 
    <Row>
    <Navbar variant="info"  className='brd w-25'>
    <Container  className='flex-column ' >
    <Nav.Link  className='nav' as={Link} to="/userpg"    > User</Nav.Link>
    <Nav.Link  className='nav'as={Link} to="/companypg" >Company</Nav.Link>
    <Nav.Link  className='nav' as={Link} to="/customer" >Customer  </Nav.Link>
    <Nav.Link  className='nav' as={Link} to="/agency" >Agency  </Nav.Link>
    <Nav.Link   className='nav' as={Link} to="/broker" >Broker  </Nav.Link>


    
    </Container>
  </Navbar>
 
    
    <Col  > <Route exact path='/Userpg' component={Userpg}></Route>

<Route  path='/Companypg' component={Companypg}></Route>
<Route  path='/Customer' component={Customer}></Route>
<Route  path='/Agency' component={Agency}></Route>
<Route  path='/Broker' component={Broker}></Route>
</Col>
  </Row>


  
 
 


</BrowserRouter>
    </div>
    </div>
  )
}

export default Menulist
