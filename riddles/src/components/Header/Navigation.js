import React, {useState} from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import Login from '../Login/Login';

import { NavLink, withRouter } from 'react-router-dom';





 const Navigation = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Navbar className="justify-content-end" variant="light" expand={"xl"}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pr-2">


                <NavLink className="nav-link" to="/riddles">RIDDLES</NavLink>
                <NavLink className="nav-link" to="/quizzes">QUIZZES</NavLink>
               
             


                <>
      <NavLink className="nav-link" onClick={handleShow} to="#">LOGIN</NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
    <Modal.Body><Login /></Modal.Body>
    
        <Modal.Footer>
        
        <NavLink className="nav-link" to="/register">
            Sign up
          </NavLink>
          
          <Button className="nav-link" onClick={handleClose}>
            Close
          </Button>

         
         
        </Modal.Footer>
        
      </Modal>
    </>


    {/* <NavLink className="nav-link" to="/admin">ADMIN</NavLink> */}

               

            </Nav>




        </Navbar.Collapse>

    </Navbar>
        
    )
}

export default withRouter(Navigation);
