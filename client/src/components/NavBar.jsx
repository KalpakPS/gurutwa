import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="ps-3">
            <img src="/GURUTWA logo white.png" 
            alt="Logo" 
            width="150" 
            height="48" 
            class="d-inline-block align-text-top" 
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default NavBar