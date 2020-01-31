import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Joke = (props) => {

    const [joke, setJokes] = useState({});
    const { joke_id } = useParams();

    useEffect(() => {

        axios.get('http://localhost:3000/jokes/' + joke_id)
            .then(res => {
                console.log(res);
                setJokes(res.data);

            });
    }, [joke_id])


    const oneJoke = joke ? (
        <div className="card mt-5">
            <div className="card-body text-center">
                <h4 className="card-title">{joke.title}</h4>
                <p className="card-text">{joke.jokeText}</p>
                <p>Dato: {new Date(joke.jokeDate).toLocaleString()}</p>
            </div>
        </div>
    ) : (
            <div className="center">Loading Joke...</div>
        );





    return (
        <div className="container">

            {oneJoke}
        </div>
    )
}


export default Joke;
