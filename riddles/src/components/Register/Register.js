import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

 const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://riddles-backend.herokuapp.com/users', {name, email, password}, {withCredentials:true})
        .then(res => {
            console.log(res);
            setRedirect(true);
        })
    }

    if (redirect) {
        return <Redirect to='/' />
    }




    return (
        <div className="container text-center mt-5">

<Form onSubmit={handleSubmit}>


<Form.Group controlId="formBasicEmail">
    
    <Form.Control value={name} type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicName">
   
    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
   
    <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
   
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    )
}

export default Register;
