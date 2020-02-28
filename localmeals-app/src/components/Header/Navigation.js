import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, Form, Button, Modal } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';


const Navigation = () => {

    const [categories, setCategories] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // GET ALL CATEGORIES
    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/categories')
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    const categoryList = categories.length ? (
        categories.map(category => {
            return (
                <Fragment>
                    <NavDropdown.Item>  <NavLink className="nav-link" to={'/category/' + category._id}>{category.categoryName}</NavLink></NavDropdown.Item>
                </Fragment>
            )
        })
    ) : (
            <div className="text-center">No meals to show</div>
        );

    return (
        <Navbar className="justify-content-start" variant="light" expand={"xl"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto pr-2">

                    <NavLink className="nav-link" exact to="/">Home</NavLink>

                    <NavLink className="nav-link" to="/allproducts">Our menu</NavLink>

                    <NavDropdown title="Meals" id="basic-nav-dropdown">
                        {categoryList}
                    </NavDropdown>

                    <NavLink className="nav-link" to="/recipes">Recipes</NavLink>

                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                <Form inline>

                    <>
                        <Button id="loginbtn" variant="primary" onClick={handleShow}>
                            Login
      </Button>

                        <Modal show={show} onHide={handleClose}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button id="login" variant="primary" type="submit">
                                Login

                                </Button>

                            <Button id="login" variant="primary" type="submit">
                                Register

                                </Button>

                            <Modal.Footer>



                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </>

                </Form>

            </Navbar.Collapse>



        </Navbar >
    )
}

export default withRouter(Navigation);
