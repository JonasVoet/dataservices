import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search/Search';


const Category = () => {

    const [categories, setCategories] = useState({});
    const [categoryName, setCategoryName] = useState({});
    const { category_id } = useParams();

    useEffect(() => {
        axios.get('https://jonasv2711quotes.azurewebsites.net/categories/' + category_id)
            .then(res => {
                // console.log(res);
                setCategories(res.data.quotes);
                setCategoryName(res.data);
            });
    }, [category_id]);


    const categoryList = categories.length ? (
        categories.map(category => {
            return (

                <div className="col-sm-6">
                    <div className="card mt-5">
                        <div className="card-body text-center">
                            <h4 className="card-title">{category.title}</h4>
                            <p className="card-text"><span>“</span>{category.quoteText}<span>”</span></p>
                            <p className="card-text">- <i>{category.author}</i></p>

                        </div>

                    </div>
                </div>


            )
        })
    ) : (
            <div className="center">Loading Quotes...</div>
        );


    return (
        <div className="container">
            <h1 id="categorytitle" className="text-center">{categoryName.categoryName}</h1>
            <p id="under" className="text-center">Find the Quote you like, and share with your friends and family</p>

            <Search />

            <div className="row">
                {categoryList}
            </div>

        </div>
    )
}

export default Category;
