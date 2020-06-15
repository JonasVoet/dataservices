import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { NavLink, withRouter } from 'react-router-dom';



 const Navigation = () => {
    return (
        <Navbar className="justify-content-end" variant="light" expand={"xl"}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pr-2">


                <NavLink className="nav-link" to="/riddles">RIDDLES</NavLink>
                <NavLink className="nav-link" to="/quizzes">QUIZZES</NavLink>
               
                <NavLink className="nav-link" to="/signup">SIGN UP</NavLink>
                <NavLink className="nav-link" to="/login">LOGIN</NavLink>

               

            </Nav>




        </Navbar.Collapse>

    </Navbar>
        
    )
}

export default withRouter(Navigation);
