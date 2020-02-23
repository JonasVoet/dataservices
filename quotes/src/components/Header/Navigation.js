import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter, useHistory } from 'react-router-dom';

const Navigation = () => {

    const valueRef = useRef(null);
    let history = useHistory();
    const [categories, setCategories] = useState({});

    const handleClick = () => {
        history.push("/quotes/search/" + valueRef.current.value)

        valueRef.current.value = "";
    }

    const handleEnter = (event) => {

        if (event.keyCode === 13) {
            history.push("/quotes/search/" + valueRef.current.value)

            valueRef.current.value = "";
        }
    }

    // GET ALL CATEGORIES
    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(res => {
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

                        <NavLink className="nav-link" to="/admin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>

                <div className="form-inline my-2 my-lg-0 justify-content-end">
                <input ref={valueRef} onKeyDown={handleEnter} className="form-control mr-sm-2" type="Search" placeholder="Search" aria-label="Search" />
                <button onClick={handleClick} className="btn btn-outline-sucess my-2 my-sm-0">Search</button>

            </div>

            </Navbar>

           



        </div>
    )
}

export default withRouter(Navigation);
