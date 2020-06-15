import React from 'react'
import Navigation from './Navigation';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from '../../images/logo.svg'

import './header.scss';

 const Header = () => {
    return (
        <header className="header">

            <div className="logo">
            <NavLink className="nav-link" exact to="/"><img src={Logo} alt="Logo" /></NavLink>  
            </div>

         
            <Navigation />
        </header>
    )
}

export default withRouter(Header);
