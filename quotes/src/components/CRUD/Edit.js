import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const [title, setTitle] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [author, setAuthor] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { quote_id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/quotes/' + quote_id)
            .then(res => {
                setTitle(res.data.title);
                setQuoteText(res.data.quoteText);
                setAuthor(res.data.author);


            })
    }, [quote_id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch('http://localhost:3000/quotes/' + quote_id, { title, quoteText, author })
            .then(() => setRedirect(true));

        console.log(title);
        console.log(quoteText);
    }

    const handleButton = (e) => {
        e.preventDefault();

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    return (
        <div className="container">
            <h1 className="text-center">Edit Quote</h1>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={title} required placeholder="Quote title" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <textarea type="text" value={quoteText} required onChange={(e) => setQuoteText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Quote Text..." rows="3"></textarea>
                </div>

                <Form.Group controlId="formBasicEmail1">

                    <Form.Control type="text" value={author} required placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Regret
  </Button>

                    <Button variant="primary" type="submit">
                        Save changes

  </Button>

                </div>


            </Form>
        </div>
    )
}

export default Edit;
