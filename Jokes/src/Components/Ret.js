import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Ret = () => {

    const [title, setTitle] = useState('');
    const [jokeText, setjokeText] = useState('');
    const [redirect, setRedirect] = useState(false);


    const { joke_id } = useParams();

    useEffect(() => {

        axios.get('http://localhost:3000/jokes/' + joke_id)
            .then(res => {
                // console.log(res);
                setTitle(res.data.title);
                setjokeText(res.data.jokeText);

            });
    }, [joke_id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch('http://localhost:3000/jokes/' + joke_id, { title, jokeText })
            .then(() => setRedirect(true));






        console.log(title);
        console.log(jokeText);

    }

    const handleButton = (e) => {
        e.preventDefault();

        setRedirect(true);

    }

    if (redirect) {

        return <Redirect to='/jokeadmin' />

    }



    return (
        <div className="container">
            <h1 className="text-center">Ret joke</h1>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={title} required placeholder="Joke overskrift" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <textarea type="text" value={jokeText} required onChange={(e) => setjokeText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="JokeTekst her..." rows="3"></textarea>
                </div>

                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Fortryd
  </Button>

                    <Button variant="primary" type="submit">
                        Gem rettet joke
  </Button>

                </div>


            </Form>
        </div>
    )
}

export default Ret;
