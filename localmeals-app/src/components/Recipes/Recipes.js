import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button, Collapse } from 'react-bootstrap';
import SearchEdam from '../Search/SearchEdam';

import './recipes.scss';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);


    useEffect(() => {

        if (text) {

            Axios.get(`https://api.edamam.com/search?q=${text}&app_id=c97e7176&app_key=0acfeac3bd38c811c01ca28646544d5c`)
                .then(res => {
                    setRecipes(res.data.hits);
                    console.log(res.data.hits);
                })
        }

    }, [text]);

    const onSearch = (text) => {
        console.log(text);
        setText(text);

    }

    const recipeList = recipes.length ? (
        recipes.map(recipe => {
            return (

                <div className="col-lg-4 col-md-6 mb-4" key={recipe._id}>

                    <div className="card h-100">


                        <img className="card-img-top img-fluid" src={recipe.recipe.image} alt="recipe img" />

                        <div className="card-body text-center">
                            <h4 className="card-title">
                                <a target="blank" href={recipe.recipe.url}>
                                    {recipe.recipe.label}
                                </a>  </h4>

                            <h5>{recipe.recipe.dietLabels}</h5>


                            <Button id="colbtn"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                Shop List</Button>

                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <p className="card-text">
                                        {recipe.recipe.ingredientLines}
                                    </p>


                                </div>
                            </Collapse>




                        </div>

                        <div className="card-footer text-muted">
                            {recipe.recipe.source}
                        </div>

                    </div>

                </div>

            )
        })
    ) : (
            <div id="spinner" className="container text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h3 className="mt-4 text-center">Ready to search...</h3>
            </div>
        );


    return (
        <div id="recipes" className="container">


            <h1 id="menu" className="text-center mt-5">Get some inspiration!</h1>
            <p id="eda" className="text-center">We cooperate with Edamam, so you can enjoy free recipes</p>

            <SearchEdam onSearch={onSearch} />


            <div className="row">
                {recipeList}
            </div>



        </div>
    )
}

export default Recipes;
