import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import axios from 'axios';


const Home = () => {

    const [jokes, setJokes] = useState({});


    useEffect(() => {
        axios.get('http://localhost:3000/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data.slice(-2));

            })
    }, [])
    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (
                <Toast className="mb-4" key={joke.id}>

                    <Toast.Header>
                        <strong className="mr-auto mt-4">{joke.title}</strong>
                        <small>{new Date(joke.jokeDate).toLocaleString()}</small>
                    </Toast.Header>
                    <Toast.Body>{joke.jokeText}</Toast.Body>
                </Toast>





            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );


    return (

        <div>

            <div className="container">
                <h1 className="text-center mt-5">Sjove Jokes</h1>
                <p className="text-center">Platte jokes, sjove jokes og meget mere...</p>
                <div className="jumbotron">
                </div>


                <div className="row">
                    <h4 className="mb-3 col-lg-12">Nyeste Jokes:</h4>

                </div>

                <div className="row">
                    <div className="col-lg-12">

                        {jokeList}


                    </div>

                </div>

            </div>

        </div >



    )
}

export default Home;
