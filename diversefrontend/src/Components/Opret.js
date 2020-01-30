import React from 'react';
import {Form, Button} from 'react-bootstrap'

 const Opret = () => {
    return (
        <div className="container">

            <h1 className="text-center mb-5">Opret en ny joke</h1>

            <Form>
  <Form.Group controlId="formBasicEmail">
  
    <Form.Control type="text" placeholder="Jokens overskrift" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="JokeTekst her..." rows="3"></textarea>
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
