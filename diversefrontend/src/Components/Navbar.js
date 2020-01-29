import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar">

            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/jokes">Jokes</NavLink></li>


        </div>
    )
}


export default withRouter(Navbar);
