import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ImageUploader from "react-images-upload";

const Edit = () => {

    const [title, setTitle] = useState('');
    const [productText, setProductText] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState();
    
    const [redirect, setRedirect] = useState(false);

    const { product_id } = useParams();

    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/products/' + product_id)
            .then(res => {
                setTitle(res.data.title);
                setProductText(res.data.productText);
                setPrice(res.data.price);
                // setProductImageUrl(res.data.productImage);
            })
    }, [product_id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('productText', productText);
        formData.append('price', price);
        formData.append('productImage', productImage);


        axios.patch('https://jonasv2711products.azurewebsites.net/products/' + product_id, formData)
            .then(() => setRedirect(true));

        alert(`You have updated a product`)
    }


    if (redirect) {
        return <Redirect to='/admin' />
    }


    const handleButton = (e) => {
        e.preventDefault();
        setRedirect(true);
    }


    const handleOnChange = (e) => {

        setProductImage(e[0])
        console.log(e);
    }



    return (
        <div className="container">
            <h1 className="text-center">Edit Quote</h1>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" value={title} required placeholder="product title" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <textarea type="text" value={productText} required onChange={(e) => setProductText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Text..." rows="3"></textarea>
                </div>

                <Form.Group controlId="formBasicEmail1">

                    <Form.Control type="text" value={price} required placeholder="price" onChange={(e) => setPrice(e.target.value)} />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>


                <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    buttonText="Update product Image"
                    name="productImage"
                    type="file"
                    onChange={handleOnChange}


                />

                {/* <input onChange={(e) => setProductImage(e.target.files[0])} type="file" name="productImage" /> */}

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
