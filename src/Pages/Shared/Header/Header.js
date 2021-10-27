import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>

                    <NavDropdown title="Manage Service" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={HashLink} to="/manage/addservice">Add Service</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/manage/deleteservice">Delete Service</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/manage/updateservice">Update Service</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                     </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;