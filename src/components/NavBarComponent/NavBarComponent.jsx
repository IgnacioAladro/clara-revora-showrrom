import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBarComponent.css";


const NavBarComponent = () => {

    return (

        <div>

            <div className="container">
                <p>
                    <a href="tel:+542324504614" className="sinDeco">+54 9 2324 504614</a> |{' '}
                    <a href="mailto:clararevora@gmail.com" target="_blank" rel="noopener noreferrer" className="sinDeco">
                        clararevora@gmail.com
                    </a>
                </p>
            </div>
        
            <div>
                <Navbar data-bs-theme="light">
                    <Container>
                        <a href="#home">
                            <img src="imgs/logo.png" alt="" />
                        </a>
                        <Nav className="me-auto">
                            <Nav.Link href="#new-in">NEW IN</Nav.Link>
                            <Nav.Link href="#tienda">TIENDA</Nav.Link>
                            <Nav.Link href="#rebajas">REBAJAS</Nav.Link>
                            <Nav.Link href="#como-comprar">COMO COMPRAR</Nav.Link>
                            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </div>
    );

};

export default NavBarComponent;