import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import './MyNavbar.css'

class MyNavbar extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>                    
                        <Nav.Link href="#home">Home</Nav.Link>                  
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#documentation">Documentation</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default MyNavbar