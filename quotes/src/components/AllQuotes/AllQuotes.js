import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';


const AllQuotes = () => {

    const [quotes, setQuotes] = useState({});
    const [page, setPage] = useState(1);
    const [length, setLength] = useState();
    const [limit, setLimit] = useState(4);

    const nextButton = () => {
        setPage(c => c + 1);
    }

    const previousButton = () => {
        setPage(c => c + -1);
    }


    useEffect(() => {
        axios.get('http://localhost:3000/quotes/limit', {
            params: {
                page,
                limit,
                setLimit
            }
        })
            .then(res => {
                console.log(res);
                setQuotes(res.data.results);
                setLength(res.data.length);
            });
    }, [page, limit])


    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (

                <div className="col-sm-6" key={quote._id}>

                    <div className="card mt-5">
                        <img class="card-img-top" src={`http://localhost:3000/${quote.quoteImage}`} alt="Card image cap" />


                        <div className="card-body text-center">
                            <Link to={'/quotes/' + quote._id}>
                                <h5 className="card-title">{quote.title}</h5>
                            </Link>
                            <p className="card-text"><span>“</span>{quote.quoteText}<span>”</span></p>
                            <p className="card-text"><i>- {quote.author}</i></p>

                            {/* <p>Date: {new Date(quote.quoteData).toLocaleString()}</p> */}

                        </div>


                    </div>
                </div>

            )
        })
    ) : (
            <div className="center">No quotes to show</div>
        );





    return (
        <div>
            <div className="container">

                <h1 id="allquotes" className="text-center mt-5">Welcome to our site</h1>
                <p id="all" className="text-center">Here can see all of our quotes</p>

                <Search />

                <button className="button" disabled={page - 1 <= 0} onClick={previousButton}>Previus</button>

                <button className="button" disabled={limit * (page - 1) + limit >= length} onClick={nextButton}>Next</button>

                <div className="row">


                    {quoteList}



                </div>
                <p className="page">{(page - 1) * limit + 1}-{limit + (page - 1) * limit} af {length}</p>
            </div>
        </div>

    )
}

export default AllQuotes;
