import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBarComponent.css";
import logo from './imgs/logo.png';


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
                    <Container className='d-flex justify-content-between'>
                        <div>
                            <a href="index.html">
                                <img src={logo} alt="Logo de Clara Revora Showroom" />
                            </a>
                        </div>
                        <div className=''>
                            <Nav className="me-auto gap-5">
                                <Nav.Link href="#new-in">NEW IN</Nav.Link>
                                <Nav.Link href="#tienda">TIENDA</Nav.Link>
                                <Nav.Link href="#rebajas">REBAJAS</Nav.Link>
                                <Nav.Link href="#como-comprar">COMO COMPRAR</Nav.Link>
                                <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>

        </div>
    ); 

};

export default NavBarComponent;