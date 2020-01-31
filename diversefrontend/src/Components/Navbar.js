import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className="container">
            <Navbar id="nav" className="justify-content-end" variant="light" expand={"xl"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pr-2">

                        <NavLink className="nav-link" exact to="/">FORSIDE</NavLink>

                        <NavDropdown title="JOKES" id="basic-nav-dropdown">

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/jokes">TOP 10</NavLink></NavDropdown.Item>

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/allejokes">ALLE JOKES</NavLink></NavDropdown.Item>



                        </NavDropdown>

                        <NavLink className="nav-link" to="/jokeadmin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}


export default withRouter(Navigation);
