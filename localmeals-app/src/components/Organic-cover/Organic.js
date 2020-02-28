import React from 'react';
import './organic.scss';
import { withRouter } from 'react-router-dom';
import Spoon from '../../images/spoon.png';
import Salmon from '../../images/salmon.png'

const Organic = () => {
    return (
        <div className="info-container">
            <section className="info-box text-center">


                <div className="flex-container">

                    <div className="img-box1">
                        <img src={Salmon} alt="Salmon" />
                    </div>

                    <h2 className="text-center">More than just a simple meal</h2>


                    <div className="img-box2">
                        <img src={Spoon} alt="Wooden spoon" />
                    </div>

                </div>

                <p>It's simple! but our meals are tasty, and <span>100%</span> organic</p>



            </section>

            {/* <NavLink to="/shopsection"> <button className="btn">Buy</button></NavLink> */}

        </div>
    )
}

export default withRouter(Organic);
