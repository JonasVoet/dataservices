import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

 const Add = () => {
    const [riddleText, setRiddleText] = useState('');
    const [answer, setAnswer] = useState('');
    const [riddles, setRiddles] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/riddles')
            .then(res => {
                setRiddles(res.data);
            })
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('riddleText', riddleText);
        formData.append('answer', answer);

        axios.post('https://riddles-backend.herokuapp.com/riddles/admin', {riddleText, answer}, {withCredentials: true})
            .then(res => {
                setRedirect(true);

                console.log(res.data)

                alert('You have now added a new riddle :)');
            })
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    const handleButton = (e) => {
        e.preventDefault();

        setRedirect(true);

        console.log(handleButton);

    }


    return (
        <div className="container">

            <h1 className="text-center mb-5 mt-5">Add a new Riddle</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail1">

                    <textarea type="text" value={riddleText} required onChange={(e) => setRiddleText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Riddle Text..." rows="3"></textarea>

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <div className="form-group">

                    <Form.Control type="text" value={answer} required placeholder="Answer" onChange={(e) => setAnswer(e.target.value)} />
                </div>

               


                <div className="col-lg-12 text-center p-3">
                    <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                        Regret
                </Button>

                    <Button variant="primary" type="submit">
                        Save Riddle
                                </Button>

                </div>

            </Form>

        </div>
    )
}

export default Add;
