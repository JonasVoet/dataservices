import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = () => {
    return (


        <div className="container">

            <Navbar id="nav" className="justify-content-end" variant="light" expand={"xl"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pr-2">

                        <NavLink className="nav-link" exact to="/">HOME</NavLink>

                        <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/">Hej</NavLink></NavDropdown.Item>

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/">Hej2</NavLink></NavDropdown.Item>



                        </NavDropdown>

                        <NavLink className="nav-link" to="/allquotes">ALL QUOTES</NavLink>

                        <NavLink className="nav-link" to="/quoteadmin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>


            <div className="form-inline my-2 my-lg-0 justify-content-end">
                <input className="form-control mr-sm-2" type="Search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-sucess my-2 my-sm-0">Search</button>

            </div>


        </div>
    )
}

export default withRouter(Navigation);
