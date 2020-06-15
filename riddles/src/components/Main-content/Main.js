import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardDeck } from 'react-bootstrap';
import './main.scss';



 const Main = () => {
    const [riddles, setRiddles] = useState({});

    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/riddles')
            .then(res => {
                console.log(res.data);
                setRiddles(res.data);
            })

    }, []);

    const riddlesList = riddles.length ? (
        riddles.slice(0,5).map(riddle => {
            return (

    <Card>
    <Card.Body>
            <Card.Title>{riddle.riddleText}</Card.Title>
      <Card.Text>
        {riddle.answer}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
            <small className="text-muted">{riddle.riddleData}</small>
    </Card.Footer>
  </Card>

            )
        })
    ) : (

        <div className="text-center">No riddles to show</div>
        
    );





    return (
        <div id="main" className="container">

            <div className="row">

                <div className="col-lg-12">
                <h2>Top 5 Riddles</h2>
            <CardDeck>
                {riddlesList}
            </CardDeck>
                </div>

            </div>

            


        </div>
    )
}

export default Main;
