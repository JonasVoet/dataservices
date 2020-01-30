import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const JokeAdmin = () => {

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

                    <div className="row">

                        <div className="col-lg-3">

                            <p className="card-title red-text">{joke._id}</p>

                        </div>

                        <div className="col-lg-3">

                            <p className="card-title red-text">{joke.title}</p>

                        </div>

                        <div className="col-lg-3">

                            <p className="card-title red-text">{joke.jokeText}</p>

                        </div>

                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>


                    </div>

                </div>

            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );




    return (
        <div className="container">

            <h1 className="text-center mb-5">Jokes Admin</h1>

            <div className="row">
                <div className="col-lg-3">
                    <h2>ID</h2>

                    <div className="row">
                        <i class="fas fa-plus-circle"></i>
                        <p>Opret ny</p>
                    </div>




                </div>

                <div className="col-lg-3">
                    <h2>Overskrift</h2>

                </div>

                <div className="col-lg-3">
                    <h2>JokeTekst</h2>

                </div>

                <div className="col-lg-3 d-flex">
                    <h2>Ret</h2>
                    <h2>Slet</h2>

                </div>

            </div>

            {jokeList}

        </div>
    )
}

export default JokeAdmin;
