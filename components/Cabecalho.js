import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
   <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/cursos">cursos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">cadastro</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
   </>
  )
}

export default Cabecalho