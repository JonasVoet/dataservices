import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Jokes = () => {

    const [jokes, setJokes] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data.slice(0, 10));

            })
    }, [])
    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (

                <div className="container" key={joke.id}>

                    <div className="content text-center">
                        <Link to={'/' + joke._id}>
                            <h4 className="card-title red-text">{joke.title}</h4>
                        </Link>

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
                <h1 className="text-center mt-5 mb-5">Top 10 Jokes</h1>

                {jokeList}
            </div>


        </div>
    )



}

export default Jokes;
