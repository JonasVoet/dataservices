import React from 'react';
import './information.scss'

const Information = () => {
    return (
        <section className="information">
            <div className="content">
                <section className="boxes">
                    <div className="box 1">
                        <i className="fas fa-seedling fa-4x"></i>
                        <h3>Organic</h3>
                        <p>All meals are 100% organic</p>
                    </div>

                    <div className="box 2">
                        <i className="fas fa-dollar-sign fa-4x"></i>
                        <h3>Price matches quality</h3>
                        <p>We don't compromise on quality</p>
                    </div>

                    <div className="box 3">
                        <i className="fas fa-dolly fa-4x"></i>
                        <h3>Free shipping</h3>
                        <p>Free and fast shipping in Europe</p>
                    </div>
                </section>

            </div>



        </section>
    )
}

export default Information;
