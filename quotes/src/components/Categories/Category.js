import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Category = () => {

    const [categories, setCategories] = useState({});
    const { category_id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/categories/' + category_id)
            .then(res => {
                console.log(res);
                setCategories(res.data.quotes);
            });
    }, [category_id]);


    const categoryList = categories.length ? (
        categories.map(category => {
            return (

                <div className="card mt-5">
                    <div className="card-body text-center">
                        <h4 className="card-title">{category.title}</h4>
                        <p className="card-text">{category.quoteText}</p>
                        <p className="card-text">- <i>{category.author}</i></p>

                        <p>Date: {new Date(category.quoteData).toLocaleString()}</p>

                    </div>
                </div>
            )
        })
    ) : (
            <div className="center">Loading Quotes...</div>
        );


    return (
        <div className="container">
            {categoryList}

        </div>
    )
}

export default Category;
