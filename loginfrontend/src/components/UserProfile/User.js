import React from 'react';
import profile from '../../img/profile.png';


 const User = () => {

    




    return (
         <wrapper className="BrugerContainer m-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-5">
                        <h3 className="text-center">Welcome</h3>
                    </div>
                </div>
                <div className="row content mt-5">
                    <div id="first" className="col-lg-6 text-left pl-5">
                     
                    </div>
                    <div id="second" className="col-lg-6">
                        <img src={profile}></img>
                    </div>
                </div>


            </div>

        </wrapper>
    )
}

export default User;
