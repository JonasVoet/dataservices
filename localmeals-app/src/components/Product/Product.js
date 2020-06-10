import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './product.scss'


const Product = () => {
    const [product, setProduct] = useState({});
    const { product_id } = useParams();

    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/products/' + product_id)
            .then(res => {
                setProduct(res.data);
            });
    }, [product_id]);

    const oneProduct = product ? (

        <div className="rec-container">

            <img src={`https://jonasv2711products.azurewebsites.net/${product.productImage}`} alt="product" className="card-img-top" />

            <div className="card-body">
                <h4 className="card-title">
                    <h1>{product.title}</h1>
                </h4>
                <h5>{`€ ${product.price}`}</h5>

                <p className="card-text">{product.productText}</p>
            </div>


        </div>



    ) : (
            <div className="container">
                <div className="text-center">Loading Product...</div>
            </div>
        )




    return (
        <div id="one" className="container text-center">


            <div className="flex">
                <div className="row">
                    {oneProduct}
                </div>
            </div>


        </div>
    )
}

export default Product;
