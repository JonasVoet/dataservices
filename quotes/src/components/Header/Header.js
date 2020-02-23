import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="container-fluid">


            <Navigation />


            <div className="sub-box">
                <h2>Subscribe and get FREE daily quotes!</h2>
                <p>Get our daily quotes direct into your inbox</p>
                <div id="email" className="form-inline  justify-content-center">
                    <input className="form-control mr-sm-2" type="email" placeholder="you@youremail.com" aria-label="Search" />
                    <button className="btn btn-outline-sucess my-2"><i className="fas fa-arrow-right"></i></button>

                </div>
            </div>



        </header>
    )
}


export default Header;
