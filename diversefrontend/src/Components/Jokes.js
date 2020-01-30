import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Jokes = () => {
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

                <div className="container" key={joke.id}>

                    <div className="content">
                        <Link to={'/' + joke.id}>
                            <h3>{joke.title}</h3>
                        </Link>

                        <p>{joke.jokeText}</p>
                        <p>Dato: {joke.jokeDate}</p>
                        {/* <p>{joke._id}</p> */}

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
                <h1 className="text-center">Jokes</h1>
                {jokeList}
            </div>
        </div>
    )
}

export default Jokes;
