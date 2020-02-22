import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Quote = () => {
    const [quote, setQuotes] = useState({});
    const { quote_id } = useParams();

    useEffect(() => {
        axios.get('https://jonasv2711quotes.azurewebsites.net/quotes/' + quote_id)
            .then(res => {
                console.log(res);
                setQuotes(res.data);
            });
    }, [quote_id]);

    const oneQuote = quote ? (
        <div className="card mt-5">
            <div className="card-body text-center">
                <h4 className="card-title">{quote.title}</h4>
                <p className="card-text"><span>“</span>{quote.quoteText}<span>”</span></p>

                <p>Date: {new Date(quote.quoteData).toLocaleString()}</p>

            </div>
        </div>
    ) : (
            <div className="text-center">Loading Quote...</div>
        )





    return (
        <div className="container">
            {oneQuote}

        </div>
    )
}

export default Quote;
