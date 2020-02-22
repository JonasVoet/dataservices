import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = () => {


    const [categories, setCategories] = useState({});



    // GET ALL CATEGORIES
    useEffect(() => {
        axios.get('https://jonasv2711quotes.azurewebsites.net/categories')
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
            <div className="text-center">No categories to show</div>
        );

    return (

        <div className="navbar">

            <Navbar id="nav" className="justify-content-end" variant="light" expand={"xl"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto pr-2">

                        <NavLink className="nav-link" to="/">HOME</NavLink>
                        {/* <NavLink className="nav-link" exact to="/">HOME</NavLink> */}

                        <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">

                            {categoryList}


                        </NavDropdown>


                        <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                        <NavLink className="nav-link" to="/admin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>




            </Navbar>




        </div >
    )
}

export default withRouter(Navigation);
