import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Search from '../Search/Search';

const AllProducts = () => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/products')

            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
    }, []);

    const productList = products.length ? (
        products.map(product => {

            return (

                <div className="col-lg-4 col-md-6 mb-4" key={product._id}>

                    <div className="card h-100">
                        <Link to={'/products/' + product._id}>

                            <img className="card-img-top" src={`https://jonasv2711products.azurewebsites.net/${product.productImage}`} alt="product img" />

                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={'/products/' + product._id}>
                                        {product.title}
                                    </Link>
                                </h4>
                                <h5>{`€ ${product.price}`}</h5>

                                <p className="card-text">{product.productText}</p>

                            </div>

                        </Link>

                    </div>

                </div>

            )

        })
    ) : (

            <div className="center">No products to show</div>

        );








    return (
        <div className="container">

            <div className="row">
                {productList}
            </div>



        </div>
    )
}

export default AllProducts;
