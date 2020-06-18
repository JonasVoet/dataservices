import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup, Spinner } from 'react-bootstrap';
import './main.scss';



 const Main = () => {
    const [riddles, setRiddles] = useState({});

    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/riddles')
            .then(res => {
                // console.log(res.data);
                setRiddles(res.data);
            })

    }, []);

    const riddlesList = riddles.length ? (
        riddles.slice(0,6).map(riddle => {
            return (

                <div className="col-lg-6">
                <Card>
                  <Card.Body>
                      <Card.Title>
                         {riddle.riddleText}
                      </Card.Title>

                      <Card.Text>
                        {riddle.answer}
                      </Card.Text>
                      
                </Card.Body> 

                <Card.Footer>
                <small className="text-muted">{riddle.riddleData}</small>
                </Card.Footer> 
               </Card>
               </div>
            )
        })
    ) : (

        <div className="container text-center">
            <div className="text-center"><Spinner className="text-center" animation="border" role="status">
            <span className="sr-only text-center">Loading...</span>
          </Spinner></div>
        </div>

        
    );





    return (
        <div id="main" className="container">

        
                <h2>Top 6 Riddles</h2>
                <div className="row">
            <CardGroup>
                
                {riddlesList}
              
            </CardGroup>
            </div>
            
           
        </div>
    )
}

export default Main;
