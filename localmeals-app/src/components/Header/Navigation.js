import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';


const Navigation = () => {

    const [categories, setCategories] = useState({});


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


                    <NavLink className="nav-link" to="/howitworks">How it works</NavLink>

                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>

            </Navbar.Collapse>

            {/* <NavLink className="nav-link" to="/admin">Admin</NavLink> */}

        </Navbar>
    )
}

export default withRouter(Navigation);
