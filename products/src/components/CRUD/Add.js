import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ImageUploader from "react-images-upload";

const Add = () => {
    const [title, setTitle] = useState('');
    const [productText, setProductText] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState({});
    const [category, setCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/categories')
            .then(res => {
                setCategories(res.data);
                // console.log(res);
            })
    }, []);

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
        formData.append('productText', productText);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('productImage', productImage);

        axios.post('https://jonasv2711products.azurewebsites.net/products', formData)
            .then(res => {
                setRedirect(true);

                alert('You have added a new product');
            })
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    const handleButton = (e) => {
        e.preventDefault();
        setRedirect(true);
        // console.log(handleButton);
    }

    const handleOnChange = (e) => {

        setProductImage(e.target.files[0])
    }








    return (
        <div className="container">

            <h1 className="text-center mb-5 mt-5">Add a new Product</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail1">

                    <Form.Control type="text" value={title} required placeholder="Product Title" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <textarea type="text" value={productText} required onChange={(e) => setProductText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Product text..." rows="3"></textarea>
                </div>

                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={price} required placeholder="Price" onChange={(e) => setPrice(e.target.value)} />

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
                        Save Product
                                </Button>

                </div>

                <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    buttonText="Upload a Product Image"
                    name="productImage"
                    onChange={handleOnChange}

                />

                {/* 
                <input onChange={(e) => setProductImage(e.target.files[0])} type="file" name="productImage" /> */}

            </Form>






        </div>
    )
}

export default Add;
