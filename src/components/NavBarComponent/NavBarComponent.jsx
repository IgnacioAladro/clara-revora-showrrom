import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo.png';
import CartWidgetComponent from './CartWidgetComponent/CartWidgetComponent';
import './NavBarComponent.css';

import { useGetCategories } from '../../hooks/useProducts';

import { Link } from 'react-router-dom';


const NavBarComponent = () => {
    const { categories } = useGetCategories();

    return (
        <div className='me-app-style'>
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
                            <a href="/">
                                <img src={logo} alt="Logo de Clara Revora Showroom" />
                            </a>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto gap-5">
                                <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
                                    {categories.map((category, index) => {
                                        return (
                                            <NavDropdown.Item key={index}>
                                                <Link key={index} to={`/category/${category}`}>{category}</Link>
                                            </NavDropdown.Item>
                                        );
                                    })}
                                </NavDropdown>
                                <Nav.Link href="#rebajas">REBAJAS</Nav.Link>
                                <Nav.Link href="#como-comprar">COMO COMPRAR</Nav.Link>
                                <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                            </Nav>
                            <div>
                                <CartWidgetComponent />
                            </div>
                        </Navbar.Collapse>                            
                    </Container>
                </Navbar>
            </div>
        </div>
    ); 
};

export default NavBarComponent;