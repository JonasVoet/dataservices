import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

const Opret = () => {

  const [title, setTitle] = useState('');
  const [jokeText, setjokeText] = useState('');
  const [redirect, setRedirect] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/jokes', { title, jokeText })
      .then(res => {


        setRedirect(true);

      })

    console.log(title);
    console.log(jokeText);

  }

  if (redirect) {

    return <Redirect to='/' />

  }


  return (
    <div className="container">

      <h1 className="text-center mb-5">Opret en ny joke</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">

          <Form.Control type="text" value={title} required placeholder="Joke overskrift" onChange={(e) => setTitle(e.target.value)} />

          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <div class="form-group">

          <textarea type="text" value={jokeText} required onChange={(e) => setjokeText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Joke tekst her..." rows="3"></textarea>
        </div>

        <div className="col-lg-12 text-center p-3">
          <Button variant="primary" type="button" className="m-2">
            Fortryd
  </Button>

          <Button variant="primary" type="submit">
            Gem Joke
  </Button>

        </div>


      </Form>


    </div>
  )
}

export default Opret;
