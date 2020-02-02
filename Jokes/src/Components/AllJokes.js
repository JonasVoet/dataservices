import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllJokes = () => {
    const [jokes, setJokes] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data)

            })
    }, [])


    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (

                <div className="col-sm-6">

                    <div className="card mt-5" key={joke.id}>



                        <div className="card-body text-center">
                            <Link to={'/' + joke._id}>
                                <h5 className="card-title">{joke.title}</h5>
                            </Link>
                            <p className="card-text">{joke.jokeText}</p>
                            <p>Dato: {new Date(joke.jokeDate).toLocaleString()}</p>

                        </div>


                    </div>
                </div>

            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Alle Jokes</h1>

                <div className="row">

                    {jokeList}

                </div>

            </div>
        </div>
    )
}

export default AllJokes;
