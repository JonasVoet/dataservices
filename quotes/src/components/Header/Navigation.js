import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = () => {

    const [categories, setCategories] = useState({});



    // GET ALL CATEGORIES
    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(res => {
                // console.log(res);
                setCategories(res.data);

            });
    }, []);



    const categoryList = categories.length ? (
        categories.map(category => {
            return (

                
                    <NavDropdown.Item>  <NavLink className="nav-link" to={'/category/' + category._id}>{category.categoryName}</NavLink></NavDropdown.Item>
            )
        })
    ) : (
            <div className="text-center">No categories to show</div>
        );

    return (


        <div className="container">

            <Navbar id="nav" className="justify-content-end" variant="light" expand={"xl"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pr-2">

                        <NavLink className="nav-link" exact to="/">HOME</NavLink>

                        <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">

                            {categoryList}


                        </NavDropdown>

                        <NavLink className="nav-link" to="/allquotes">ALL QUOTES</NavLink>

                        <NavLink className="nav-link" to="/quoteadmin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>



        </div>
    )
}

export default withRouter(Navigation);
