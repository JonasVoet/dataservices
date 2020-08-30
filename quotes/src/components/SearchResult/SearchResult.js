import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResult = () => {

    const [quotes, setQuotes] = useState({});
    const { text } = useParams();

    console.log(text);

    useEffect(() => {
        Axios.get('https://jonasv2711quotes.azurewebsites.net/quotes/search/' + text)
            .then(res => {
                setQuotes(res.data);
            });
    }, [text]);

    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                <div className="container" key={quote._id}>

                    <Link to={'/quotes/' + quote._id}>
                        <h1 className="search-result">{quote.title}</h1>
                        <p className="search-result"><span>
                            “</span>{quote.quoteText}<span>”</span></p>
                        <p className="search-result">-{quote.author}</p>

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
            {quoteList}
        </div>
    )
}

export default SearchResult;
