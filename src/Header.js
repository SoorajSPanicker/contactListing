import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <h1><Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={""}>
            <i class="fa-solid fa-id-card-clip fa-2x"></i></Link>
         
          <b className='ms-2 fs-2'>Contact App</b>
          </Navbar.Brand>
        </Container>
      </Navbar></h1>
    </div>
  )
}

export default Header