import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';

 const AddUser = () => {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     function handleSubmit(e) {
        e.preventDefault();
        Axios.post("http://localhost:3000/users/user/create", {
            name,
            email,
            password
        }).then(response => {
            alert("Oprettet bruger!");
        });
    }


    return (
        <div className="OpretKonto container text-dark">
            <Form onSubmit={handleSubmit} className="OpretKontoForm">
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Navn" required onChange={(e) => setName(e.target.value)} />
                        </Col>
                    </Row>
                </Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form.Row>

               
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
         
        </div>
    )
}

export default AddUser;
