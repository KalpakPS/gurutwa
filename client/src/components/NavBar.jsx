import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log('Scroll Y:', currentScrollY);
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`navbar-custom ${isScrolled ? 'scrolled' : ''} sticky-top`}
        >
            <Navbar.Brand href="/" className="ps-3">
                <img
                    src="/GURUTWA logo white.png"
                    alt="Logo"
                    width="150"
                    height="61"
                    className="d-inline-block align-text-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/events">
                        Events
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

