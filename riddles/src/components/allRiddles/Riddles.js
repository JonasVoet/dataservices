import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Cover from '../Cover/Cover';

 const Riddles = () => {
     
    const [riddles, setRiddles] = useState({});
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
        axios.get('https://riddles-backend.herokuapp.com/riddles/limit', {
            params: {
                page,
                limit,
                setLimit
            }
        })
        .then(res => {
            setRiddles(res.data.results);
            setLength(res.data.length);
        });
    }, [page, limit]);

    const riddlesList = riddles.length ? (
        riddles.map(riddle => {
            return (
           

         <div className="col-sm-6" key={riddle._id}>

                    <div className="card mt-5">
                      


                        <div className="card-body text-center">
                            <Link to={'/riddles/' + riddle._id}>
                                <h5 className="card-title">{riddle.riddleText}</h5>
                            </Link>
                            <p className="card-text"><span>“</span>{riddle.answer}<span>”</span></p>
                            <p className="card-text"><i>- {riddle.riddleData}</i></p>

                          

                        </div>


                    </div>
                </div>

               

            )
        })
    ) : (
            <div className="text-center"><Spinner className="text-center" animation="border" role="status">
            <span className="sr-only text-center">Loading...</span>
          </Spinner></div>
        );






    return (
        <div>
            <Cover />
            <div className="container">

                

        
                <p id="all" className="text-center">Here can see all of our riddles</p>

         

                <button className="button" disabled={page - 1 <= 0} onClick={previousButton}>Previus</button>

                <button className="button" disabled={limit * (page - 1) + limit >= length} onClick={nextButton}>Next</button>

                <div className="row">


                    {riddlesList}



                </div>
                <p className="page">{(page - 1) * limit + 1}-{limit + (page - 1) * limit} af {length}</p>
            </div>
        </div>
    )
}

export default Riddles;
