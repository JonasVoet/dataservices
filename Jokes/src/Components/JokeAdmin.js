import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JokeAdmin = () => {

    const [jokes, setJokes] = useState({});


    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = () => {

        axios.get('http://localhost:3000/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data)

            });
    }

    const handleDelete = (id) => {

        if (window.confirm('Sikker på du vil slette joken!')) {

            axios.delete('http://localhost:3000/jokes/' + id)
                .then(res => {
                    console.log(res);

                    fetchData();
                });
        }
    }


    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (



                <tr key={joke._id}>
                    <th scope="row">{joke._id}</th>
                    <td>{joke.title}</td>
                    <td>{joke.jokeText}</td>
                    <td><Link to={`/ret/${joke._id}`}><i className="fas fa-pencil-alt"></i></Link></td>
                    <td><i onClick={() => handleDelete(joke._id)} className="fas fa-minus-circle"></i></td>

                </tr>






            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );

    return (
        <div className="container">

            <h1 className="text-center mt-5 mb-5">ADMIN</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th className="heading" scope="col">ID</th>
                        <th className="heading" scope="col">Overskrift</th>
                        <th className="heading" scope="col">Joketekt</th>
                        <th className="heading" scope="col">Ret</th>
                        <th className="heading" scope="col">Slet</th>
                    </tr>

                    <tr>

                        <th className="heading" scope="col"> <Link to="/opret"><i className="fas fa-plus-circle"></i>   </Link>Opret Ny</th>

                    </tr>
                </thead>

                <tbody>


                    {jokeList}
                </tbody>

            </table>
        </div>
    )
}

export default JokeAdmin;
