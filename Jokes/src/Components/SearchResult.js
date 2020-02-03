import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResult = () => {

    const [jokes, setJokes] = useState({});
    const { text } = useParams();

    console.log(text);



    useEffect(() => {
        Axios.get('http://localhost:3000/jokes/search/' + text)
            .then(res => {
                setJokes(res.data);

            });


    }, [text])

    const jokeList = jokes.length ? (

        jokes.map(joke => {
            return (
                <div className="container" key={joke._id}>

                    <Link to={'/' + joke._id}>
                        <div className="h2">{joke.title}</div>

                    </Link>

                </div>
            )
        })

    ) : (
            <div className="text-center">Ingen jokes at vise</div>
        );

    return (
        <div>
            {jokeList}

        </div>
    )
}

export default SearchResult;
