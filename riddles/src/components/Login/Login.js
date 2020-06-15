import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


 const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();

        axios.post('http://localhost:5000/auth/login', {email, password}, {withCredentials:true}) 
        .then(res => {

            console.log(res);

        })
    }
    

    return (

        <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       
    )
}

export default Login;
