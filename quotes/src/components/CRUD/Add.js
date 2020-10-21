import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

    const [title, setTitle] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [author, setAuthor] = useState('');
    const [categories, setCategories] = useState({});
    const [category, setCategory] = useState('');
    const [quoteImage, setQuoteImage] = useState('');
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        axios.get('https://jonasv2711quotes.azurewebsites.net/categories')
            .then(res => {

                setCategories(res.data);
                console.log(res);

            })
    }, [])

    const categoryList = categories.length ? (
        categories.map(category => {
            return (


                <Fragment>
                    <option value="" disabled hidden>Pick a category</option>
                    <option value={category._id}>{category.categoryName}</option>
                </Fragment>



            )
        })
    ) : (
            <Fragment></Fragment>
        );


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('quoteText', quoteText);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('quoteImage', quoteImage);

        axios.post('http://localhost:3000/quotes', formData)
            .then(res => {
                setRedirect(true);

                alert('You have added a quote');
            })

        // console.log(title);
        // console.log(quoteText);
        // console.log(author);
        console.log(category);
        console.log(quoteImage);

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

                <Form.Group controlId="formBasicEmail4">
                    <select value={category} onChange={(e) => setCategory(e.target.value)} as="select">


                        {categoryList}
                    </select>
                </Form.Group>



                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Regret
                    </Button>

                    <Button variant="primary" type="submit">
                        Save Quote
                                </Button>

                </div>


                <input onChange={(e) => setQuoteImage(e.target.files[0])} type="file" name="quoteImage" />

            </Form>
        </div>
    )
}

export default Add;
