import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const QuoteAdmin = () => {

    const [quotes, setQuotes] = useState({});

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = () => {
        axios.get('https://jonasv2711quotes.azurewebsites.net/quotes')
            .then(res => {
                console.log(res);
                setQuotes(res.data)
            });
    }

    const handleDelete = (id) => {
        if (window.confirm('Sure you wanna delete this quote?')) {
            axios.delete('https://jonasv2711quotes.azurewebsites.net/quotes/' + id)
                .then(res => {
                    console.log(res);

                    fetchData();
                });
        }
    }

    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (

                <tr key={quote._id}>
                    <th scope="row">{quote._id}</th>
                    <td>{quote.title}</td>
                    {/* <td>{quote.category.categoryName}</td> */}
                    <td>{quote.quotes}</td>
                    <td>{quote.quoteText}</td>
                    <td><Link to={`/edit/${quote._id}`}><i className="fas fa-pencil-alt"></i></Link></td>
                    <td><i onClick={() => handleDelete(quote._id)} className="fas fa-minus-circle"></i></td>

                </tr>
            )
        })
    ) : (
            <div className="text-center">No quotes to show</div>
        );

    return (
        <div id="admin" className="container">

            <h1 className="text-center mt-5 mb-5">ADMIN</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th className="heading" scope="col">ID</th>
                        <th className="heading" scope="col">Title</th>
                        <th className="heading" scope="col">Category</th>
                        <th className="heading" scope="col">Quote text</th>
                        <th className="heading" scope="col">Edit</th>
                        <th className="heading" scope="col">Delete</th>
                    </tr>

                    <tr>

                        <th className="heading" scope="col"> <Link to="/add"><i className="fas fa-plus-circle"></i>   </Link>Add new quote</th>
                    </tr>

                    <tr>
                        <th className="heading" scope="col"> <Link to="/addcategory"><i className="fas fa-plus-circle"></i>   </Link>Add new category</th>
                    </tr>


                </thead>

                <tbody>


                    {quoteList}
                </tbody>

            </table>
        </div>
    )
}

export default QuoteAdmin;