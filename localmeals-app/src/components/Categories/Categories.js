import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './categories.scss';

const Categories = () => {

    const [categories, setCategories] = useState({});
    const [categoryName, setCategoryName] = useState({});
    const { category_id } = useParams();

    useEffect(() => {
        axios.get('https://jonasv2711products.azurewebsites.net/categories/' + category_id)
            .then(res => {
                console.log(res);
                setCategories(res.data.products);
                setCategoryName(res.data);
            });
    }, [category_id]);




    const categoryList = categories.length ? (
        categories.map(category => {
            return (

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-200">
                        <img className="card-img-top img-fluid" src={`https://jonasv2711products.azurewebsites.net/${category.productImage}`} alt="product img" />

                        <div className="card-body">
                            <h4 className="card-title">{category.title}</h4>

                            <h5>{`€ ${category.price}`}</h5>

                            <p className="card-text">{category.productText}</p>

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
        <div id="category" className="container text-center">
            <h1 id="categorytitle" className="text-center">{categoryName.categoryName}</h1>

            <div className="row">

                {categoryList}

            </div>

        </div>
    )
}

export default Categories;
