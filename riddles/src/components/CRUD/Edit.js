import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

 const Edit = () => {
    
    const [riddleText, setRiddleText] = useState('');
    const [answer, setAnswer] = useState('');
    const [redirect, setRedirect] = useState(false);

    const {riddle_id} = useParams();

    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/riddles/' + riddle_id)
            .then(res => {
                setRiddleText(res.data.riddleText);
                setAnswer(res.data.answer);
            
            })
    }, [riddle_id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch('https://riddles-backend.herokuapp.com/riddles/admin/' + riddle_id, {riddleText, answer}, {withCredentials: true})
            .then(() => setRedirect(true));
    }

    const handleButton = (e) => {
        e.preventDefault();

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }




    return (

        <div className="container">
        <h1 className="text-center">Edit Riddle</h1>


        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">

                <Form.Control type="text" value={riddleText} required placeholder="Riddle text" onChange={(e) => setRiddleText(e.target.value)} />

                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <div className="form-group">

                <textarea type="text" value={answer} required onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Riddle Answer..." rows="3"></textarea>
            </div>


            <div className="col-lg-12 text-center p-3">
                <Button onClick={handleButton} variant="primary" type="button" className="m-2">
                    Regret
                </Button>

                <Button variant="primary" type="submit">
                    Save changes

            </Button>

            </div>


        </Form>
    </div>
       
    )
}

export default Edit;
