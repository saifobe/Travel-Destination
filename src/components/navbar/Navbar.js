import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
 function Navigatebar() {
  return (
    <>
    
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Travel Destination</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigatebar;
