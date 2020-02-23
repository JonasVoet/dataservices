import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const AddCategory = () => {

    const [categoryName, setCategoryName] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://jonasv2711quotes.azurewebsites.net/categories', { categoryName })
            .then(res => {
                setRedirect(true);

                alert('You have added a category');
            })
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    const handleButton = (e) => {
        e.preventDefault();
        setRedirect(true);
    }


    return (
        <div className="container">

            <h1 className="text-center mb-5 mt-5">Add a new Category</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={categoryName} required placeholder="Category Name" onChange={(e) => setCategoryName(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>


                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Regret
  </Button>

                    <Button variant="primary" type="submit">
                        Save Category
  </Button>

                </div>


            </Form>


        </div>
    )
}

export default AddCategory;
