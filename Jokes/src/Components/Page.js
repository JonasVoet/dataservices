import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast } from 'react-bootstrap';

const Page = () => {

    const [jokes, setJokes] = useState({});
    const [page, setPage] = useState(1);
    const [length, setLength] = useState();
    const [limit, setLimit] = useState(3);




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
                <Toast className="mb-4" key={joke.id}>

                    <Toast.Header>
                        <strong className="mr-auto mt-4">{joke.title}</strong>
                        <small>{new Date(joke.jokeDate).toLocaleString()}</small>
                    </Toast.Header>
                    <Toast.Body>{joke.jokeText}</Toast.Body>
                </Toast>

            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );


    return (
        <div>

            <button disabled={page - 1 <= 0} onClick={previousButton}>Forrige</button>

            <button disabled={limit * (page - 1) + limit >= length} onClick={nextButton}>Næste</button>
            
            
            {jokeList}




            <p>{(page - 1) * limit + 1}-{limit + (page - 1) * limit} af {length}</p>


        </div>
    )
}

export default Page;
