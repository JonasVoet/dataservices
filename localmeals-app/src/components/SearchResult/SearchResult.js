import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResult = () => {

    const [products, setProducts] = useState({});
    const { text } = useParams();

    useEffect(() => {
        Axios.get('https://jonasv2711products.azurewebsites.net/products/search/' + text)
            .then(res => {
                setProducts(res.data);
            })
    }, [text]);

    const productList = products.length ? (
        products.map(product => {
            return (

                <div className="container" key={product._id}>

                    <Link to={'/products/' + product._id}>
                        <h1 className="search-result">{product.title}</h1>
                        <p className="search-result">
                            {product.ProductText}</p>

                    </Link>

                </div>

            )
        })
    ) : (
            <div className="text-center">No search results</div>
        );


    return (
        <div className="container text-center">
            <h1 id="results" className="text-center">Search results:</h1>
            {productList}
        </div>
    )
};

export default SearchResult;
