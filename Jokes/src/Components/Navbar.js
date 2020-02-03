import React, { useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter, useHistory } from 'react-router-dom';


const Navigation = (props) => {

    const valueRef = useRef(null);
    let history = useHistory();

    const handleClick = () => {
        history.push("/jokes/search/" + valueRef.current.value)

        valueRef.current.value = "";
    }

    const handleEnter = (event) => {

        if (event.keyCode === 13) {

            history.push("/jokes/search/" + valueRef.current.value)

            valueRef.current.value = "";

        }

    }


    return (
        <div className="container">

            <Navbar id="nav" className="justify-content-end" variant="light" expand={"xl"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pr-2">

                        <NavLink className="nav-link" exact to="/">FORSIDE</NavLink>

                        <NavDropdown title="JOKES" id="basic-nav-dropdown">

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/top10jokes">TOP 10</NavLink></NavDropdown.Item>

                            <NavDropdown.Item>  <NavLink className="nav-link" to="/allejokes">ALLE JOKES</NavLink></NavDropdown.Item>



                        </NavDropdown>

                        <NavLink className="nav-link" to="/jokeadmin">ADMIN</NavLink>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <div className="form-inline my-2 my-lg-0 justify-content-end">
                <input ref={valueRef} onKeyDown={handleEnter} className="form-control mr-sm-2" type="Search" placeholder="Search" aria-label="Search" />
                <button onClick={handleClick} className="btn btn-outline-sucess my-2 my-sm-0">Søg</button>

            </div>
        </div>



    )

}


export default withRouter(Navigation);
