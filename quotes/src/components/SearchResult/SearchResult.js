import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResult = () => {

    const [quotes, setQuotes] = useState({});
    const { text } = useParams();

    console.log(text);

    useEffect(() => {
        Axios.get('http://localhost:3000/quotes/search/' + text)
            .then(res => {
                setQuotes(res.data);
            });
    }, [text]);

    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                <div className="container" key={quote._id}>

                    <Link to={'/quotes/' + quote._id}>
                        <h1>{quote.title}</h1>
                        <p className="h2">{quote.quoteText}</p>

                    </Link>

                </div>

            )
        })
    ) : (

            <div className="text-center">No search results</div>
        );


    return (
        <div className="container text-center">
            {quoteList}
        </div>
    )
}

export default SearchResult;
