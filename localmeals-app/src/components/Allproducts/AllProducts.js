import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import './allproducts.scss';


const AllProducts = () => {

    const [products, setProducts] = useState({});
    const [page, setPage] = useState(1);
    const [length, setLength] = useState();
    const [limit, setLimit] = useState(6);

    const nextButton = () => {
        setPage(c => c + 1);
    }

    const previousButton = () => {
        setPage(c => c + -1);
    }


    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/products/limit', {
            params: {
                page,
                limit,
                setLimit
            }
        })
            .then(res => {
                console.log(res);
                setProducts(res.data.results);
                setLength(res.data.length);
            });
    }, [page, limit])

    const productList = products.length ? (
        products.map(product => {
            return (
                <div className="col-lg-4 col-md-6 mb-4" key={product._id}>

                    <div className="card h-100">


                        <img className="card-img-top img-fluid" src={`https://jonasv2711products.azurewebsites.net/${product.productImage}`} alt="product img" />

                        <div className="card-body text-center">
                            <h4 className="card-title">
                                <Link to={'/products/' + product._id}>
                                    {product.title}
                                </Link>
                            </h4>
                            <h5>{`€ ${product.price}`}</h5>

                            <p className="card-text">{product.productText}</p>
                        </div>

                    </div>


                </div>

            )
        })
    ) : (
            <div className="container text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h3 className="mt-4 text-center">Loading Meals...</h3>
            </div>

        );


    return (
        <div>
            <div id="all" className="container">

                <h1 id="menu" className="text-center mt-5">Our Menu</h1>
                <p id="all" className="text-center">Here can see all of our meals</p>

                <Search />

                <button className="button" disabled={page - 1 <= 0} onClick={previousButton}>Previus</button>

                <button className="button" disabled={limit * (page - 1) + limit >= length} onClick={nextButton}>Next</button>

                <div className="row">


                    {productList}



                </div>
                <p className="page">{(page - 1) * limit + 1}-{limit + (page - 1) * limit} af {length}</p>
            </div>
        </div>

    )
}


export default AllProducts;
