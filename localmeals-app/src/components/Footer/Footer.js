import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './footer.scss';


const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">


                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget subscribe no-box">

                                <h5 className="widget-title">LocalMeals<span></span></h5>
                                <p>High quality meals ready to cook</p>

                            </div>
                        </div>

                        <div className="ol-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">

                                <h5 className="widget-title">Links<span></span></h5>

                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><NavLink to="/">Home</NavLink></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><NavLink to="/allproducts">Our menu</NavLink></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><NavLink to="/contact">Contact</NavLink></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><NavLink to="/about">About</NavLink></div>
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Are you hungry?<span></span></h5>
                                <p>Organic & high taste</p>
                                <NavLink to="shopsection" className="btn">Click me</NavLink>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Contact<span></span></h5>

                                <p><a href="mailto:info@domain.com"
                                    title="Mail">info@localmeals@gmail.com</a></p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-copyright">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright LocalMeals © 2020. All rights reserved</p>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}


export default withRouter(Footer);
