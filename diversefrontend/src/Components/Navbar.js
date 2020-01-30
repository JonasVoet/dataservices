import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar className="justify-content-end" variant="light" expand={"xl"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto pr-2">
                    <NavLink className="nav-link" exact to="/">Forside</NavLink>
                    <NavLink className="nav-link" to="/jokes">Jokes</NavLink>
                    <NavLink className="nav-link" to="/jokeadmin">JokeAdmin</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )

}


export default withRouter(Navigation);
