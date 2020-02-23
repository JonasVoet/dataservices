import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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


        <div className="card h-100">
            <img src={`https://jonasv2711products.azurewebsites.net/${product.productImage}`} alt="product" className="card-img-top" />

            <div className="card-body">
                <h4 className="card-title">
                    {product.title}
                </h4>
                <h5>{`€ ${product.price}`}</h5>

                <p className="card-text">{product.productText}</p>
            </div>


        </div>


    ) : (
            <div className="text-center">Loading Product...</div>
        )






    return (
        <div className="container">


            {oneProduct}

        </div>
    )
}

export default Product;
