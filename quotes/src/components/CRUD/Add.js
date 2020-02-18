import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

    const [title, setTitle] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/quotes', { title, quoteText, author, category })
            .then(res => {
                setRedirect(true);

                alert('You have added a quote');
            })

        console.log(title);
        console.log(quoteText);
        console.log(author);

    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    const handleButton = (e) => {
        e.preventDefault();
        setRedirect(true);
        console.log(handleButton);
    }


    return (
        <div className="container">

            <h1 className="text-center mb-5 mt-5">Add a new Quote</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail1">

                    <Form.Control type="text" value={title} required placeholder="Quote Title" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <textarea type="text" value={quoteText} required onChange={(e) => setQuoteText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Quote text..." rows="3"></textarea>
                </div>

                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={author} required placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail3">

                    <Form.Control type="text" value={category} required placeholder="Category ID" onChange={(e) => setCategory(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Regret
  </Button>

                    <Button variant="primary" type="submit">
                        Save Quote
                                </Button>

                </div>


            </Form>


        </div>
    )
}

export default Add;
