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

                    <div className="content">
                        <Link to={'/' + joke._id}>
                            <span className="card-title red-text">{joke.title}</span>
                            {/* <p>{joke._id}</p> */}
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
            <div className="container home">
                <h1 className="center">Top 10 Jokes</h1>
                {jokeList}
            </div>
        </div>
    )
}
export default Home;
