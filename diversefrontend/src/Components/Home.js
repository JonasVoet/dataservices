import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

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

                    <div className="content text-center">
                        <Link to={'/' + joke._id}>
                            <h3 className="card-title red-text">{joke.title}</h3>
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
                <h1 className="text-center mb-5">Top 10 Jokes</h1>
                {jokeList}
            </div>
        </div>
    )
}
export default Home;
