import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = (props) => {

    const [joke, setJokes] = useState({});

    useEffect(() => {
        let id = props.match.params.joke_id;
        axios.get('http://localhost:3000/jokes/' + id)
            .then(res => {
                console.log(res);
                setJokes(res.data);

            });
    }, [])


    const oneJoke = joke ? (
        <div className="post">
            <h4 className="text-center">{joke.title}</h4>
            <p className="text-center">{joke.jokeText}</p>
            <p className="text-center">Dato: {joke.jokeDate}</p>

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