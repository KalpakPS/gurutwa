import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const offset = window.scrollY;
    //         if (offset > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // let navbarClasses = ['navbar', 'sticky-top'];
    // if (scrolled) {
    //     navbarClasses.push('scrolled');
    // }


    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        {/* className={navbarClasses.join(" ")} */}
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
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default NavBar