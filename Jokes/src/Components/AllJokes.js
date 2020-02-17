import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllJokes = () => {
    const [jokes, setJokes] = useState({});
    const [page, setPage] = useState(1);
    const [length, setLength] = useState();
    const [limit, setLimit] = useState(4);

    const nextButton = () => {
        setPage(c => c + 1);
    }

    const previousButton = () => {
        setPage(c => c + -1);
    }


    useEffect(() => {
        axios.get('http://localhost:3000/jokes/limit', {
            params: {
                page,
                limit,
                setLimit
            }
        })
            .then(res => {
                // console.log(res);
                setJokes(res.data.results);
                setLength(res.data.length);

            })
    }, [page, limit])


    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (

                <div className="col-sm-6" key={joke._id}>

                    <div className="card mt-5">



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

                <button className="button" disabled={page - 1 <= 0} onClick={previousButton}>Forrige</button>

                <button className="button" disabled={limit * (page - 1) + limit >= length} onClick={nextButton}>Næste</button>

                <div className="row">


                    {jokeList}



                </div>
                <p>{(page - 1) * limit + 1}-{limit + (page - 1) * limit} af {length}</p>
            </div>
        </div>
    )
}

export default AllJokes;
