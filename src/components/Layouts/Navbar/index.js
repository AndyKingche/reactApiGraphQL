import React, {useState} from 'react'
import logo from '../../img/graphql.png'
import { Nav, NavItem, Navbar, NavDropdown,Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Navegacion(){
    return(
      <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/home"><img
        alt="Logo"
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}API GraphQL / Blog</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/usuarios">Usuarios</Nav.Link>
    <Nav.Link href="/comentarios">Comentarios</Nav.Link>
    <Nav.Link href="/categorias">Categorias</Nav.Link>
    <Nav.Link href="/posts">Posts</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
</>
    )
}
export default Navegacion;