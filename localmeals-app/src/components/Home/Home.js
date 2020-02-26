import React from 'react';
import Cover from '../Cover/Cover';
import Organic from '../Organic-cover/Organic';
import Information from '../Information/Information';



const Home = () => {
    return (
        <div className="wrapper">
            <Cover />

            <main className="main">
                <Organic />
                <Information />

            </main>

        </div>
    )
}

export default Home;
