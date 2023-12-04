import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBarComponent.css";
import logo from '../../images/logo.png';


const NavBarComponent = () => {

    return (

        <div>

            <div className="container">
                <p>
                    <a href="tel:+542324504614" className="sinDeco">+54 9 2324 504614</a> |{' '}
                    <a href="mailto:clararevora16@gmail.com" target="_blank" rel="noopener noreferrer" className="sinDeco">
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

                        <div>
                            <Nav className="me-auto gap-5 me-navBar-style">
                                <Nav.Link href="#new-in">NEW IN</Nav.Link>
                                <Nav.Link href="#tienda">TIENDA</Nav.Link>
                                <Nav.Link href="#rebajas">REBAJAS</Nav.Link>
                                <Nav.Link href="#como-comprar">COMO COMPRAR</Nav.Link>
                                <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                            </Nav>
                        </div>

                        <div>
                            <a href="#cart-shop" className='sinDeco'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/></svg>
                                4
                            </a>
                        </div>
                            
                    </Container>
                </Navbar>
            </div>

        </div>
    ); 

};

export default NavBarComponent;